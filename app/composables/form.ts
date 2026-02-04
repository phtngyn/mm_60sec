import type { EmblaCarouselType } from 'embla-carousel'
import type { ShallowRef, ShallowUnwrapRef } from 'vue'
import * as z from 'zod'

// Validation types for input fields
type InputValidationType = 'string' | 'email' | 'number'

// UCarousel component exposed type
interface CarouselComponent {
  emblaRef?: Ref<HTMLElement | undefined>
  emblaApi?: Ref<EmblaCarouselType | undefined>
}

// Base field config
interface BaseFieldConfig {
  id: string
  field: string
  title: string
  description?: string
}

// Checkbox field config
interface CheckboxFieldConfig extends BaseFieldConfig {
  type: 'checkbox'
  items: string[]
  validation?: {
    min?: number
    minMessage?: string
    max?: number
    maxMessage?: string
  }
}

// Radio field config
interface RadioFieldConfig extends BaseFieldConfig {
  type: 'radio'
  items: string[]
  validation?: {
    required?: boolean
    requiredMessage?: string
  }
}

// Input field config
interface InputFieldConfig extends BaseFieldConfig {
  type: 'input'
  validation: {
    type: InputValidationType
    minLength?: number
    minLengthMessage?: string
    maxLength?: number
    maxLengthMessage?: string
    required?: boolean
    requiredMessage?: string
    invalidMessage?: string
  }
}

// Multi-input field config (multiple input fields in one step)
interface MultiInputFieldConfig extends BaseFieldConfig {
  type: 'multi-input'
  fields: Array<{
    field: string
    label?: string
    validation: {
      type: InputValidationType
      minLength?: number
      minLengthMessage?: string
      maxLength?: number
      maxLengthMessage?: string
      required?: boolean
      requiredMessage?: string
      invalidMessage?: string
    }
  }>
}

type FieldConfig = CheckboxFieldConfig | RadioFieldConfig | InputFieldConfig | MultiInputFieldConfig

// Form configuration
interface FormConfig {
  steps: FieldConfig[]
}

// Return type
interface FormSchema {
  schema: z.ZodObject<any>
  stepSchemas: z.ZodObject<any>[]
  metadata: {
    steps: FieldConfig[]
    initialState: Record<string, any>
  }
}

export function createFormSchema(config: FormConfig): FormSchema {
  const schemaFields: Record<string, z.ZodTypeAny> = {}
  const stepSchemas: z.ZodObject<any>[] = []
  const initialState: Record<string, any> = {}

  for (const step of config.steps) {
    const stepSchema: Record<string, z.ZodTypeAny> = {}

    switch (step.type) {
      case 'checkbox': {
        // Checkbox: array of strings with min/max validation
        let fieldSchema = z.array(z.string())

        if (step.validation?.min !== undefined) {
          fieldSchema = step.validation.minMessage
            ? fieldSchema.min(step.validation.min, step.validation.minMessage)
            : fieldSchema.min(step.validation.min)
        }

        if (step.validation?.max !== undefined) {
          fieldSchema = step.validation.maxMessage
            ? fieldSchema.max(step.validation.max, step.validation.maxMessage)
            : fieldSchema.max(step.validation.max)
        }

        schemaFields[step.field] = fieldSchema
        stepSchema[step.field] = fieldSchema
        initialState[step.field] = []
        break
      }

      case 'radio': {
        // Radio: single string value
        let fieldSchema = z.string()

        if (step.validation?.required !== false) {
          fieldSchema = step.validation?.requiredMessage
            ? fieldSchema.min(1, step.validation.requiredMessage)
            : fieldSchema.min(1)
        }
        else {
          fieldSchema = fieldSchema.optional() as any
        }

        schemaFields[step.field] = fieldSchema
        stepSchema[step.field] = fieldSchema
        initialState[step.field] = ''
        break
      }

      case 'input': {
        // Input: based on validation type
        const fieldSchema = createInputSchema(step.validation)

        schemaFields[step.field] = fieldSchema
        stepSchema[step.field] = fieldSchema
        initialState[step.field] = step.validation.type === 'number' ? 0 : ''
        break
      }

      case 'multi-input': {
        // Multi-input: multiple fields in one step
        for (const field of step.fields) {
          const fieldSchema = createInputSchema(field.validation)
          schemaFields[field.field] = fieldSchema
          stepSchema[field.field] = fieldSchema
          initialState[field.field] = field.validation.type === 'number' ? 0 : ''
        }
        break
      }
    }

    stepSchemas.push(z.object(stepSchema))
  }

  return {
    schema: z.object(schemaFields),
    stepSchemas,
    metadata: {
      steps: config.steps,
      initialState,
    },
  }
}

/**
 * Helper to create input field schema based on validation config
 */
function createInputSchema(validation: InputFieldConfig['validation']) {
  let fieldSchema: z.ZodString | z.ZodNumber | z.ZodEmail

  // Base type
  switch (validation.type) {
    case 'email':
      fieldSchema = validation.invalidMessage
        ? z.string().email(validation.invalidMessage)
        : z.string().email()
      break
    case 'number':
      return z.number()
    case 'string':
    default:
      fieldSchema = z.string()
      break
  }

  // Apply length constraints for string types
  if (validation.minLength !== undefined && typeof fieldSchema !== 'number') {
    fieldSchema = validation.minLengthMessage
      ? fieldSchema.min(validation.minLength, validation.minLengthMessage)
      : fieldSchema.min(validation.minLength)
  }

  if (validation.maxLength !== undefined && typeof fieldSchema !== 'number') {
    fieldSchema = validation.maxLengthMessage
      ? fieldSchema.max(validation.maxLength, validation.maxLengthMessage)
      : fieldSchema.max(validation.maxLength)
  }

  // Required or optional
  if (validation.required === false) {
    return fieldSchema.optional()
  }

  // Add required message if provided
  if (validation.requiredMessage) {
    fieldSchema = fieldSchema.min(1, validation.requiredMessage)
  }

  return fieldSchema
}

export function useApplyForm(
  config: FormConfig,
  carouselRef: ShallowRef<ShallowUnwrapRef<CarouselComponent | null>>,
) {
  const form = createFormSchema(config)
  const schema = form.schema
  type Schema = z.output<typeof schema>

  const state = ref<Record<string, any>>(form.metadata.initialState)
  const currentStep = ref(0)

  const currentStepConfig = computed(() => form.metadata.steps[currentStep.value]!)

  function nextStep() {
    if (currentStep.value < form.stepSchemas.length - 1) {
      currentStep.value++
      carouselRef.value?.emblaApi?.scrollTo(currentStep.value)
    }
  }

  function prevStep() {
    if (currentStep.value > 0) {
      currentStep.value--
      carouselRef.value?.emblaApi?.scrollTo(currentStep.value)
    }
  }

  function onSelect(index: number) {
    currentStep.value = index
  }

  function goToStep(index: number) {
    if (index >= 0 && index < form.stepSchemas.length) {
      carouselRef.value?.emblaApi?.scrollTo(index)
    }
  }

  function submit(callback: (data: Schema) => void) {
    return (event: { data: Schema }) => {
      callback(event.data)
    }
  }

  return {
    // Schema & form config
    schema,
    form,

    // State
    state,
    currentStep,

    // Computed
    currentStepConfig,

    // Navigation functions
    nextStep,
    prevStep,
    onSelect,
    goToStep,

    // Submit handler
    submit,
  }
}

// Export types for use in components
export type {
  CheckboxFieldConfig,
  FieldConfig,
  FormConfig,
  FormSchema,
  InputFieldConfig,
  MultiInputFieldConfig,
  RadioFieldConfig,
}

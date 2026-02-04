import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

// Validation types for input fields
type InputValidationType = 'string' | 'email' | 'number'

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

function createForm(config: FormConfig): FormSchema {
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
        ? z.email(validation.invalidMessage)
        : z.email()
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
) {
  const form = createForm(config)
  const schema = form.schema
  type Schema = z.output<typeof schema>

  const state = ref<Record<string, any>>(form.metadata.initialState)

  function submit(event: FormSubmitEvent<Schema>) {
    console.log(event.data)
  }

  return {
    schema,
    form,
    state,
    submit,
  }
}

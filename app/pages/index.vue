<script setup lang="ts">
// Fetch content from Nuxt Content
const { data: content } = await useAsyncData(() => queryCollection('content').path('/').first())

// Create carousel ref first
const carousel = useTemplateRef('carousel')

// Use the form composable with carousel ref
const {
  schema,
  form,
  state,
  currentStep,
  isLastStep,
  nextStep,
  prevStep,
  goToStep,
  onSelect,
} = useApplyForm({
  steps: content.value?.apply.steps || [],
}, carousel)

function onSubmit(event: { data: any }) {
  console.log('Form submitted:', event.data)
}
</script>

<template>
  <div
    v-if="content"
    class="min-h-screen"
  >
    <UHeader :ui="{ container: 'px-28 sm:px-28 lg:px-28 max-w-480' }">
      <template #left>
        <div class="flex items-center gap-3">
          <div class="w-46.5 h-8.5">
            <img src="/images/mm_logo.svg" alt="multa-medio logo">
          </div>
        </div>
      </template>

      <UNavigationMenu
        :items="[
          {
            label: 'Mobile Developer',
            badge: 'm/w/d',
            to: '#hero',
          },
          {
            label: 'Deine Vorteile',
            to: '#benefit',
          },
          {
            label: 'Jetzt bewerben!',
            to: '#apply',
          },
          {
            label: 'Standorte',
            to: '#',
          },
          {
            label: 'Kontakt',
            to: '#contact',
          },

        ]" variant="link"
      />

      <template #right>
        <div class="flex items-center gap-2">
          <UColorModeButton
            color="neutral"
            variant="ghost"
            square
          />
        </div>
      </template>
    </UHeader>

    <UPageHero
      id="hero"
      :title="content.hero.title"
      orientation="horizontal"
      :links="[{
        label: 'Jetzt in 60 Sekunden bewerben!',
        to: '/docs/getting-started/theme/design-system',
        color: 'primary',
        trailingIcon: 'i-lucide-arrow-right',
      }]"
      :ui="{
        description: 'mt-0',
      }"
    >
      <template #headline>
        <MDC :value="content.hero.headline" />
      </template>

      <template #description>
        <MDC :value="content.hero.description" />
      </template>

      <div class="w-140 h-84 bg-elevated border border-dashed border-default rounded-md" />
    </UPageHero>

    <UPageSection
      id="benefit"
      class="bg-elevated"
    >
      <div class="grid gap-14">
        <div class="grid grid-cols-2 gap-9">
          <div class="grid gap-6">
            <div class="flex items-start gap-2">
              <UIcon :name="content.profile.icon" class="size-8 text-primary" />
              <div>
                <h2 class="text-3xl font-bold">
                  {{ content.profile.title }}
                </h2>

                <ul class="flex gap-2 items-center">
                  <li v-for="tag in content.profile.tags" :key="tag">
                    <UBadge size="sm">
                      {{ tag }}
                    </UBadge>
                  </li>
                </ul>
              </div>
            </div>

            <MDC :value="content.profile.content" />
          </div>

          <div class="grid gap-6">
            <div class="flex items-start gap-2">
              <UIcon :name="content.tasks.icon" class="size-8 text-primary" />
              <div>
                <h2 class="text-3xl font-bold">
                  {{ content.tasks.title }}
                </h2>

                <ul class="flex gap-2 items-center">
                  <li v-for="tag in content.tasks.tags" :key="tag">
                    <UBadge size="sm">
                      {{ tag }}
                    </UBadge>
                  </li>
                </ul>
              </div>
            </div>

            <MDC :value="content.tasks.content" />
          </div>
        </div>

        <div class="p-12 bg-accented rounded-md grid grid-cols-2 gap-12">
          <div class="h-84 bg-default border border-dashed border-default rounded-md" />

          <div class="grid gap-6">
            <h2 class="text-3xl font-bold">
              {{ content.about.title }}
            </h2>

            <MDC :value="content.about.content" />

            <UButton icon="i-lucide-arrow-right" class="mt-auto w-fit">
              {{ content.about.buttonLabel }}
            </UButton>
          </div>
        </div>

        <div class="grid gap-12 place-items-center p-12 -mx-57.5">
          <h2 class="text-4xl font-semibold">
            {{ content.benefits.title }}
          </h2>

          <ul class="grid grid-cols-3 gap-6">
            <li v-for="(item, index) in content.benefits.items" :key="index">
              <div class="grid gap-4 p-6 bg-default place-items-center">
                <div class="size-37 rounded-full bg-elevated flex items-center justify-center">
                  <UIcon :name="item.icon" class="text-primary size-12" />
                </div>

                <div class="text-center">
                  <p class="text-3xl font-bold">
                    {{ item.title }}
                  </p>
                  <p class="text-muted">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      id="apply"
    >
      <div class="grid place-items-center">
        <h2 class="text-4xl font-semibold mb-12">
          {{ content.apply.title }}
        </h2>

        <div class="w-full mb-6 bg-inverted rounded-xl">
          <div class="max-w-280 mx-auto min-h-120">
            <UCarousel
              ref="carousel"
              v-slot="{ item: step }"
              :items="form.metadata.steps"
              :ui="{
                root: 'focus:outline-none',
                container: 'ms-0',
                item: 'ps-0',
              }"
              :watch-drag="false"
              @select="onSelect"
            >
              <div class="py-24 px-16 w-full text-inverted grid gap-8">
                <div class="grid gap-6">
                  <p class="text-4xl font-bold">
                    {{ step.label }}
                  </p>
                  <p v-if="step.description" class="text-lg">
                    {{ step.description }}
                  </p>
                </div>

                <UForm
                  :schema="schema"
                  :state="state"
                  @submit="onSubmit"
                >
                  <!-- Render step dynamically -->
                  <div>
                    <!-- Checkbox Group -->
                    <template v-if="step.type === 'checkbox'">
                      <UFormField :name="step.field">
                        <UCheckboxGroup
                          v-model="state[step.field]"
                          :ui="{
                            fieldset: 'grid grid-cols-3 gap-6',
                            label: 'text-inverted',
                          }"
                          :items="step.items"
                          variant="list"
                          size="xl"
                        />
                      </UFormField>
                    </template>

                    <!-- Radio Group -->
                    <template v-else-if="step.type === 'radio'">
                      <UFormField :name="step.field">
                        <URadioGroup
                          v-model="state[step.field]"
                          :ui="{
                            fieldset: 'grid grid-cols-3 gap-6',
                            label: 'text-inverted',
                          }"
                          :items="step.items"
                          variant="list"
                          size="xl"
                        />
                      </UFormField>
                    </template>

                    <!-- Single Input -->
                    <template v-else-if="step.type === 'input'">
                      <UFormField
                        :label="step.label"
                        :name="step.field"
                      >
                        <UInput
                          v-model="state[step.field]"
                          :type="step.validation.type === 'number' ? 'number' : 'text'"
                        />
                      </UFormField>
                    </template>

                    <!-- Multi Input -->
                    <template v-else-if="step.type === 'multi-input'">
                      <div class="grid gap-4">
                        <UFormField
                          v-for="field in step.fields"
                          :key="field.field"
                          :label="field.label"
                          :name="field.field"
                        >
                          <UInput
                            v-model="state[field.field]"
                            :type="field.validation.type === 'number' ? 'number' : 'text'"
                          />
                        </UFormField>
                      </div>
                    </template>

                    <!-- Navigation buttons -->
                    <div class="flex gap-4 mt-6">
                      <UButton
                        v-if="currentStep > 0"
                        type="button"
                        variant="outline"
                        @click="prevStep"
                      >
                        Zurück
                      </UButton>
                      <UButton
                        v-if="!isLastStep"
                        type="button"
                        @click="nextStep"
                      >
                        Weiter
                      </UButton>
                      <UButton
                        v-else
                        type="submit"
                      >
                        Absenden
                      </UButton>
                    </div>
                  </div>
                </UForm>
              </div>
            </UCarousel>
          </div>
        </div>

        <div class="flex gap-3">
          <button
            v-for="(_, index) in form.stepSchemas"
            :key="index"
            class="size-3 rounded-full transition-colors"
            :class="currentStep === index ? 'bg-inverted' : 'bg-accented'"
            @click="goToStep(index)"
          />
        </div>
      </div>
    </UPageSection>

    <UPageCTA
      id="contact"
      :title="content.contact.title"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex lg:flex-row lg:gap-24',
      }"
      reverse
      :links="[
        {
          label: content.contact.buttonLabel,
          color: 'primary',
          trailingIcon: 'i-lucide-send-horizontal',
        },
      ]"
    >
      <template #description>
        <MDC :value="content.contact.description" />
      </template>

      <div class="size-60 bg-elevated rounded-full border border-dashed border-muted shrink-0" />
    </UPageCTA>

    <div class="bg-inverted h-60 flex flex-col justify-end">
      <UFooter>
        <template #left>
          <MDC :value="content.footer.left" />
        </template>

        <UNavigationMenu
          :items="[
            { label: 'Impressum' },
            { label: 'Datenschutz' },
            { label: 'Kontakt' },
          ]"
          variant="link"
          :ui="{ link: 'text-inverted hover:text-muted' }"
        />

        <template #right>
          <UButton
            icon="i-simple-icons-facebook"
            color="neutral"
            variant="link"
            class="text-inverted"
          />
          <UButton
            icon="i-simple-icons-instagram"
            color="neutral"
            variant="link"
            class="text-inverted"
          />
          <UButton
            icon="i-simple-icons-linkedin"
            color="neutral"
            variant="link"
            class="text-inverted"
          />
        </template>
      </UFooter>
    </div>
  </div>
</template>

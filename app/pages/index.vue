<script setup lang="ts">
const { data: content } = await useAsyncData(() => queryCollection('content').path('/').first())

const formRef = useTemplateRef('formRef')

const {
  schema,
  form,
  state,
  submit,
} = useApplyForm(
  {
    steps: content.value?.apply.steps || [],
  },
)
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
        <UBadge color="neutral" size="lg">
          {{ content.hero.headline }}
        </UBadge>
      </template>

      <template #description>
        <ul class="flex gap-2 mt-4">
          <li
            v-for="(tag, i) in content.hero.tags"
            :key="tag"
          >
            <UBadge
              :color="i < 2 ? 'neutral' : 'primary'"
              size="sm"
            >
              {{ tag }}
            </UBadge>
          </li>
        </ul>

        <MDC :value="content.hero.description" />
      </template>

      <div class="w-140 h-84 bg-elevated border border-dashed border-default rounded-xl" />
    </UPageHero>

    <UPageSection
      id="benefit"
      class="bg-elevated"
      :ui="{ container: 'py-12!' }"
    >
      <div class="grid gap-14">
        <div class="grid grid-cols-2 gap-9">
          <div>
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

          <div>
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

        <div class="p-12 bg-accented rounded-xl grid grid-cols-2 gap-12">
          <div class="h-84 bg-default border border-dashed border-default rounded-xl" />

          <div class="flex flex-col">
            <h2 class="text-3xl font-bold">
              {{ content.about.title }}
            </h2>

            <MDC :value="content.about.content" />

            <UButton trailing-icon="i-lucide-arrow-right" class="mt-auto w-fit">
              {{ content.about.buttonLabel }}
            </UButton>
          </div>
        </div>

        <div class="grid gap-12 place-items-center p-12 -mx-57.5">
          <h2 class="text-4xl font-semibold">
            {{ content.benefits.title }}
          </h2>

          <ul class="grid grid-cols-3 gap-6">
            <li
              v-for="(item, index) in content.benefits.items"
              :key="index"
            >
              <div class="grid gap-4 p-6 bg-default place-items-center border border-default rounded-xl">
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
      :ui="{ container: 'py-12!' }"
    >
      <div class="grid place-items-center">
        <h2 class="text-4xl font-semibold mb-12">
          {{ content.apply.title }}
        </h2>

        <div class="relative w-full mb-6 bg-inverted max-w-269 rounded-xl">
          <UCarousel
            v-slot="{ item: step, index }"
            :items="form.metadata?.steps ?? []"
            :ui="{
              root: 'focus:outline-none',
              container: 'ms-0',
              item: 'ps-0',
            }"
            :watch-drag="false"
            dots
            arrows
            :prev="{ variant: 'solid', color: 'primary' }"
            :next="{ variant: 'solid', color: 'primary' }"
          >
            <div class="py-24 px-16 min-h-120 text-inverted grid gap-8">
              <div class="grid gap-6">
                <p class="text-4xl font-bold">
                  {{ step.title }}
                </p>
                <p v-if="step.description" class="text-lg">
                  {{ step.description }}
                </p>
              </div>

              <UForm
                ref="formRef"
                :schema="schema"
                :state="state"
                class="flex flex-col"
                @submit="submit"
              >
                <!-- Render step dynamically -->
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
                      variant="card"
                      size="xl"
                    />
                  </UFormField>
                </template>

                <!-- Single Input -->
                <template v-else-if="step.type === 'input'">
                  <div class="grid grid-cols-2">
                    <UFormField
                      :label="step.title"
                      :name="step.field"
                    >
                      <UInput
                        v-model="state[step.field]"
                        :type="step.validation.type === 'number' ? 'number' : 'text'"
                        class="w-full"
                        size="xl"
                      />
                    </UFormField>
                  </div>
                </template>

                <!-- Multi Input -->
                <template v-else-if="step.type === 'multi-input'">
                  <div class="grid grid-cols-2 gap-y-4 gap-x-12">
                    <UFormField
                      v-for="field in step.fields"
                      :key="field.field"
                      :label="field.label"
                      :name="field.field"
                    >
                      <UInput
                        v-model="state[field.field]"
                        :type="field.validation.type === 'number' ? 'number' : 'text'"
                        class="w-full"
                        size="xl"
                      />
                    </UFormField>
                  </div>
                </template>

                <UButton
                  v-if="index === form.metadata.steps.length - 1"
                  type="submit"
                  icon="i-lucide-send"
                  class="mt-auto w-fit ml-auto mb-0"
                  size="lg"
                >
                  Absenden
                </UButton>
              </UForm>
            </div>
          </UCarousel>
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

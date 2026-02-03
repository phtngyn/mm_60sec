<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
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

])
</script>

<template>
  <div class="min-h-screen">
    <UHeader :ui="{ container: 'px-28 sm:px-28 lg:px-28 max-w-480' }">
      <template #left>
        <div class="flex items-center gap-3">
          <div class="w-46.5 h-8.5">
            <img src="/images/mm_logo.svg" alt="multa-medio logo">
          </div>
        </div>
      </template>

      <UNavigationMenu :items="items" variant="link" />

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
      title="Mobile Developer"
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
        <UBadge color="neutral">
          m/w/d
        </UBadge>
      </template>

      <template #description>
        <ul class="flex gap-2 items-center mt-3">
          <li>
            <UBadge color="neutral" size="sm">
              Fulda
            </UBadge>
          </li>
          <li>
            <UBadge color="neutral" size="sm">
              1. Februar 2026
            </UBadge>
          </li>
          <li>
            <UBadge size="sm">
              Flutter
            </UBadge>
          </li>
          <li>
            <UBadge size="sm">
              iOS
            </UBadge>
          </li>
          <li>
            <UBadge size="sm">
              Typescript
            </UBadge>
          </li>
        </ul>

        <p class="mt-6">
          A comprehensive, Nuxt-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
        </p>
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
              <UIcon name="i-lucide-wrench" class="size-8 text-primary" />
              <div>
                <h2 class="text-3xl font-bold">
                  Dein Profil
                </h2>

                <ul class="flex gap-2 items-center">
                  <li>
                    <UBadge size="sm">
                      Flutter
                    </UBadge>
                  </li>
                  <li>
                    <UBadge size="sm">
                      iOS
                    </UBadge>
                  </li>
                  <li>
                    <UBadge size="sm">
                      Typescript
                    </UBadge>
                  </li>
                </ul>
              </div>
            </div>

            <ul class="ml-4 list-disc list-outside *:text-muted *:text-lg">
              <li>
                We've built a strong, lasting partnership
              </li>
              <li>
                Their trust is our driving force
              </li>
              <li>
                Propelling us towards shared success
              </li>
              <li>
                A comprehensive, Nuxt-integrated UI library
              </li>
              <li>
                Providing a rich set of fully-styled, accessible
              </li>
              <li>
                Highly customizable components for building modern web applications
              </li>
            </ul>
          </div>

          <div class="grid gap-6">
            <div class="flex items-start gap-2">
              <UIcon name="i-lucide-layout-list" class="size-8 text-primary" />
              <div>
                <h2 class="text-3xl font-bold">
                  Deine Aufgaben
                </h2>

                <ul class="flex gap-2 items-center">
                  <li>
                    <UBadge size="sm">
                      Flutter
                    </UBadge>
                  </li>
                  <li>
                    <UBadge size="sm">
                      iOS
                    </UBadge>
                  </li>
                  <li>
                    <UBadge size="sm">
                      Typescript
                    </UBadge>
                  </li>
                </ul>
              </div>
            </div>

            <ul class="ml-4 list-disc list-outside *:text-muted *:text-lg">
              <li>
                We've built a strong, lasting partnership
              </li>
              <li>
                Their trust is our driving force
              </li>
              <li>
                Propelling us towards shared success
              </li>
              <li>
                A comprehensive, Nuxt-integrated UI library
              </li>
              <li>
                Providing a rich set of fully-styled, accessible
              </li>
              <li>
                Highly customizable components for building modern web applications
              </li>
            </ul>
          </div>
        </div>

        <div class="p-12 bg-accented rounded-md grid grid-cols-2 gap-12">
          <div class="h-84 bg-default border border-dashed border-default rounded-md" />

          <div class="grid gap-6">
            <h2 class="text-3xl font-bold">
              Über uns
            </h2>

            <div class="grid gap-4 text-lg">
              <p>A comprehensive, Nuxt-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.</p>

              <p>A comprehensive, Nuxt-integrated UI library providing a rich set of fully-styled, accessible</p>
            </div>

            <UButton icon="i-lucide-arrow-right" class="mt-auto w-fit">
              Mehr erfahren
            </UButton>
          </div>
        </div>

        <div class="grid gap-12 place-items-center p-12 -mx-57.5">
          <h2 class="text-4xl font-semibold">
            Deine Vorteile bei MULTA MEDIO
          </h2>

          <ul class="grid grid-cols-3 gap-6">
            <li v-for="i in 6" :key="i">
              <div class="grid gap-4 p-6 bg-default place-items-center">
                <div class="size-37 rounded-full bg-elevated flex items-center justify-center">
                  <UIcon name="i-lucide-rocket" class="text-primary size-12" />
                </div>

                <div class="text-center">
                  <p class="text-3xl font-bold">
                    Title
                  </p>
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
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
          Jetzt in 60 Sekunden bewerben!
        </h2>

        <div class="flex items-center gap-4 mb-6">
          <UButton icon="i-lucide-arrow-left" class=" rounded-full" size="md" />
          <div class="bg-inverted py-24 px-16 w-full rounded-xl text-inverted grid gap-8">
            <div class="grid gap-6">
              <p class="text-4xl font-bold">
                Worauf legst du bei Deinem Arbeitgeber am meisten Wert?
              </p>
              <p class="text-lg">
                Mehrfachauswahl möglich
              </p>
            </div>

            <UCheckboxGroup
              :ui="{
                fieldset: 'grid grid-cols-3 gap-6',
                label: 'text-inverted',
              }"
              :items="[
                'Weiterbildung',
                'Homeoffice',
                'Angemessenes Gehalt',
                'Gute Ausstattung',
                'Interessante Aufgaben',
                'Viele Benefits',
                'Flexible Arbeitszeiten',
                'Sonstiges',
              ]"
              variant="list"
              size="xl"
            />
          </div>
          <UButton icon="i-lucide-arrow-right" class=" rounded-full" size="md" />
        </div>

        <div class="flex gap-3">
          <button class="size-3 rounded-full bg-inverted" />
          <button class="size-3 rounded-full bg-accented" />
          <button class="size-3 rounded-full bg-accented" />
          <button class="size-3 rounded-full bg-accented" />
          <button class="size-3 rounded-full bg-accented" />
        </div>
      </div>
    </UPageSection>

    <UPageCTA
      id="contact"
      title="Kontaktiere uns!"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex lg:flex-row lg:gap-24',
      }"
      reverse
      :links="[
        {
          label: 'Per E-Mail bewerben',
          color: 'primary',
          trailingIcon: 'i-lucide-send-horizontal',
        },
      ]"
    >
      <template #description>
        <p class="mb-6">
          A comprehensive, Nuxt-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
        </p>
        <p class="text-xl font-medium">
          MULTA MEDIO Informationssysteme AG
        </p>
        <p>Wiesenmühlenstraße 1 • 36037 Fulda</p>
      </template>

      <div class="size-60 bg-elevated rounded-full border border-dashed border-muted shrink-0" />
    </UPageCTA>

    <div class="bg-inverted h-60 flex flex-col justify-end">
      <UFooter>
        <template #left>
          <p class="text-muted text-sm">
            Copyright © {{ new Date().getFullYear() }} MULTA MEGIO
          </p>
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

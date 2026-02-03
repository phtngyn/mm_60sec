<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Mobile Developer',
    badge: 'm/w/d',
    to: '#',
    active: true,
  },
  {
    label: 'Deine Vorteile',
    to: '#benefit',
  },
  {
    label: 'Jetzt bewerben!',
    to: '#',
  },
  {
    label: 'Standorte',
    to: '#',
  },
  {
    label: 'Kontakt',
    to: '#',
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

    <UPageSection class="bg-elevated">
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

        <div class="grid gap-12 place-items-center p-12 -mx-40">
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

    <UPageSection>
      <div class="grid gap-12 place-items-center">
        <h2 class="text-4xl font-semibold">
          Jetzt in 60 Sekunden bewerben!
        </h2>

        <div class="relative bg-inverted py-24 px-16 w-full rounded-xl text-inverted">
          <div>
            Something
          </div>

          <UButton icon="i-lucide-arrow-left" class="absolute top-1/2 -translate-x-1/2 -left-8 rounded-full" />
          <UButton icon="i-lucide-arrow-right" class="absolute top-1/2 -translate-x-1/2 -right-16 rounded-full" />
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
  </div>
</template>

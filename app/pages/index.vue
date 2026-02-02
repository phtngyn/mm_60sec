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

    <!-- <UPageSection id="hero" class="py-20 lg:py-32">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="flex items-center gap-2">
              <h1 class="text-5xl lg:text-6xl font-bold">
                Mobile Developer
              </h1>
              <UBadge color="primary" variant="subtle" size="lg">
                neu
              </UBadge>
            </div>

            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tech in techStack"
                :key="tech"
                color="neutral"
                variant="subtle"
                size="md"
              >
                {{ tech }}
              </UBadge>
            </div>

            <p class="text-lg text-gray-600 dark:text-gray-400">
              Werde Teil unseres innovativen Teams und entwickle mit uns die mobilen Anwendungen von morgen.
              Bei MULTA MEDIO arbeitest du an spannenden Projekten mit modernsten Technologien.
            </p>

            <UButton
              size="xl"
              icon="i-lucide-arrow-right"
              trailing
              @click="scrollToSection('apply')"
            >
              Jetzt bewerben
            </UButton>
          </div>

          <div class="flex justify-center">
            <div class="w-full max-w-140 h-84.5 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-500">
              Hero Illustration (560x338)
            </div>
          </div>
        </div>
      </UContainer>
    </UPageSection>

    <UPageSection id="about" class="py-20 bg-gray-50 dark:bg-gray-900/50">
      <UContainer>
        <div class="space-y-12">
          <div class="grid md:grid-cols-2 gap-6">
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <UIcon name="i-lucide-wrench" class="w-6 h-6 text-primary" />
                  <h3 class="text-xl font-semibold">
                    Dein Profil
                  </h3>
                </div>
              </template>

              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Abgeschlossenes Studium der Informatik oder vergleichbare Qualifikation</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Fundierte Erfahrung in der mobilen Entwicklung mit React Native</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Sehr gute Kenntnisse in TypeScript und modernen JavaScript-Frameworks</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Erfahrung mit Git, CI/CD und agilen Entwicklungsmethoden</span>
                </li>
              </ul>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <UIcon name="i-lucide-layout-list" class="w-6 h-6 text-primary" />
                  <h3 class="text-xl font-semibold">
                    Deine Aufgaben
                  </h3>
                </div>
              </template>

              <ul class="space-y-3">
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Entwicklung und Wartung moderner mobiler Anwendungen für iOS und Android</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Code Reviews und technische Beratung im Entwicklungsteam</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Integration von REST-APIs und Third-Party-Services</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Testing, Debugging und Performance-Optimierung der Anwendungen</span>
                </li>
              </ul>
            </UCard>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="w-full h-84.5 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-500">
              About Illustration (498x338)
            </div>

            <div class="space-y-6">
              <h2 class="text-3xl lg:text-4xl font-bold">
                Über uns
              </h2>
              <div class="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  MULTA MEDIO Informationssysteme AG ist seit über 30 Jahren ein führender Anbieter
                  innovativer IT-Lösungen. Als etabliertes Unternehmen mit Hauptsitz in Fulda
                  entwickeln wir maßgeschneiderte Software-Lösungen für renommierte Kunden aus
                  verschiedenen Branchen.
                </p>
                <p>
                  Unser Erfolg basiert auf der Expertise unserer Mitarbeiter und der kontinuierlichen
                  Weiterentwicklung modernster Technologien. Werde Teil unseres Teams und gestalte
                  mit uns die digitale Zukunft.
                </p>
              </div>
              <UButton
                size="lg"
                variant="outline"
                @click="scrollToSection('contact')"
              >
                Mehr erfahren
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </UPageSection>

    <UPageSection id="benefits" class="py-20">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">
            Deine Vorteile bei MULTA MEDIO
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Entdecke, was uns als Arbeitgeber auszeichnet
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard
            v-for="benefit in benefits"
            :key="benefit.title"
          >
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <UIcon :name="benefit.icon" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold">
                {{ benefit.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                {{ benefit.description }}
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </UPageSection>

    <UPageSection id="apply" class="py-20 bg-gray-50 dark:bg-gray-900/50">
      <UContainer>
        <div class="max-w-5xl mx-auto space-y-8">
          <div class="text-center">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4">
              Jetzt in 60 Sekunden bewerben!
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400">
              Wähle aus, was auf dich zutrifft
            </p>
          </div>

          <UCard>
            <div class="space-y-8">
              <div class="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-800">
                <div class="flex gap-2">
                  <div
                    v-for="i in 3"
                    :key="i"
                    class="w-2 h-2 rounded-full"
                    :class="carouselIndex === i - 1 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'"
                  />
                </div>

                <div class="flex gap-2">
                  <UButton
                    icon="i-lucide-chevron-left"
                    color="neutral"
                    variant="outline"
                    :disabled="carouselIndex === 0"
                    @click="carouselIndex = Math.max(0, carouselIndex - 1)"
                  />
                  <UButton
                    icon="i-lucide-chevron-right"
                    color="neutral"
                    variant="outline"
                    trailing
                    :disabled="carouselIndex === 2"
                    @click="carouselIndex = Math.min(2, carouselIndex + 1)"
                  />
                </div>
              </div>

              <div class="text-center pt-4">
                <UButton
                  size="xl"
                  icon="i-lucide-send"
                  trailing
                  @click="scrollToSection('contact')"
                >
                  Bewerbung abschließen
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </UPageSection>

    <UPageSection id="locations" class="py-20">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold">
            Unsere Standorte
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <UTabs
            v-model="activeTab"
            :items="locations.map((loc, idx) => ({ label: loc.name, value: idx }))"
          >
            <template #default="{ item }">
              <UCard class="mt-6">
                <div class="grid lg:grid-cols-2 gap-8">
                  <div class="space-y-6">
                    <div>
                      <h3 class="text-xl font-semibold mb-2">
                        {{ locations[item.value]?.name }}
                      </h3>
                      <p class="text-gray-600 dark:text-gray-400">
                        {{ locations[item.value]?.address }}
                      </p>
                    </div>

                    <UButton
                      icon="i-lucide-map-pin"
                      variant="outline"
                      trailing
                    >
                      Route planen
                    </UButton>
                  </div>

                  <div>
                    <div class="w-full h-75 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-500">
                      Map Image (522x413)
                    </div>
                  </div>
                </div>
              </UCard>
            </template>
          </UTabs>
        </div>
      </UContainer>
    </UPageSection>

    <UPageSection id="testimonials" class="py-20 bg-gray-50 dark:bg-gray-900/50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold">
            Das sagen unsere Mitarbeiter
          </h2>
        </div>

        <div class="relative">
          <UScrollArea orientation="horizontal" class="w-full">
            <div class="flex gap-6 pb-4">
              <UCard
                v-for="testimonial in testimonials"
                :key="testimonial.name"
                class="shrink-0 w-70"
              >
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <UAvatar
                      :alt="testimonial.name"
                      size="md"
                    />
                    <div>
                      <div class="font-semibold">
                        {{ testimonial.name }}
                      </div>
                      <div class="text-sm text-gray-600 dark:text-gray-400">
                        {{ testimonial.role }}
                      </div>
                    </div>
                  </div>
                  <p class="text-lg font-medium">
                    {{ testimonial.message }}
                  </p>
                </div>
              </UCard>
            </div>
          </UScrollArea>
        </div>
      </UContainer>
    </UPageSection>

    <UPageSection id="contact" class="py-20">
      <UContainer>
        <div class="max-w-5xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h2 class="text-3xl lg:text-4xl font-bold">
                Kontaktiere uns!
              </h2>

              <div class="space-y-4">
                <div>
                  <h3 class="font-semibold text-lg mb-2">
                    MULTA MEDIO Informationssysteme AG
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Wiesenmühlenstraße 1 • 36037 Fulda
                  </p>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <UIcon name="i-lucide-phone" class="w-5 h-5" />
                    <span>+49 661 9392-0</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <UIcon name="i-lucide-mail" class="w-5 h-5" />
                    <span>karriere@multa-medio.de</span>
                  </div>
                </div>
              </div>

              <UButton
                size="xl"
                icon="i-lucide-send"
                trailing
              >
                Nachricht senden
              </UButton>
            </div>

            <div class="flex justify-center">
              <div class="w-60 h-60 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-500">
                Contact Illustration (240x240)
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </UPageSection> -->

    <!-- <UFooter>
      <template #top>
        <UContainer>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            <div class="col-span-2 md:col-span-1">
              <div class="w-46.5 h-8.5 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-xs mb-4">
                Logo (186x34)
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Innovative IT-Lösungen seit über 30 Jahren
              </p>
            </div>

            <div>
              <h3 class="font-semibold mb-4">
                Unternehmen
              </h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <ULink class="text-gray-600 dark:text-gray-400 hover:text-primary">
                    Über uns
                  </ULink>
                </li>
                <li>
                  <ULink class="text-gray-600 dark:text-gray-400 hover:text-primary">
                    Karriere
                  </ULink>
                </li>
                <li>
                  <ULink class="text-gray-600 dark:text-gray-400 hover:text-primary">
                    Standorte
                  </ULink>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-semibold mb-4">
                Rechtliches
              </h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <ULink class="text-gray-600 dark:text-gray-400 hover:text-primary">
                    Impressum
                  </ULink>
                </li>
                <li>
                  <ULink class="text-gray-600 dark:text-gray-400 hover:text-primary">
                    Datenschutz
                  </ULink>
                </li>
                <li>
                  <ULink class="text-gray-600 dark:text-gray-400 hover:text-primary">
                    AGB
                  </ULink>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-semibold mb-4">
                Social Media
              </h3>
              <div class="flex gap-2">
                <UButton
                  icon="i-lucide-linkedin"
                  color="neutral"
                  variant="ghost"
                  square
                />
                <UButton
                  icon="i-lucide-twitter"
                  color="neutral"
                  variant="ghost"
                  square
                />
                <UButton
                  icon="i-lucide-github"
                  color="neutral"
                  variant="ghost"
                  square
                />
              </div>
            </div>
          </div>
        </UContainer>
      </template>

      <template #bottom>
        <UContainer>
          <div class="py-6 border-t border-gray-200 dark:border-gray-800">
            <p class="text-sm text-center text-gray-600 dark:text-gray-400">
              © {{ new Date().getFullYear() }} MULTA MEDIO Informationssysteme AG. Alle Rechte vorbehalten.
            </p>
          </div>
        </UContainer>
      </template>
    </UFooter> -->
  </div>
</template>

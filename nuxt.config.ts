export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/content',
  ],

  devtools: {
    enabled: false,
  },

  css: ['~/assets/css/main.css'],

  experimental: {
    viteEnvironmentApi: true,
    typescriptPlugin: true,
  },

  compatibilityDate: '2026-02-02',

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

})

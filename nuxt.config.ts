export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/content',
    'nuxt-studio',
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

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',

    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'your-username', // your GitHub/GitLab username or organization
      repo: 'your-repo', // your repository name
      branch: 'main', // the branch to commit to (default: main)
    },
  },

})

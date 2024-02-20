export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  runtimeConfig: {
    public: {
      apiOpenWeather: '/api'
    }
  },

  app: {
    head: {
      title: 'Nuxt Sono Weather Widget',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})

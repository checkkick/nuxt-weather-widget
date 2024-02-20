export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  runtimeConfig: {
    public: {
      apiWeather: 'http://api.weatherapi.com/v1',
      apiSecret: '46f4201fbffb4382b44104853242002'
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

  modules: [
    '@pinia/nuxt',
  ],
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    'nuxt-particles',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
  ],
  googleFonts: {
    families: {
      Montserrat: '200..900',
      download: true,
      inject: true
    }
  }
})

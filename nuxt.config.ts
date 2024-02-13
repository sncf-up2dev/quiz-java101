// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  app: {
    baseURL: process.env.BASE_URL,
    head: {
      title: process.env.TITLE || "Quiz Java",
      link: [{
        rel: 'stylesheet',
        href: 'https://cdn.simplecss.org/simple.min.css'
      }]
    }
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '../docs')
    }
  },
})

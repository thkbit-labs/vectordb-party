// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  css: ["~/assets/css/main.css"],

  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  htmlValidator: {
    failOnError: true,
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "nuxt-security",
    "@nuxtjs/html-validator",
  ],

  typescript: {
    typeCheck: true,
  },
});

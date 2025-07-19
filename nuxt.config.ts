// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  css: ["~/assets/css/main.css"],

  devtools: { enabled: true },

  future: {},

  htmlValidator: {
    failOnError: true,
    options: {
      extends: [
        "html-validate:document",
        "html-validate:recommended",
        "html-validate:standard",
        "html-validate:a11y",
      ],
    },
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

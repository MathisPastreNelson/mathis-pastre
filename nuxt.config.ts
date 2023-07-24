export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ["~/assets/scss/index.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@jpcreativemedia/nuxt-animate.css",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});

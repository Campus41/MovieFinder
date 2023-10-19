// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-swiper', '@nuxtjs/tailwindcss'],
  postcss: {
    // Add your PostCSS plugins and options here
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {
        stage: 1,
      },
    },
  },
  swiper: {
    modules: ['navigation', 'pagination', 'autoplay', 'effect-creative'], // all modules are imported by default
  },
  css: [
    '@/styles/element-plus.css',
  ],
})

import { defineNuxtConfig } from 'nuxt';
const deploymentEnv = process.env.NUXT_ENV_DEPLOYMENT || 'development'
const environment = require( `./.env.${ deploymentEnv }.js` )

// https://v3.nuxtjs.org/api/configuration/nuxt.config
const nuxtConfig = defineNuxtConfig({
  // 環境に応じて変更する
  env: environment,
  axios: { proxy: true },
  proxy: {
    '/api': `${environment.API_URL}`,
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // headの設定
  // vue2ではmeta→head
  meta: {
    title: 'myapp_nuxt3',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: ['@nuxtjs/style-resources'],
  css: [
    '@/assets/scss/style.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/fundation/_variable.scss";',
        },
      },
    },
  },
})


export default nuxtConfig;
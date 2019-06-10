const pkg = require('./package');
import axios from 'axios';

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-us'
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'google-site-verification', content: 'yZMxIk05fuKwHqiDnxnFKGH5TpUVkoaRa79RGYfYGSU' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700,800' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    "~/assets/main.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-carousel', ssr: false}
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
      '@nuxtjs/axios',
      '@nuxtjs/sitemap'
  ],
  axios: {
    // proxyHeaders: false
  },
  router: {
      base: '/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extractCSS: true,
    extend(config, ctx) {

    }
  }
}
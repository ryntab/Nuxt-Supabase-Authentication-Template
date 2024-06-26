// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/icon',
    '@nuxt/ui'
  ],
  runtimeConfig: {
    public: {
      middlewareOptions: {
        loginRoute: '/auth/login',
        registerRoute: '/auth/register',
        authenticatedBasePath: '/user/dashboard',
      }
    }
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true
      },
    },
    redirect: false,
  },
  router: {
    linkExactActiveClass: ''
  },
  css: [
    '~/assets/css/fontface.css'
  ],
})

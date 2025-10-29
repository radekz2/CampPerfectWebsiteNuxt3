// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Enable SSG (Static Site Generation)
  ssr: true,
  
  app: {
    head: {
      title: 'Camp Perfect Checklist - Your Ultimate Camping Companion',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Privacy-first camping checklist app. Track your gear, plan meals, manage packing lists, and never forget essential camping items again.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})

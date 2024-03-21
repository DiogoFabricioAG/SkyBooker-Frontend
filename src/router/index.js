import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('../views/StartPage.vue')
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: () => import('../views/HotelsPage.vue')
    },
    {
      path: '/companies',
      name: 'companies',
      component: () => import('../views/CompaniesPage.vue')
    }
  ]
})

export default router

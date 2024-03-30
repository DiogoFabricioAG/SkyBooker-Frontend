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
    },
    {
      path: '/flights',
      name: 'flights',
      component: () => import('../views/FlightsPage.vue')
    },
    {
      path: '/seats/:id',
      name: 'seats',
      component: () => import('../views/SeatsPage.vue')
    },
    {
      path: '/flight/:id',
      name: 'flight',
      component: () => import('../views/FlightDetail.vue')
    },
    {
      path: '/company/:id',
      name: 'company',
      component: () => import('../views/CompanyDetail.vue')
    },
    {
      path: '/hotel/:id',
      name: 'hotel',
      component: () => import('../views/HotelDetail.vue')
    },
    {
      path: '/hotel/:id/room',
      name: 'room',
      component: () => import('../views/RoomPage.vue')
    }
  ]
})

export default router

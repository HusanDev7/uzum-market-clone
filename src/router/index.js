import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    
    {
      path: '/basket/',
      name: 'basket',
      component: () => import('@/pages/BasketPage.vue')
    },
    
    {
      path: '/entrance/',
      name: 'entrance',
      component: () => import('@/pages/EnterPage.vue')
    },

    {
      path: '/favorite/',
      name: 'favorite',
      component: () => import('@/pages/FavoritePage.vue')
    },

    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/pages/ProductAboutPage.vue')
    }
  ]
})

export default router
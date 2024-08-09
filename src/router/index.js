import { createRouter, createWebHistory } from 'vue-router'
import FlexboxExample from '../views/FlexboxExample.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FlexboxExample
    },
    {
      path: '/flexbox',
      name: 'flexbox',
      component: FlexboxExample
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('../views/GridExample.vue')
    }
  ]
})

export default router

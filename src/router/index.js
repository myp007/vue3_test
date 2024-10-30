/*
 * @Author: myp
 * @Date: 2024-10-28 14:05:28
 * @LastEditTime: 2024-10-30 11:47:38
 * @Description: 
 * @FilePath: \vue3_h5\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/search.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/user.vue')
    },
    
  ]
})

export default router

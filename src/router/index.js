/*
 * @Author: myp
 * @Date: 2024-10-28 14:05:28
 * @LastEditTime: 2024-10-31 10:55:18
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
      component: index,
      children:[
        {
          path: '',
          redirect:'/home',
          meta:{
            keepAlive: true
          }
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/home.vue'),
          meta:{
            keepAlive: true
          }
        },
  
        // {
        //   path: '/search',
        //   name: 'search',
        //   component: () => import('@/views/search/search.vue')
        // },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/user/user.vue'),
          meta:{
            keepAlive: true
          }
        },
      ]

    },
    
  ]
})

export default router

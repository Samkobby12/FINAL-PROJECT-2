import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
       path: '/',
       name: 'home',
       component: HomeView
     },
     {
       path: '/about',
       name: 'about',
       component: () => import('../views/AboutView.vue')
     },
     {
       path: '/logIn',
       name: 'log In',
       component: () => import('../views/logInView.vue')
     },
     {
       path: '/contact',
       name: 'contact',
       component: () => import('../views/contactsView.vue') 
     },
     {
       path: '/addNew',
       name: 'addNew',
       component: () => import('../views/addLocationView.vue')
     },
     {
       path: '/details/:id',
       name: 'details',
       component: () => import('../views/detailsView.vue')
     }
  ]
})

export default router

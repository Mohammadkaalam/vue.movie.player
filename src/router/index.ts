import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieSection from '@/components/MovieSection.vue'
import Loginform from '@/components/LoginForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Loginform,
  },
  {
    path: '/movie',
    component: MovieSection,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken')
      if (!token) {
        next('/login')
      } else {
        next()
      }
    },
  },

    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    
  ],    
})

export default router

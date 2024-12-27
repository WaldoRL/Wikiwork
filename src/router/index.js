import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import QAIntroduction from '../views/QAView.vue'
import Msoftware from '../views/MsoftwareView.vue'
import POOView from '../views/POOView.vue'
import PFun from '@/views/PF.vue'
import PD from  '@/views/PD.vue'
import SOLID from  '@/views/PS.vue'
import TECH from  '@/views/tech.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/list',
      name: 'list',
    component: ListView,
  },
    {
      path: '/QA Introduction',
      name: 'QA Introduction',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: QAIntroduction,
    },
    {
      path: '/Msoftware',
      name: 'Msoftware',
      component: Msoftware,
    },
    {
      path: '/POO',
      name: 'POO',
      component: POOView,
    },
    {
      path: '/Progra Funcional',
      name: 'Progra Funcional',
      component: PFun,
    },
    {
      path: '/Patrones de Diseño',
      name: 'Patrones de Diseño',
      component: PD,
    },
    {
      path: '/SOLID',
      name: 'SOLID',
      component: SOLID,
    },
    {
      path: '/git',
      name: 'git',
      component: () => import('../views/GIT.vue')
    },
    {
      path: '/tech',
      name: 'tech',
      component: TECH
    }
  ],
})

export default router

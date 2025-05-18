import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: '/welcome',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/ai',
    alias: '/mushovir',
    name: 'ChatBot',
    component: () => import(/* webpackChunkName: "about" */ '../views/ConsultingView.vue')
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import(/* webpackChunkName: "about" */ '../views/DocsView.vue')
  },
  {
    path: '/health',
    name: 'Health',
    component: () => import(/* webpackChunkName: "about" */ '../views/HealthView.vue')
  },
  {
    path: '/navigate',
    name: 'Navigate',
    component: () => import(/* webpackChunkName: "about" */ '../views/NavigateView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router

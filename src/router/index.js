import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/archive',
      name: 'Archive',
      component: () => import('../views/archive.vue')
    },
    {
      path: '/',
      redirect: '/home'
    }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

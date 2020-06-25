import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决跳转到同一路径的报错问题
const routerPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
  }

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
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
      path: '/article',
      name: 'Article',
      component: () => import('../views/article.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/about.vue')
    },
    {
      path: '/apply',
      name: 'Apply',
      component: () => import('../views/apply.vue')
    },
    {
      path: '/tag/:name',
      name: 'Tag',
      component: () => import('../views/archive.vue')
    }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

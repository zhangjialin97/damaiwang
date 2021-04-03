import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/manage.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/Home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/2',
        name: '2',
        component: () => import('../components/2.vue'),
      },
      {
        path: '/3',
        name: '3',
        component: () => import('../components/3.vue'),
      },
      {
        path: '/baby',
        name: 'baby',
        component: () => import('../views/baby.vue'),
      },
      // {
      //   path: '/setInfo2',
      //   name: 'setInfo2',
      //   component: () => import('../components/setInfo2.vue'),
      // },
      // {
      //   path: '/iconTable',
      //   name: 'iconTable',
      //   component: () => import('../components/iconTable.vue'),
      // }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

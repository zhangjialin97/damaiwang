import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () =>
      import('../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () =>
      import('../views/Register.vue')
  },
  {
    path: '/check',
    name: 'check',
    component: () =>
      import('../views/check.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () =>
      import('../views/order.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () =>
      import('../views/pay.vue')
  },
  {
    path: '/payma',
    name: 'payma',
    component: () =>
      import('../views/payma.vue')
  },
  {
    path: '/Login',
    name: 'login',
    component: () =>
      import('../views/Login.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: () =>
      import('../views/manage.vue'),
    children: [{
      path: '/',
      name: 'Home',
      component: () =>
        import('../views/Home.vue'),
    },
    {
      path: '/Home',
      name: 'Home',
      component: () =>
        import('../views/Home.vue'),
    },
    {
      path: '/baby',
      name: 'baby',
      component: () =>
        import('../views/baby.vue'),
    },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
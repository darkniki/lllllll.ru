import Vue from 'vue'
import VueRouter from 'vue-router'
import CountDown from '@/components/countDown/CountDown';

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang(en|ru)?',
    component: {
      render(createElement) { return createElement('router-view') }
    },
    children: [
      {
        path     : '/',
        name     : 'CountDown',
        component: CountDown,
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

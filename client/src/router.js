import Vue from 'vue'
import Router from 'vue-router'
import AppStart from './views/AppStart.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import MainHome from './views/MainHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'appStart',
      component: AppStart
    },
    {
      path: '/SignIn',
      name: 'signIn',
      component: SignIn

    },
    {
      path: '/SignUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/MainHome',
      name: 'mainHome',
      component: MainHome
    }
  ]
})

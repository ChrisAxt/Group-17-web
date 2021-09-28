import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/SignIn.vue'
// import SignUp from './views/SignUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/SignIn',
      name: 'signIn',
      component: SignIn

    }/* ,
    {
      path: '/SignUp',
      name: 'signUp',
      component: SignUp
    } */
  ]
})

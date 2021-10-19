import Vue from 'vue'
import Router from 'vue-router'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import Home from './views/Home.vue'
import Clubs from './views/Clubs.vue'
import Events from './views/Events.vue'
import Profile from './views/Profile.vue'
import CreateClub from './views/CreateClub.vue'
import Announcements from './views/Announcements.vue'
import CreateEvent from './views/CreateEvent.vue'
import CreateAnnouncement from './views/CreateAnnouncement.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: SignIn

    },
    {
      path: '/SignUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/Clubs',
      name: 'clubs',
      component: Clubs

    },
    {
      path: '/Events',
      name: 'events',
      component: Events
    },
    {
      path: '/Profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/CreateClub',
      name: 'createClub',
      component: CreateClub
    },
    {
      path: '/Announcements',
      name: 'announcements',
      component: Announcements
    },
    {
      path: '/CreateEvent',
      name: 'createEvent',
      component: CreateEvent
    },
    {
      path: '/CreateAnnouncement',
      name: 'createAnnouncement',
      component: CreateAnnouncement
    }
  ]
})

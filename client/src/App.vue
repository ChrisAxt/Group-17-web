<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">App Start</router-link> |
      <router-link to="/SignIn">Sign In</router-link> |
      <router-link to="/SignUp">Sign Up</router-link> |
      <router-link to="/Home">Home</router-link> |
      <router-link to="/Clubs">Clubs</router-link> |
      <router-link to="/Events">Events</router-link> |
      <router-link to="/Schedule">Schedule</router-link> |
      <router-link to="/Profile">Profile</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-view />
    <my-footer />
  </div>
</template>
<script>
import MyFooter from '@/components/MyFooter.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

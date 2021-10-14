<template>
<body>
    <div>

  <b-navbar toggleable="lg" type="dark" variant="">
    <router-link to="/Home"><b-img :src="require('../assets/logoo.png')"></b-img></router-link>
    <router-link to="/Home"><b-navbar-brand>Home</b-navbar-brand></router-link>
    <router-link to="/Profile"><b-navbar-brand>Profile</b-navbar-brand></router-link>
    <router-link to="/Clubs"><b-navbar-brand v-b-toggle.sidebar-no-header>Clubs</b-navbar-brand></router-link>
    <router-link to="/Events"><b-navbar-brand v-b-toggle.sidebar-no-header>Events</b-navbar-brand></router-link>
    <router-link to="/Announcements"><b-navbar-brand v-b-toggle.sidebar-no-header>Announcements</b-navbar-brand></router-link>

        <b-form-input  size="sm" class="searchInput" placeholder="Search"></b-form-input> &nbsp;&nbsp;&nbsp;
        <b-button size="sm" name="searchBtn" class="searchBtn" type="submit">Search</b-button>

          <b-button class="signOutBtn" v-on:click="SignOut" variant="signOut">Sign Out</b-button>
  </b-navbar>
        </div>

    </body>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
    }
  },
  methods: {
    SignOut() {
      localStorage.universityId = 'University ID'
      localStorage.name = 'Name'
      this.$router.push({ name: 'signIn' })
    }
  }
}
</script>

<style scoped>
h1 {text-align: center;}
h3 {text-align: center;}
p {text-align: center;}
div {text-align: left;}
form {text-align: center;}

body {
    background-color: red;
}
button {
    box-shadow: 0 6px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    background-color:gray;
    border-radius: 8px;
    width: 45%;

}
button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: gray;
    color: white;
}
input{
    background-color: lightgray;
    text-align: left;
}
img {
    background: url('/assets/logo.png');
    width: 20%;
    height: auto;
    text-align: left;
    margin-left:1%;
}
Nav {
    background: gray;
}
.searchBtn {
    box-shadow: 0 6px 8px 0 rgba(0,0,0,0.0), 0 0px 0px 0 rgba(0,0,0,0.0);
    width: 20%;
    height: 100%;
    background-color: rgb(70, 70, 70)
}
.searchInput {
    width: 50%;
}
.signOutBtn {
  background-color: rgb(206, 0, 0);
  color: white;
  width: 20%;
  margin-left: 2%;

}
</style>

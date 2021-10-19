<template>
<body>
    <b-container class="bv-example-row">
    <div id="nav">
      <router-link to="/">Sign In</router-link> |
      <router-link to="/SignUp">Sign Up</router-link> |
      <router-link to="/Home">Home</router-link> |
    </div>

        <b-img :src="require('../assets/logo.png')"></b-img>
        <br>
        <div id="app">
            <h3>Welcome</h3>
        </div>
        <br><br>
  <b-row>
    <b-col></b-col>
    <b-col>
            <b-form-input placeholder="University ID" list="input-list" id="input-with-list" v-model="universityId"></b-form-input>
            <br>
            <b-form-input placeholder="Password" list="input-list" id="input-with-list"></b-form-input>
            <div class="Sign-up-Button" style="text-align:center">
                <br>
                <router-link to="/SignUp"><b-button style="margin-left:0px;" variant="signUp">Sign Up</b-button></router-link>
                <b-button style="margin-left:10%;" v-on:click="SignIn" variant="signIn">Sign In</b-button>
                <br><br><br><br><br><br><br>
            </div>
    </b-col>

    <b-col></b-col>
  </b-row>

</b-container>

    </body>
</template>
<script>

import { Api } from '@/Api'

export default {
  name: 'home',
  data() {
    return {
      universityId: '',
      user: {}
    }
  },
  methods: {
    SignIn() {
      Api.get(`/users/uniId/${this.universityId}`)
        .then(response => {
          this.user = response.data
          localStorage.setItem('universityId', this.user.universityId)
          localStorage.setItem('name', this.user.name)
          // localStorage.universityId = this.user.universityId
          // localStorage.name = this.user.name
          if (this.user != null) {
            alert('Found user:' + JSON.stringify(this.user, null, 2))
            this.$router.push({ name: 'profile', params: { currentUser: this.user } })
          } else {
            alert('User not found!')
          }
          this.universityId = null
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style scoped>
h1 {text-align: center;}
h3 {text-align: center;}
p {text-align: center;}
div {text-align: center;}
form{
text-align: center;
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
}
img {
    background: url('/assets/logo.png');
    width: 25%;
    height: auto;
}
</style>

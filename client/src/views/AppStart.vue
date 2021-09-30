<template>
  <div>
    <b-jumbotron class="jumbo" header="DIT341 Frontend" lead="Welcome to your DIT341 Frontend Vue.js App">
      <b-button class="btn_message" variant="primary" v-on:click="getMessage()" >Get Message from Server</b-button>
      <p>Message from the server:<br/>
      {{ message }}</p>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'App Start',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style>

html,
body {
    margin: 0;
    padding: 0;
    background-color:#b4b4b4;
}
.btn_message {
  margin-bottom: 1em;
}
.jumbo{
  color: red;
}
div {
  color:red
}
</style>

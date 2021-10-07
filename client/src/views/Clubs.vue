<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
        </div>
        <br><br>
        <b-container class="bv-example-row">

<h1 text-align="center">Clubs</h1>
<br>
  <b-row align-h="start">
    <b-col cols="4"><clubs-object/></b-col>
    <b-col v-for="club in clubs" v-bind:key="club" cols="12" sm="6" md="4">
            <clubs-object v-bind:club="club"/>
    </b-col>

  </b-row>

  <br>

  <b-row align-h="center">
    <b-col cols="4"></b-col>
  </b-row>

  <br>

  <b-row align-h="end">
    <b-col cols="4"></b-col>
  </b-row>

  <br>

  <!--<b-row align-h="around">
    <b-col cols="4">One of two columns</b-col>
    <b-col cols="4">One of two columns</b-col>
  </b-row>

  <b-row align-h="between">
    <b-col cols="4">One of two columns</b-col>
    <b-col cols="4">One of two columns</b-col>
  </b-row>-->
</b-container>

    </body>
</template>
<script>
import { Api } from '@/Api'
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'
// import EventsObject from '@/components/EventsObject.vue'
import ClubsObject from '@/components/ClubsObject.vue'

export default ({
  name: 'clubs',
  components: { ClubsSidebar, MainNavbar, 'clubs-object': ClubsObject /*, EventsObject */ },
  mounted() {
    console.log('PAGE is loaded!')
    Api.get('/clubs')
      .then(response => {
        console.log(response)
        this.clubs = response.data.clubs
      })
      .catch(error => {
        this.clubs = []
        console.log(error)
        //   TODO: display some error message instead of logging to console
      })
      .then(() => {
        console.log('This runs every time after success or error.')
      })
  },
  data() {
    return {
      clubs: []
    }
  }
})
</script>

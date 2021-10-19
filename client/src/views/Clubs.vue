<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
        </div>
        <br>
        <br>
        <b-container class="bv-example-row">

<h1 text-align="center">Clubs</h1>
<br>
  <b-row align-h="start">
    <b-col v-for="club in clubs" v-bind:key="club._id" cols="12" sm="6" md="4">
            <clubs-object v-bind:club="club" v-on:del-club="deleteClub" :name="club.name" :tag="club.tag" :description="club.description" />
    </b-col>

  </b-row>

  <br>

  <b-row align-h="center">
    <b-col cols="4">
      <b-button v-on:click="deleteClubs">Delete all Clubs</b-button>
    </b-col>
  </b-row>

  <br>

  <b-row align-h="end">
    <b-col cols="4"></b-col>
  </b-row>

  <br>

</b-container>

    </body>
</template>
<script>
import { Api } from '@/Api'
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'
import ClubsObject from '@/components/ClubsObject.vue'

export default ({
  name: 'clubs',
  components: { ClubsSidebar, MainNavbar, 'clubs-object': ClubsObject },
  mounted() {
    console.log('PAGE is loaded!')

    if (localStorage.universityId !== '') {
      Api.get(`/users/${localStorage.universityId}/clubs`)
        .then(response => {
          console.log(response.data)
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
    } else {
      Api.get('/clubs')
        .then(response => {
          console.log(response.data)
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
    }
  },

  methods: {
    deleteClubs() {
      console.log('Delete all clubs')
      Api.delete('/clubs')
        .then(response => {
          console.log(response)
          this.clubs = response.data.clubs
        })
    },
    deleteClub(id) {
      console.log(`Delete club with id ${id}`)
      Api.delete(`/clubs/${id}`)
        .then(response => {
          const index = this.clubs.findIndex(club => club._id === id)
          this.clubs.splice(index, 1)
        })
    }
  },

  data() {
    return {
      clubs: []
    }
  }
})
</script>

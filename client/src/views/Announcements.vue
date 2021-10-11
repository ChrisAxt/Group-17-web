<template>
    <body>
        <div>
            <main-navbar/>
        </div>
        <div>
            <h1 text-align="center">All Announcements</h1>
        </div>
        <b-row align-h="start">
            <b-col v-for="announcement in announcements" v-bind:key="announcement" cols="12" sm="6" md="4">
            <announcements-object v-bind:announcement="announcement"/>
            </b-col>
        </b-row>
    </body>
</template>
<script>
import { Api } from '@/Api'
import MainNavbar from '@/components/MainNavbar.vue'
import AnnouncementsObject from '@/components/AnnouncementsObject.vue'

export default ({
  name: 'announcements',
  components: { AnnouncementsObject, MainNavbar },
  mounted() {
    console.log('page is loaded!')
    Api.get('/announcements')
      .then(response => {
        console.log(response)
        this.announcements = response.data.announcements
      })
      .catch(error => {
        this.clubs = []
        console.log(error)
      })
      .then(() => {
        console.log('This runs every time after success or error')
      })
  },

  methods: {
    deleteAnnouncements() {
      console.log('Delete all announcements')
      Api.delete('/announcements')
        .then(response => {
          console.log(response)
          this.announcements = response.data.announcements
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

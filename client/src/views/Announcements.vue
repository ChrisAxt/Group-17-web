<template>
    <body>
        <div>
            <clubs-sidebar/>
        </div>
        <br>
        <br>
        <b-container class="bv-example-row">

<h1 text-align="center">Announcements</h1>
<br>
  <b-row align-h="start">
    <b-col v-for="announcement in announcements" v-bind:key="announcement._id" cols="12" sm="6" md="4">
            <announcements-object :_id="announcement._id" :title="announcement.title" :body="announcement.body" />
    </b-col>

  </b-row>
  <br>

  <b-row align-h="center">
    <b-col cols="4">
      <b-button v-on:click="deleteAnnouncements">Delete all Announcements</b-button>
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
import AnnouncementsObject from '@/components/AnnouncementsObject.vue'

export default ({
  name: 'announcements',
  components: { ClubsSidebar, 'announcements-object': AnnouncementsObject },
  mounted() {
    console.log('page is loaded!')
    Api.get('/announcements')
      .then(response => {
        console.log(response)
        this.announcements = response.data.announcements
      })
      .catch(error => {
        this.announcements = []
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
      announcements: []
    }
  }
})
</script>

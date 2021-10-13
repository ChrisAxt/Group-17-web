<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
            <br><br><br>
            <b-container>
                <b-col></b-col>
                <b-col>
                    <h1 text-align="center">All Events</h1>
                    <br>
                </b-col>
                <b-col v-for="event in events" v-bind:key="event">
                    <events-object v-bind:event="event"/>
                </b-col>
                <br>
                <b-col>
                    <b-button v-on:click="deleteEvent">Delete all Events</b-button>
                </b-col>
            </b-container>
            <br><br><br><br>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'
import EventsObject from '@/components/EventsObject.vue'
import { Api } from '@/Api'

export default ({
  name: 'events',
  components: { ClubsSidebar, MainNavbar, EventsObject },
  mounted() {
    console.log('PAGE is loaded!')
    Api.get('/events')
      .then(response => {
        console.log(response)
        this.events = response.data.events
      })
      .catch(error => {
        this.events = []
        console.log(error)
        //   TODO: display some error message instead of logging to console
      })
      .then(() => {
        console.log('This runs every time after success or error.')
      })
  },

  methods: {
    deleteEvent() {
      console.log('Delete all Events')
      Api.delete('/events')
        .then(response => {
          console.log(response)
          this.events = response.data.events
        })
    }
  },
  data() {
    return {
      events: []
    }
  }
})
</script>

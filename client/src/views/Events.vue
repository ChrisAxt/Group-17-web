<template>
    <body>
        <div>
            <clubs-sidebar/>
            <br><br><br>
            <b-container>
                <b-col></b-col>
                <b-col>
                    <h1 text-align="center">Events</h1>
                    <br>
                </b-col>
                <b-col v-for="event in events" v-bind:key="event._id">
                    <events-object v-bind:event="event" v-on:del-event="deleteEvent" :name="event.name" :location="event.location" :date="event.date" :description="event.description" :isPublic="event.isPublic"/>
                </b-col>
                <br>
                <b-col>
                    <b-button v-on:click="deleteEvents">Delete all Events</b-button>
                </b-col>
            </b-container>
            <br><br><br><br>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import EventsObject from '@/components/EventsObject.vue'
import { Api } from '@/Api'

export default ({
  name: 'events',
  components: { ClubsSidebar, EventsObject },
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
    deleteEvents() {
      console.log('Delete all Events')
      Api.delete('/events')
        .then(response => {
          console.log(response)
          this.events = response.data.events
        })
    },
    deleteEvent(id) {
      console.log(`Delete event with id ${id}`)
      Api.delete(`/events/${id}`)
        .then(response => {
          const index = this.events.findIndex(event => event._id === id)
          this.events.splice(index, 1)
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

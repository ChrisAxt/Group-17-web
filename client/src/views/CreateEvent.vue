<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
            <br>
            <b-container>
                <b-col></b-col>
                <b-col>
                    <br><br>
                    <h1 text-align="center">Create New Event</h1>
                    <br>
                    <b-form-input placeholder="Event Name" list="input-list" id="input-with-list" v-model="newEvent.name"></b-form-input>
                    <br>
                    <b-form-input placeholder="Address" list="input-list" id="input-with-list" v-model="newEvent.location"></b-form-input>
                    <br>
                    <b-form-datepicker id="example-datepicker" v-model="newEvent.date" class="mb-2"></b-form-datepicker>
                    <b-form-select placeholder="Is this event private?" :options="options" v-model="newEvent.isPublic"/>
                    <br><br>
                    <b-form-textarea id="textarea-auto-height" placeholder="Description" rows="3" max-rows="8" v-model="newEvent.description"></b-form-textarea>
                    <br><br>
                    <b-button class="CreateEvent" v-on:click="createEvent">Create</b-button>
                </b-col>
            <br>
            </b-container>
        </div>

    </body>
</template>
<script>
import { Api } from '@/Api'
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'

export default ({
  name: 'events',
  components: { ClubsSidebar, MainNavbar },

  data() {
    return {
      newEvent: {
        name: '',
        description: '',
        isPublic: '',
        location: '',
        date: ''
      },
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'true', text: 'Public' },
        { value: 'false', text: 'Private' }
      ]
    }
  },
  methods: {
    createEvent() {
      Api.post('/events', this.newEvent)
        .then(response => {
          alert('The ' + response.data.name + ' Event has been created.')
          this.newEvent.name = null
          this.newEvent.location = null
          this.newEvent.date = null
          this.newEvent.description = null
          this.newEvent.isPublic = null
          this.$router.push({ name: 'events', params: { currentEvent: this.newEvent } })
        })
    }
  }

})
</script>

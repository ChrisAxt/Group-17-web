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
                    <h1 text-align="center">Create New Announcement</h1>
                    <br>
                    <b-form-input placeholder="Title" list="input-list" id="input-with-list" v-model="newAnnouncement.title"></b-form-input>
                    <br>
                        <b-form-textarea id="textarea-auto-height" placeholder="Body" rows="3" max-rows="8" v-model="newAnnouncement.body"></b-form-textarea>
                    <br><br>
                    <b-button class="createAnnouncement" v-on:click="createAnnouncement">Create</b-button>
                </b-col>
            <br>
            </b-container>
        </div>

    </body>
</template>
<script>
import { Api } from '@/Api'

import MainNavbar from '@/components/MainNavbar.vue'

export default ({
  name: 'announcements',
  components: { MainNavbar },
  data() {
    return {
      newAnnouncement: {
        title: '',
        body: ''
      },
      selected: null
    }
  },
  methods: {
    createAnnouncement() {
      Api.post('/announcements', this.newAnnouncement)
        .then(response => {
          alert('Announcement with title ' + response.data.title + ' has been created.')
          this.newAnnouncement.title = ''
          this.newAnnouncement.body = ''
          this.$router.push({ name: 'announcements', params: { currentAnnouncement: this.newAnnouncement } })
        })
    }
  }

})
</script>

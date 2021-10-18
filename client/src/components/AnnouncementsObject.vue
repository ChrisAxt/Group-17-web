<template>

  <b-card
    class="d-flex w-100 justify-content-between">
    <b-card-title
      contenteditable="true"
      v-model="updatedAnnouncement.title"
      >{{ title }}
    </b-card-title>
    <b-card-text
      v-model="updatedAnnouncement.body"
      contenteditable="true">
      {{ body }}
    </b-card-text>
    <b-button v-on:click="Save" variant="edit">Save</b-button>
  </b-card>

</template>

<script>

import { Api } from '@/Api'

export default {
  props: {
    _id: {
      type: String
    },
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  data() {
    return {
      updatedAnnouncement: {
        title: '' + ' edited',
        body: '' + ' edited'
      }
    }
  },
  methods: {
    Save() {
      console.log(this.updatedAnnouncement)
      Api.put(`/announcements/${this._id}`, this.updatedAnnouncement)
        .then(response => {
          this.updatedAnnouncement = response.data
          if (this.updatedAnnouncement != null) {
            alert('Announcement: "' + this.title + '" was successfully updated!')
          }
        })
        .catch(error => {
          this.message = error
        })
    }/* ,
    getAnnouncement() {
      Api.get(`/announcements/${this._id}`)
        .then(response => {
          this.announcement = response.data
        })
      if (this.announcement !== null) {
        this.$router.push({ name: 'announcement', params: { currentAnnouncement: this.announcement.title } })
      }
    } */
  }
}
</script>

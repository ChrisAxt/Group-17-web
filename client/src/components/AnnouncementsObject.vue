<template>

  <b-card
    class="d-flex w-100 justify-content-between">
    <b-form-input
      v-model="updatedAnnouncement.title"
      :placeholder="title"
      >{{ title }}
    </b-form-input>
    <br>
    <b-form-textarea id="textarea-auto-height" rows="3" max-rows="8"
      v-model="updatedAnnouncement.body"
      :placeholder="body"
      >{{ body }}
    </b-form-textarea>
    <br>
    <b-button class="saveBtn" v-on:click="Save" variant="edit">Save</b-button>
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
        title: '',
        body: ''
      }
    }
  },
  methods: {
    Save() {
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
<style>
.saveBtn {
  width: 45%;
}
</style>

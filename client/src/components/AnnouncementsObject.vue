<template>
<div>
    <b-list-group>
        <b-list-group-item href='#' class="flex-column align-items-start">
        </b-list-group-item>
    </b-list-group>
    <div class="Edit-Button">
        <b-button style="margin-left:15px;" v-on:click="Save" variant="edit">Save</b-button>
    </div>
</div>
</template>

<script>

import { Api } from '@/Api'

export default {
  props: {
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
      // this.title = this.$route.params.currentAnnouncement.title
      Api.put(`/announcements/${this.announcementId}`, this.updatedAnnouncement)
      alert('Announcement: "' + this.title + '" was successfully updated!')
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

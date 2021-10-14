<template>
<b-list-group>
  <b-list-group-item v-bind:href="'/Announcement/'+ this._id">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">{{ title }}</h4>
    </div>
    <small>{{ body }}</small>
  </b-list-group-item>
</b-list-group>
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

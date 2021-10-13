<template>
  <div>
  <b-card
    :title="title"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
    {{body}}
    </b-card-text>
  </b-card>
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

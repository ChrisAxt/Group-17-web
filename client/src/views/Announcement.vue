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
                  <br>
                  <b-form-input :placeholder="this.$route.params.currentAnnouncement.title" list="input-list" id="input-with-list" v-model="updatedAnnouncement.title"></b-form-input>
                  <br>
                  <b-form-textarea id="textarea-auto-height" :placeholder="this.$route.params.currentAnnouncement.body" rows="3" max-rows="8" v-model="updatedAnnouncement.body"></b-form-textarea>
                  <br><br>
                  <b-button class="editAnnouncement" v-on:click="Save">Save</b-button>
                </b-col>
            <br>
          </b-container>
  </div>
</body>
</template>
<script>

import { Api } from '@/Api'

export default {
  name: 'Announcement',
  props: {
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  mounted() {
    Api.get('/announcements/' + this.$route.params.currentAnnouncement_id)
      .then(response => {
        this.announcement = response.data
      })
  },
  data() {
    return {
      updatedAnnouncement: {
        title: '' + ' [edited]',
        body: ''
      }
    }
  },
  methods: {
    Save() {
      Api.put(`/announcements/${this.$route.params.currentAnnouncement._id}`, this.updatedAnnouncement)
      alert('Announcement: "' + this.title + '" was successfully updated!')
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>
<style>
body {
    background: rgb(255, 255, 255)
}
button {
    box-shadow: 0 6px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    background-color:rgb(7, 7, 7);
    border-radius: 8px;
    width: 91%;

}
.form-control:focus {
    box-shadow: none;
    border-color: #ffffff
}

.profile-button {
    background: rgb(255, 255, 255);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #ffffff
}

.profile-button:focus {
    background: #ffffff;
    box-shadow: none
}

.profile-button:active {
    background: #ffffff;
    box-shadow: none
}

.back:hover {
    color: #ffffff;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #ffffff;
    color: #fff;
    cursor: pointer;
    border: solid 1px #ffffff
}
</style>

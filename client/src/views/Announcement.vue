<template>
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">{{$route.params.currentUser.universityId}}@student.gu.se</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Announcement</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6">
                        <label class="labels">Title</label><h1>{{ this.$route.params.currentAnnouncement.title }}</h1>
                    </div>
                    <div class="col-md-6"><label class="labels">Body</label><h1>{{ this.$route.params.currentAnnouncement.body }}</h1></div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
            <h4 class="text-left">Edit</h4>
            <br>
            <b-form-input placeholder="Title" list="input-list" id="input-with-list" v-model="updatedAnnouncement.title"></b-form-input>
            <br>
            <b-form-input placeholder="Name" list="input-list" id="input-with-list" v-model="updatedAnnouncement.body"></b-form-input>
            <br>
                <div class="col-md-12">
                    <b-container class="bv-example-row">
                    <b-row align-h="end">
                        <b-col cols="4"><events-object/></b-col>
                    </b-row>
                    </b-container>
                </div>
                <div class="col-md-12"></div>
            </div>
            <div class="Edit-Button">
                <b-button style="margin-left:15px;" v-on:click="Save" variant="edit">Save</b-button>
            </div>
        </div>
    </div>
</div>
</template>
<script>

import { Api } from '@/Api'

export default {
  name: 'Announcement',
  props: {
    Title: {
      type: String
    },
    Body: {
      type: String
    }
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
      Api.put(`/users/${this.$route.params.currentAnnouncement._id}`, this.updatedAnnouncement)
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

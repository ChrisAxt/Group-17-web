<template>
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
                <span class="font-weight-bold">{{this.universityId}}@student.gu.se</span>
                <span> </span>
            </div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6">
                        <label class="labels">Student ID </label>
                        <h1>{{ this.universityId }}</h1>
                    </div>
                    <div class="col-md-6"><label class="labels">Name</label>
                        <h1>{{ this.updatedUser.name }}</h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Education</label><h4>Software Engineering and Management</h4></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Program</label><h4>Bachelors</h4></div>
                    <div class="col-md-6"><label class="labels">Year</label><h4>2023</h4></div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
            <h4 class="text-left">Edit</h4>

            <br>
            <b-form-input placeholder="Name" list="input-list" id="input-with-list" v-model="updatedUser.name"></b-form-input>
            <br>
            <b-form-input placeholder="Password" list="input-list" id="input-with-list" v-model="updatedUser.password"></b-form-input>

                <div class="col-md-12">
                    <b-container class="bv-example-row">
                    <b-row align-h="end">
                        <b-col cols="4"></b-col>
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
  data() {
    return {
      universityId: '',
      updatedUser: {
        name: '',
        password: ''
      }
    }
  },
  mounted() {
    if (localStorage.getItem('universityId')) {
      this.universityId = localStorage.getItem('universityId')
      this.updatedUser.name = localStorage.getItem('name')
    }
  },
  methods: {
    Save() {
      if (this.universityId !== '') {
        Api.patch(`/users/${this.universityId}`, this.updatedUser)
        localStorage.setItem('name', this.updatedUser.name)
        alert('User: "' + this.universityId + '" was successfully updated!')
          .catch(error => {
            this.message = error
          })
      } else {
        alert('Please log-in to edit user information')
        this.$router.push({ name: 'signIn' })
      }
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

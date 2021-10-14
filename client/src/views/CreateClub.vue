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
                    <h1 text-align="center">Create New Club</h1>
                    <br>
                    <b-form-input placeholder="Club Name" list="input-list" id="input-with-list" v-model="newClub.name"></b-form-input>
                    <br>
                    <upload-image/>
                      <div>
                        <b-form-select :options="options" v-model="newClub.tag"></b-form-select>
                    </div>
                    <br>
                        <b-form-textarea id="textarea-auto-height" placeholder="Description" rows="3" max-rows="8" v-model="newClub.description"></b-form-textarea>
                    <br><br>
                    <b-button class="createClub" v-on:click="createClub">Create</b-button>
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
import UploadImage from '@/components/UploadImage.vue'

export default ({
  name: 'clubs',
  components: { ClubsSidebar, MainNavbar, UploadImage },
  data() {
    return {
      newClub: {
        name: '',
        tag: '',
        description: ''
      },
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'Course', text: 'Course' },
        { value: 'Secret Club', text: 'Secret' },
        { value: 'Social Club', text: 'Social' }
      ]
    }
  },
  methods: {
    createClub() {
      Api.post('/clubs', this.newClub)
        .then(response => {
          alert('The ' + response.data.name + ' Club has been created.')
          this.newClub.name = ''
          this.newClub.tag = ''
          this.newClub.description = ''
          this.$router.push({ name: 'clubs', params: { currentClub: this.newClub } })
        })
    }
  }

})
</script>

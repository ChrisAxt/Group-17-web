<template>
<div>
  <b-card
    :title="name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt=
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{tag}}
    <br>
    {{description}}
    </b-card-text>
    <b-dropdown href="#" variant="primary">Go somewhere</b-dropdown>
  </b-card>
</div>
</template>
<script>
// @ is an alias to /src
// import { Api } from '@/Api'
// import CreateClub from '@/view/CreateClub.vue'

/* export default {
  name: 'create-card',
  props: ['newClub']
} */

// import ClubsSidebar from '@/components/ClubsSidebar.vue'
// import MainNavbar from '@/components/MainNavbar.vue'
// import UploadImage from '@/components/UploadImage.vue'
// import EventsObject from '@/components/EventsObject.vue'

export default ({
  props: {
    name: {
      type: String
    },
    tag: {
      type: String
    },
    description: {
      type: String
    }
  }

})
</script>

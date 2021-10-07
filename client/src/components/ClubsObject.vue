<template>
<div>
  <b-card
    v-on:click ="$emit('addCard')"
    title= {newClub.name}
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt= {newClub.image}
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
</template>
<script>
// @ is an alias to /src
import { Api } from '@/Api'
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
  components: { /* ClubsSidebar, MainNavbar, UploadImage, EventsObject */ },
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
        { value: 'a', text: 'Social' },
        { value: 'b', text: 'Secret' },
        { value: 'b', text: 'Lecture' },
        { value: { C: '3PO' }, text: 'This is an option with object value' }
        // { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  },
  methods: {
    createCard: function () {
      Api.get('/clubs', this.newClub)
      this.$emit('cardName', this.newClub.name)
      this.$emit('cardTag', this.newClub.tag)
      this.$emit('cardDescription', this.newClub.description)
    }
  }

})
</script>

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
// import { Api } from '@/Api'
// import CreateClub from '@/view/CreateClub.vue'

/* export default {
  name: 'create-card',
  props: ['newClub']
} */

</script>

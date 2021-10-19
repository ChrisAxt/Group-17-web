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
    <b-button class="delBtn" variant="danger" v-on:click="$emit('del-club', club._id)">X</b-button>
  </b-card>
</div>
</template>
<script>

export default ({
  name: 'clubs-object',
  props: {
    club: {},
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
<style>
.mb-2 {
  background-color: #505050;
}
.delBtn {
  width: 15%;
  float: right;
}
</style>

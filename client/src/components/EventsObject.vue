<template>
<b-list-group>
  <b-list-group-item href="#" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">{{ name }}</h4>
      <small>{{ date }}</small>
    </div>

    <p class="mb-1">
      {{ description }}
    </p>

    <small>{{ location }}</small>
    <p v-if="isPublic">Public</p>
    <p v-else>Private</p>
    <b-button class="delBtn" variant="danger" v-on:click="$emit('del-event', event._id)">X</b-button>
  </b-list-group-item>
</b-list-group>
</template>
<script>
export default {
  name: 'events-object',
  props: {
    event: {},
    name: {
      type: String
    },
    description: {
      type: String
    },
    isPublic: {
      type: Boolean
    },
    location: {
      type: String
    },
    date: {
      type: String
    }
  }

}
</script>
<style>
.mb-1 {
  color: #757575;
}

</style>

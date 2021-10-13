<template>
<b-list-group>
  <b-list-group-item href="#" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">{{ this.$route.params.currentEvent.name }}</h4>
      <small>3 days ago</small>
    </div>

    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>

    <small>Donec id elit non mi porta.</small>
  </b-list-group-item>
</b-list-group>
</template>
<script>
export default {
  props: {
    name: {
      type: String
    },
    location: {
      type: String
    },
    date: {
      type: String
    },
    description: {
      type: String
    }
  }

}
</script>

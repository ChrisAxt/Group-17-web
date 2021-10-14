<template>
  <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="false"
      unchecked-value="true"
    >
      This event is private
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true
    }
  }
}
</script>

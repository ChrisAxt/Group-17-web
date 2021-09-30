<template>
  <div id= "info">
      <router-link class="Link" to="/about">About</router-link> |
      <router-link class="Link" to="/help">Help and support</router-link> |
      <router-link class="Link" to="/contact">Contact</router-link>
       <h6> +46 123 456 78<br>
            Lindholmsvägen 1<br>
            413 37 Göteborg</h6>
</div>
</template>

<style scoped>
#info{
    background-color: gray;
    width: 100%;
    height: 100%;
    padding:20px;
}
.Link {
    color: black;
}
</style>

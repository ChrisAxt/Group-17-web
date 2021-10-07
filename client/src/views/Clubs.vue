<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
        </div>
        <br><br>
        <b-container class="bv-example-row">

<h1 text-align="center">Clubs</h1>
<br>
  <b-row align-h="start">
    <b-col cols="4"><clubs-object/></b-col>
    <create-card v-bind:newClub = "newClub" v-on:addCard = "createCard"/>

  </b-row>

  <br>

  <b-row align-h="center">
    <b-col cols="4"><clubs-object/></b-col>
    <b-col cols="4"><clubs-object/></b-col>
    <b-col cols="4"><clubs-object/></b-col>
  </b-row>

  <br>

  <b-row align-h="end">
    <b-col cols="4"></b-col>
    <b-col cols="4"></b-col>
    <b-col cols="4"></b-col>
  </b-row>

  <br>

  <!--<b-row align-h="around">
    <b-col cols="4">One of two columns</b-col>
    <b-col cols="4">One of two columns</b-col>
  </b-row>

  <b-row align-h="between">
    <b-col cols="4">One of two columns</b-col>
    <b-col cols="4">One of two columns</b-col>
  </b-row>-->
</b-container>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'
// import EventsObject from '@/components/EventsObject.vue'
import ClubsObject from '@/components/ClubsObject.vue'

export default ({ components: { ClubsSidebar, MainNavbar, ClubsObject } })
</script>

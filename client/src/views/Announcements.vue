<template>
    <body>
        <div>
            <main-navbar/>
        </div>
        <div>
            <h1 text-align="center">All Announcements</h1>
        </div>
        <b-row align-h="start">
            <b-col v-for="announcement in announcements" v-bind:key="announcement" cols="12" sm="6" md="4">
            <announcements-object v-bind:announcement="announcement"/>
            </b-col>
        </b-row>
    </body>
</template>
<script>
import AnnouncementsObject from '@/components/AnnouncementsObject.vue'
import MainNavbar from '@/components/MainNavbar.vue'

export default ({ components: { AnnouncementsObject, MainNavbar } })
</script>

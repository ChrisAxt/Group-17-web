<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
            <br><br><br>
            <b-container>
                <b-col></b-col>
                <b-col>
                    <h1 text-align="center">Events</h1>
                    <events-object/>
                    <events-object/>
                    <events-object/>
                </b-col>
                <b-col></b-col>
            </b-container>
            <br><br><br><br><br>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'
import EventsObject from '@/components/EventsObject.vue'

export default ({ components: { ClubsSidebar, MainNavbar, EventsObject } })
</script>

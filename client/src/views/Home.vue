<template>
    <body>
        <div>
            <clubs-sidebar/>
            <br>
            <b-container>
                <b-col></b-col>
                <b-col>
                    <br><br>
                    <h1 text-align="center">Today</h1>
                    <br>
                    <events-object/>
                    <br><br>
                </b-col>
            <br>
            </b-container>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import EventsObject from '@/components/EventsObject.vue'

export default ({ components: { ClubsSidebar, EventsObject } })
</script>

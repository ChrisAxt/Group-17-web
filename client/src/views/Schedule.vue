<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
              <b-tabs content-class="mt-3" fill>
    <b-tab title="Monday" active><p>
         <b-container>
                <b-col></b-col>
                <b-col>
                    <br><br>
                    <h1 text-align="center">Your Events</h1>
                    <br>
                    <events-object/>
                    <events-object/>
                    <events-object/>
                    <br><br>
                </b-col>
                <b-col></b-col>
            </b-container></p></b-tab>
    <b-tab title="Tuesday"><p>
                 <b-container>
                <b-col></b-col>
                <b-col>
                    <br><br>
                    <h1 text-align="center">Events</h1>
                    <br>
                    <events-object/>
                    <events-object/>
                    <br><br>
                </b-col>
                <b-col></b-col>
            </b-container></p></b-tab>
    <b-tab title="Wednesday"><p>I'm the tab with the very, very long title</p></b-tab>
    <b-tab title="Thursday"><p>I'm a disabled tab!</p></b-tab>
    <b-tab title="Friday"><p>I'm a disabled tab!</p></b-tab>
    <b-tab title="Saturday"><p>I'm a disabled tab!</p></b-tab>
    <b-tab title="Sunday"><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'
// import ScheduleTemplate from '@/components/ScheduleTemplate.vue'
import EventsObject from '@/components/EventsObject.vue'

export default ({ components: { ClubsSidebar, MainNavbar, EventsObject } })
</script>

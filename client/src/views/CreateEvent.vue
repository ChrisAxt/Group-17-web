<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
            <br>
            <b-container>
                <b-col></b-col>
                <b-col>
                    <br><br>
                    <h1 text-align="center">Create New Event</h1>
                    <br>
                    <b-form-input placeholder="Event Name" list="input-list" id="input-with-list"></b-form-input>
                    <br>
                    <upload-image/>
                    <select-type/>
                        <b-form-textarea id="textarea-auto-height" placeholder="Description" rows="3" max-rows="8"></b-form-textarea>
                    <br><br>
                    <b-button class="CreateClub" v-on:click="Clubs">Create</b-button>
                </b-col>
            <br>
            </b-container>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'
import SelectType from '@/components/SelectType.vue'
import UploadImage from '@/components/UploadImage.vue'
// import EventsObject from '@/components/EventsObject.vue'

export default ({ components: { ClubsSidebar, MainNavbar, SelectType, UploadImage/*, EventsObject */ } })
</script>

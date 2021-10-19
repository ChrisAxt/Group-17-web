<template>
    <body>
        <div>
            <clubs-sidebar/>
            <br>
            <b-container>
                <b-col></b-col>
                <b-col>
                    <br><br>
                    <h1 text-align="center">Welcome to SEMbook!</h1>
                    <br>
                    <img :src="require('../assets/logoo.png')">
                    <br><br>
                    <h4 text-align="right">Created by Team 17</h4>
                </b-col>
            <br>
            </b-container>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'

export default ({ components: { ClubsSidebar } })
</script>

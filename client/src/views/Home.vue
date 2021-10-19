<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
            <br>
            <b-container>
                <b-col></b-col>
                <b-col id="homePage">
                    <br><br>
                    <h1>Welcome to SEMbook!</h1>
                    <br>
                    <img class="logo" :src="require('../assets/logoo.png')">
                    <br><br>
                    <h4 text-align="right">Created by Team 17</h4>
                </b-col>
            <br><br><br>
            </b-container>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'

export default ({ components: { ClubsSidebar, MainNavbar } })
</script>
<style>
#homePage {
    float: center;
    text-align: center;
}
input{
    background-color: lightgray;
}
.logo {
    background: url('/assets/logo.png');
    width: 30%;
    height: auto;
}
</style>

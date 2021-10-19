<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
            <br>
            <b-container id="textLogo">
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
import MainNavbar from '@/components/MainNavbar.vue'

export default ({ components: { ClubsSidebar, MainNavbar } })
</script>
<style>
h1 {text-align: center;}
h3 {text-align: center;}
p {text-align: center;}
div {text-align: center;}
form{text-align: center;}

input{
    background-color: lightgray;
}
img {
    background: url('/assets/logo.png');
    width: 25%;
    height: auto;
}
</style>

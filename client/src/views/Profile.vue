<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
            <profile-object/>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'
import ProfileObject from '@/components/ProfileObject.vue'

export default ({ components: { ClubsSidebar, MainNavbar, ProfileObject } })
</script>

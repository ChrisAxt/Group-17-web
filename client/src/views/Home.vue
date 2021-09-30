<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'

export default ({ components: { ClubsSidebar, MainNavbar } })
</script>

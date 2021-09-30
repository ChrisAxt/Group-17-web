<template>
    <body>
        <div>
            <main-navbar/>
            <clubs-sidebar/>
            <ScheduleTemplate/>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'
import ScheduleTemplate from '@/components/ScheduleTemplate.vue'

export default ({ components: { ClubsSidebar, MainNavbar, ScheduleTemplate } })
</script>

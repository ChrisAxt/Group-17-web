<template>
    <body>
        <div>
            <clubs-sidebar/>
            <profile-object/>
        </div>

    </body>
</template>
<script>
import ClubsSidebar from '@/components/ClubsSidebar.vue'
import ProfileObject from '@/components/ProfileObject.vue'

export default ({ components: { ClubsSidebar, ProfileObject } })
</script>

<template>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Create something</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="http://localhost:8080/CreateClub" @click="hide">Create Club</b-nav-item>
              <b-nav-item href="http://localhost:8080/CreateEvent" @click="hide">Create Event</b-nav-item>
              <b-nav-item href="http://localhost:8080/CreateAnnouncement" @click="hide">Create Announcement</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
      </b-sidebar>
</template>

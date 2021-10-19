<template>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Create something</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <router-link to="/CreateClub"><b-navbar-brand @click="hide">Create Club</b-navbar-brand></router-link>
              <router-link to="/CreateEvent"><b-navbar-brand @click="hide">Create Event</b-navbar-brand></router-link>
              <router-link to="/CreateAnnouncement"><b-navbar-brand @click="hide">Create Announcement</b-navbar-brand></router-link>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
      </b-sidebar>
</template>

<template>
<body>
    <divn>

  <b-navbar toggleable="lg" type="dark" variant="">
    <router-link to="/Home"><b-img :src="require('../assets/logoo.png')"></b-img></router-link>
    <router-link to="/Home"><b-navbar-brand>Home</b-navbar-brand></router-link>
    <router-link to="/Profile"><b-navbar-brand>Profile</b-navbar-brand></router-link>
    <router-link to="/Clubs"><b-navbar-brand>Clubs</b-navbar-brand></router-link>
    <router-link to="/Events"><b-navbar-brand>Events</b-navbar-brand></router-link>
    <router-link to="/Schedule"><b-navbar-brand>Schedule</b-navbar-brand></router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-form-input  size="sm" class="searchInput" placeholder="Search"></b-form-input>
        <b-button size="sm" name="searchBtn" class="searchBtn" type="submit">Search</b-button>

    <b-collapse id="nav-collapse" is-nav>
<!--    <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>

        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <router-link to="/Profile"><b-dropdown-item to="/Profile">Profile</b-dropdown-item></router-link>
          <router-link to="/SignIn"><b-dropdown-item to="/SignIn">Sign Out</b-dropdown-item></router-link>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
        </divn>

    </body>
</template>

<style scoped>
h1 {text-align: center;}
h3 {text-align: center;}
p {text-align: center;}
div {text-align: left;}
form {text-align: center;}

body {
    background-color: red;
}
button {
    box-shadow: 0 6px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    background-color:gray;
    border-radius: 8px;
    width: 45%;

}
button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: gray;
    color: white;
}
input{
    background-color: lightgray;
    text-align: left;
}
img {
    background: url('/assets/logo.png');
    width: 20%;
    height: auto;
    text-align: left;
    margin-left:1%;
}
Nav {
    background: gray;
}
.searchBtn {
    box-shadow: 0 6px 8px 0 rgba(0,0,0,0.0), 0 0px 0px 0 rgba(0,0,0,0.0);
    width: 20%;
    height: 100%;
    background-color: rgb(70, 70, 70)
}
.searchInput {
    width: 50%;
}
</style>

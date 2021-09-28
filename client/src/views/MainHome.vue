<template>
<body>
    <div>

  <b-navbar toggleable="lg" type="dark" variant="">
      <router-link to="/MainHome"><b-img :src="require('../assets/logoo.png')"></b-img></router-link>
    <b-navbar-brand href="#">Clubs</b-navbar-brand>
    <b-navbar-brand href="#">Events</b-navbar-brand>
    <b-navbar-brand href="#">Schedule</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" name="searchBtn" class="my-2 my-sm-0" type="submit">Search</b-button>

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
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
        </div>

    </body>
</template>

<style scoped>
h1 {text-align: center;}
h3 {text-align: center;}
p {text-align: center;}
div {text-align: left;}
form {text-align: center;
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
    width: 40%;
    height: auto;
    text-align: left;
    margin-left:1%;
}
Nav {
    background: gray;
}
.searchBtn {
    width: 40%;
    height: 100%;
}
</style>

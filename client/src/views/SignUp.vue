<template>
<body>
    <b-container class="bv-example-row">
        <b-img :src="require('../assets/logo.png')"></b-img>
        <br><br><br><br><br><br><br><br>
        <div id="app">
            <h3>Welcome</h3>
        </div>
        <br><br>
  <b-row>
    <b-col></b-col>
    <b-col>
            <b-form-input placeholder="University ID" list="input-list" id="input-with-list"></b-form-input>
            <br>
            <b-form-input placeholder="Name" list="input-list" id="input-with-list"></b-form-input>
            <br>
            <b-form-input placeholder="Password" list="input-list" id="input-with-list"></b-form-input>
            <br>
            <b-form-input placeholder="Confirm password" list="input-list" id="input-with-list"></b-form-input>
            <br>
            <div class="Sign-up-Button" style="text-align:center">
                <b-button style="margin:0px;" variant="signUp">Sign Up</b-button>
            </div>
    </b-col>

    <b-col></b-col>
  </b-row>

</b-container>

  </body>
</template>
<style scoped>
h1 {text-align: center;}
h3 {text-align: center;}
p {text-align: center;}
div {text-align: center;}
form{
text-align: center;
}
input{
    background-color: lightgray;
}
button {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    background-color:gray;
    border-radius: 8px;
    width: 100%;

}
button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: gray;
    color: white;
}
.logo {
    background: url('/images/logo.png');
}
</style>

<template lang="html">
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
            <br><br>
            <b-form-input placeholder="Password" list="input-list" id="input-with-list"></b-form-input>
            <div class="Sign-up-Button" style="text-align:center">
                <b-button style="margin:10px;" variant="signUp">Sign Up</b-button>
                <b-button style="margin:10px;" variant="signIn">Sign In</b-button>
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
    background-color:gray;
}
.logo {
    background: url('/images/logo.png');
}
</style>

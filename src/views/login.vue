
<template>
  <div class="login" >
    <v-app id="inspire">
      
      <v-toolbar dark  >
        <v-toolbar-title> Sign In</v-toolbar-title>
      </v-toolbar>
      <v-form v-model="valid">
        <v-avatar id="avatarIcon" :tile="tile" :size="150" color="grey lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
        </v-avatar>
        <v-container class="container">
          <v-layout>
            <v-flex>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <br />
          <v-layout>
            <v-flex>
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                label="Last name "
                required
                :counter="20"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <br />
          <v-layout>
            <v-flex>
              <v-text-field v-model="email" :rules="emailRules" required label="Email"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn @click="redirect" dark>Sign in</v-btn>  
        
        <p> don't you have an account yet ? <a @click="reedirectSign">Create an account here</a></p> 
      </v-form>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    redirect() {
      this.$router.push("/index");
    } ,
    reedirectSign(){
      this.$router.push("/signup")
    }
  }
};
</script>
<style scoped>
form {
  text-align: center;
}
.container {
  margin-top: 5%;
}
#inspire {
  background-color: transparent;
  width: 50%;
  margin-left: 25%;
}
#avatarIcon {
  margin-top: 3%;
}
#toolBar {
  background-color: #4287f5;
  color: white;
  
  }
  .toolText{
    text-align: center;  }
</style>



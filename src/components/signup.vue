<template>
  <div id="app">
    <p>Create your account</p>
    <v-container class="container">
      <v-layout>
        <v-flex>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
            name="username"
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
            name="lastname"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <br />
      <v-layout>
        <v-flex>
          <v-text-field v-model="email" :rules="emailRules" required label="Email" name="email"></v-text-field>

        </v-flex>
      </v-layout>
    </v-container>
    <v-btn @click="check" :disabled="errors.any() || !isCompleted" class="info">Sign up</v-btn>
    <p> Back to <a v-on:click="redirect">Login</a></p>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {};
  },
  methods: {
       redirect(){
        this.$router.push("/")
    }
  },
  computed: {
    isComplete() {
      return this.username && this.password && this.email;
    },
   
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald:500&display=swap");
#app {
  margin-left: 12%;
}
p {
  font-family: "Oswald", sans-serif;
  font-size: 2em;
}
</style>


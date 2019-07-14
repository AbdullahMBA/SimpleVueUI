<template>

  <div>
    <v-app id="main">
     

<CustomeHeader/>
 <skills id="skills"/>
    </v-app>
  </div>
</template>
<script>
import CustomeHeader from './CustomeHeader.vue';
import skills from './Home';
export default {
  name: "index",
  components:{
    CustomeHeader,
    skills
  },
  
  data() {
    return {
      alert: false
    };
  },
  methods: {
    alerting() {
      alert = !alert;
      console.log(alert);
    },
    redirect(){
      this.$router.push("/skills")
    }
  }
};
</script>
<style scoped>
#main {
  max-width: 100%;
}
.btnCont {
  width: 30%;
  margin-left: 33%;
  position: relative;
  top: 50%;
}
#text {
  font-size: 2em;
}
h1 {
  text-align: center;
  text-transform: uppercase;
  color: #4CAF50;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

a {
  text-decoration: none;
  color: #008CBA;
}

#skills{
  position: relative;
  bottom: 50%;

  width: 50%;

  left: 20%;
}

</style>

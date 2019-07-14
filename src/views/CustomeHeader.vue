<template>
    <div>

<v-app id="inspire">
    <v-toolbar dark>
  
    <v-btn @click="redirect" class="white-text" >Sign out </v-btn>      
  
      <v-spacer></v-spacer>
  
    </v-toolbar>
  </v-app>    
    </div>
</template>

<script>
export default {
 name:"CustomeHeader",
 data() {
     return {
         
     }
 },
 methods:{
     redirect(){
         this.$router.push('./')
     }
 }
}
</script>

<style>


</style>

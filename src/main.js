import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
    
Vue.use(VueAxios, axios)

Vue.use(VeeValidate);
Vue.use(Vuetify)
Vue.config.productionTip = false;

Vue.directive('rainbow', {
  bind(el,binding,vnode){
    el.style.backgroundColor = "#" + Math.random().toString().slice(3 , 7);
    el.style.color="#66757F";
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import index from "./views/index.vue";
import login from "./views/login";
import signup from "./components/signup.vue";
import CustomeHeader from './views/CustomeHeader.vue';
import profile from './views/profile.vue';
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index",
      name: "index",
      component: index
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    } ,
    {
      path:"/skills",
      name:'skills',
      component: Home
    },
    {
      path:"/",
      name:"login",
      component:login
    },
    {
      path:"/signup",
      name:"signup",
      component:signup
    },
    {
      path:'./profile',
      name:"profile",
      component:profile
    },
    {
      path:"/CustomeHeader",
      name:'CustomeHeader',
      component:CustomeHeader
    }


  ]
});

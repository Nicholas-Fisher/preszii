import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Faq from "./views/Faq.vue";
import Gallery from "./views/Gallery.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/faq",
      component: Faq
    },
    {
      path: "/gallery",
      component: Gallery
    },
  ]
});

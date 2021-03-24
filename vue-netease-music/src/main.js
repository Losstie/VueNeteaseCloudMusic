import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cube from "cube-ui";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "@/assets/js/iconfont.js";
import "swiper/swiper-bundle.css";

Vue.use(Cube)
  .use(VueAwesomeSwiper);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

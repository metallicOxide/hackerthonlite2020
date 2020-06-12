import Vue from "vue";
//@ts-ignore
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

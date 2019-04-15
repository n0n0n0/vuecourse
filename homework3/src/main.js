import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import NProgress from 'vue-nprogress';
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

//Vue.use(NProgress)

//const nprogress = new NProgress({ parent: '.nprogress-container' })

new Vue({
  router,
//  nprogress,
  render: h => h(App)
}).$mount("#app");

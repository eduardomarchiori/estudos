import "vue-toast-notification/dist/theme-sugar.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToast from "vue-toast-notification";
import axios from "axios";
import {request} from "@/utils/interceptor";

Vue.use(VueToast);

Vue.config.productionTip = false;

axios.interceptors.request.use(request, (error) => Promise.reject(error));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

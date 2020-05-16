import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import LoginStore from "@/views/login/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: LoginStore
  },
  plugins: [new VuexPersistence().plugin]
});

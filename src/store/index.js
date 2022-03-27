import { createStore } from "vuex";
import logo from "@/assets/images/sample-logo.png";
import myself from "@/assets/images/me.png";

export default createStore({
  state: {
    appLogo: logo,
    userImage: myself,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

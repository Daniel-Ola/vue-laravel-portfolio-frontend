import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAnimXYZ from "@animxyz/vue3";
// import Vue3Marquee from "vue3-marquee";
// import "vue3-marquee/dist/style.css";

import "@/assets/css/tailwind/output.css";
import "@/assets/css/fontawesome/css/all.min.css";
import "@animxyz/core"; // Import css here if you haven't elsewhere

// .use(VueAnimXYZ)
// .use(Vue3Marquee)

createApp(App).use(store).use(router).use(VueAnimXYZ).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAnimXYZ from "@animxyz/vue3";

import "@/assets/css/tailwind/output.css";
import "@/assets/css/fontawesome/css/all.min.css";
import "@animxyz/core"; // Import css here if you haven't elsewhere

createApp(App).use(store).use(router).use(VueAnimXYZ).mount("#app");

// .use(VueAnimXYZ)

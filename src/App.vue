<template>
  <div class="bg-app-blue h-screen overflow-hidden">
    <app-navigation />
    <!--    <router-view />-->
    <router-view v-slot="{ Component }">
      <XyzTransition
        appear
        xyz="fade in-left-100% out-right-100%"
        mode="out-in"
      >
        <component :is="Component" />
      </XyzTransition>
    </router-view>
    <app-bottom-navigation />
  </div>
</template>

<script>
import AppNavigation from "@/components/LandingPage/AppNavigation";
import AppBottomNavigation from "@/components/LandingPage/AppBottomNavigation";
import router from "./router/index.js";

export default {
  components: {
    AppNavigation,
    AppBottomNavigation,
  },
  mounted() {
    console.clear();
    console.log(router);
    console.log(router.currentRoute.value.matched);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

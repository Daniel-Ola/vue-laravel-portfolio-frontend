<template>
  <nav class="container mx-auto">
    <!--  Desktop Menu  -->
    <div class="flex items-center">
      <div class="app-logo w-32">
        <router-link :to="{ name: 'home' }">
          <img :src="$store.state.appLogo" alt="App Logo" />
        </router-link>
      </div>
      <div
        class="container md:flex hidden items-center justify-end mx-auto gap-10"
      >
        <app-nav-menu-list
          v-for="(nav, index) in linkList"
          :class="checkActiveRoute(nav.url)"
          :key="index"
          :nav="nav"
          class="mr-2"
        />
      </div>
      <div class="flex md:hidden justify-end items-center container">
        <button @click="showMobileMenu = !showMobileMenu" class="focus:ring-0 focus:outline-0">
          <i class="fa fa-bars text-5xl"></i>
        </button>
      </div>
    </div>
    <!--  Mobile Menu -->
    <XyzTransition appear xyz="fade in-left-50% out-right-100%" mode="out-in">
      <div
        class="absolute right-0 md:w-1/3 w-1/2 border-2 border-[#303C4C] bg-app-blue z-10 flex flex-col items-center justify-center md:hidden rounded-lg"
        v-show="showMobileMenu"
      >
        <app-nav-menu-list
          v-for="(nav, index) in linkList"
          :class="checkActiveRoute(nav.url)"
          :key="index"
          :nav="nav"
          class="w-full border-b-2 border-b-[#303C4C]"
        />
      </div>
    </XyzTransition>
  </nav>
</template>

<script>
import AppNavMenuList from "@/components/LandingPage/AppNavMenuList";

// import { ref } from "vue";

// const showMobileMenu = ref(false);

export default {
  name: "AppNavigation",
  components: {
    AppNavMenuList,
  },
  data() {
    return {
      showMobileMenu: false,
      linkList: [
        {
          title: "About Me",
          url: "about",
        },
        {
          title: "Resume",
          url: "about",
        },
        {
          title: "Study Case",
          url: "personal.info",
        },
        {
          title: "Portfolio",
          url: "resume",
        },
        {
          title: "Portfolio 2",
          url: "resume.info",
        },
      ],
    };
  },
  methods: {
    checkActiveRoute(routeName) {
      return this.$route.name === routeName
        ? "md:btn-primary text-white"
        : "text-[#42B983]";
    },
  },
  computed: {
    appLogo() {
      return this.$store.state.appLogo;
    },
  },
};
</script>

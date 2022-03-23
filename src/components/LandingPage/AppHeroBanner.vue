<template>
  <header>
    <app-navigation />
    <app-banner />
  </header>
</template>

<script>
import AppNavigation from "@/components/LandingPage/AppNavigation";
import AppBanner from "@/components/LandingPage/AppBanner";

export default {
  name: "AppHeroBanner",
  components: {
    AppNavigation,
    AppBanner
  }
};
</script>

<template>
  <div class="absolute bottom-1 w-screen z-10">
    <div
      class="container md:mx-auto flex flex-row-reverse w-1/3 items-center md:justify-center justify-start gap-12 ml-auto mr-2"
      v-if="parentRoutes.includes(this.$route.name)"
    >
      <div class="previousPageItem btn btn-primary animate-wiggle hover:animate-none">
        <router-link :to="{ name: $route.meta.next }">
          <button class="cursor-pointer capitalize">
            Continue
            <i class="fa fa-arrow-right"></i>
          </button>
        </router-link>
      </div>
    </div>

    <div
      class="container md:mx-auto flex flex-row-reverse w-1/3 items-center md:justify-center justify-start gap-12 ml-auto mr-2"
      v-else
    >
      <div class="nextPageItem btn btn-primary animate-bounce hover:animate-none">
        <router-link :to="{ name: $route.meta.next }">
          <button class="cursor-pointer">
            <i class="fa fa-arrow-alt-circle-right" />
          </button>
        </router-link>
      </div>
      <div class="previousPageItem btn btn-primary animate-bounce hover:animate-none md:mr-0 mr-2">
        <router-link :to="{ name: $route.meta.prev }">
          <button class="cursor-pointer">
            <i class="fa fa-arrow-alt-circle-left" />
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      parentRoutes: ["about", "resume", "portfolio"],
    };
  },
  computed: {
    nextRoute() {
      return this.getNextRoute();
    },
    previousRoute() {},
    baseNav() {
      // return
    },
  },
  methods: {
    isParentRoute() {
      return this.parentRoutes.includes(this.$route.name);
    },

    getNextRoute() {
      if (this.isParentRoute()) {
        return this.$route.matched[0].children[0];
      }
    },

    getPreviousRoute() {},
  },
  // mounted() {
  //   // console.log(document.getElementsByTagName("title"));
  //   // console.log("this router", this.$route.meta);
  //   // let current = this.$router.currentRoute["_value"].matched[0].name;
  //   // console.log(current);
  //   // console.log("router", router.getRoutes().filter(route)); //.currentRoute.value);
  //   // console.log(this.$route.matched);
  // },
  // created() {
  //   console.clear();
  // }
};
</script>

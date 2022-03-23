<template>
  <div class="bg-app-blue">
    <app-about-intro :user="user" />
  </div>
</template>

<script>
import AppAboutIntro from "@/components/LandingPage/AppAboutIntro";
import myself from "@/assets/images/me.png";

export default {
  name: "HomeView",
  components: { AppAboutIntro },
  data() {
    return {
      user: {
        name: "Philip Oluwatimileyin",
        occupation: "Graphics Designer",
        tagline: "I know that good design meant good business",
        photo: myself,
      },
    };
  },
};

// @ is an alias to /src
</script>

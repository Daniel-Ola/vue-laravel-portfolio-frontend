<template>
  <app-about-intro
    :user="user"
    v-if="$route.name === 'about'"
    xyz="fade in-left-100% out-right-100%"
  />
  <user-bio :user_image="myself" v-if="$route.name === 'about.bio'" />
  <user-profile
    :myself="myself"
    v-if="$route.name === 'about.personal_info'"
    xyz="fade in-left-100% out-right-100%"
  />
</template>

<script>
import AppAboutIntro from "@/components/LandingPage/AppAboutIntro";
import myself from "@/assets/images/me.png";
import UserBio from "@/components/About/UserBio";
import UserProfile from "@/components/About/UserProfile";

export default {
  components: {
    AppAboutIntro,
    UserBio,
    UserProfile,
  },
  data() {
    return {
      user: {
        name: "Philip Oluwatimileyin",
        occupation: "Graphics Designer",
        tagline: "I know that good design meant good business",
        photo: myself,
      },
      myself,
    };
  },
};
</script>

<template>
  <div class="bg-app-blue">
    <app-about-intro
      :user="user"
      v-if="$route.name === 'about'"
    />
    <user-bio :user_image="myself" v-if="$route.name === 'about.bio'" />
    <user-profile
      :myself="myself"
      v-if="$route.name === 'about.personal_info'"
    />
    <user-education v-if="$route.name === 'about.education'" />
  </div>
</template>

<script>
import AppAboutIntro from "@/components/LandingPage/AppAboutIntro";
import myself from "@/assets/images/me.png";
import UserBio from "@/components/About/UserBio";
import UserProfile from "@/components/About/UserProfile";
import UserEducation from "@/components/About/UserEducation";

export default {
  components: {
    AppAboutIntro,
    UserBio,
    UserProfile,
    UserEducation,
  },
  data() {
    return {
      step: 3,
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

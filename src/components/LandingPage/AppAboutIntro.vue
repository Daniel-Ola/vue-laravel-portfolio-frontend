<template>
  <div
    class="flex flex-col-reverse md:flex-row items-center justify-center basis-1 gap-24s h-[100%]"
  >
    <div
      class="md:relative absolute z-10 md:z-0 bottom-0 lg:left-40"
    >
      <div
        class="flex flex-col justify-center md:items-start items-center text-white pl-40s space-y-3 md:space-y-0 md:gap-3 border-0 py-10 bg-radial to-app-blue via-app-blue from-[#1B3549] md:px-3 lg:px-0"
      >
        <p class="font-bold text-lg uppercase font-app-default">
          <span class="text-[#E63F76]">Hello,</span>
          Im {{ user.name }}
        </p>
        <p class="font-bold text-7xl font-heading md:text-left">
          {{ user.occupation }}
        </p>
        <p class="font-light text-gray-300 capitalize">
          {{ user.tagline }}
        </p>
        <div class="mt-3">
          <button
            class="btn btn-primary font-app-default uppercase rounded-[20px] px-4"
          >
            Hire me
          </button>
        </div>
      </div>
    </div>

    <div
      class="flex items-center md:justify-end justify-center md:w-1/2 w-full md:basis-3/4 lg:basis-1/2"
    >
      <div class="user-image lg:w-1/2 h-1/2 relative lg:right-20 opacity-50 md:opacity-100">
        <img :src="user.photo" alt="User" class="h-full" />
      </div>
    </div>
  </div>

  <div class="md:absolute hidden right-0 bottom-10 border-no-right md:p-3 p-6">
    <div class="flex md:flex-row flex-col md:gap-5 space-y-3">
      <i class="fa-brands fa-discord text-[#49D6FB] text-2xl"></i>
      <i class="fa-brands fa-instagram text-[#49D6FB] text-2xl"></i>
      <i class="fa-brands fa-twitter text-[#49D6FB] text-2xl"></i>
      <i class="fa-brands fa-facebook text-[#49D6FB] text-2xl"></i>
      <i class="fa-brands fa-youtube text-[#49D6FB] text-2xl"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAboutIntro",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.bg-radial {
  background-image: radial-gradient(circle at center, var(--tw-gradient-stops));
}
</style>

<!--default: {-->
<!--name: "Philip Oluwatimileyin",-->
<!--occupation: "Graphics Designer",-->
<!--tagline: "I know that good design meant good business",-->
<!--},-->

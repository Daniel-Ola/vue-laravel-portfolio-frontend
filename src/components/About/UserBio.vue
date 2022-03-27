<template>
  <XyzTransition appear xyz="fade up">
  <div class="relative">
    <div class="flex sm:flex-row flex-col">
      <!-- User Image -->
      <div
        class="user-image sm:basis-1/2 basis-full sm:flex items-end justify-center h-1/2 hidden"
      >
        <div
          class="relative sm:w-2/3 w-full h-1/2 rounded-3xl border-x-2 border-t-2 bg-[#B4E1DB] top-16"
        >
          <img :src="user_image" alt="Phil'O" />
        </div>
      </div>

      <!--      Bio Section -->
      <div class="user-bio md:basis-1/2 basis-full">
        <!--        Bio Heading -->
        <div class="header-text lg:w-1/2 w-full mt-28">
          <h1
            class="text-4xl font-bold font-app-default uppercase text-white leading-relaxed"
          >
            <span class="text-[#E63F76]">Hello,</span>
            you can call me Phil'O
          </h1>
        </div>

        <!--        Bio Details -->
        <div class="flex flex-col mt-7 text-white sm:w-2/3 w-full justify-start sm:gap-3 space-y-7 md:space-y-2 lg:space-y-0 pl-5">

          <div
            class="grid grid-cols-3"
            v-for="(item, index) in bioItems"
            :key="index"
          >
            <div class="flex justify-between items-center">
              <span>{{ item.title }}</span>
              <span>:</span>
            </div>
            <div class="flex justify-start items-center col-span-2">
              <p class="ml-3">{{ item.answer }}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  </XyzTransition>
</template>

<script>
export default {
  props: {
    user_image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      bioItems: [
        {
          title: "Name",
          answer: "Philip Oluwatimileyin MAKANJUOLA",
        },
        {
          title: "Birth",
          answer: "23 March",
        },
        {
          title: "Address",
          answer: "Faith house Iwagba",
        },
        {
          title: "Phone",
          answer: "(234)703-464-4524",
        },
        {
          title: "Email",
          answer: "philodesigns247@gmail.com",
        },
        {
          title: "Freelance",
          answer: "Available",
        },
      ],
    };
  },
};
</script>

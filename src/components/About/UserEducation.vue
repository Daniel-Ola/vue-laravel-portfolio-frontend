<template>
  <div class="relative px-20 mt-20">
    <div class="page-title mb-16">
      <h2 class="text-4xl uppercase text-left text-heading">
        <span class="text-[#E63F76]">Edu</span>cation
      </h2>
    </div>

    <Vue3Marquee :pauseOnHover="true" duration="60">
      <div class="flex justify-between items-start">
        <!--      education item-->
        <div
          class="flex flex-col space-y-10"
          v-for="(education, index) in educationList"
          :key="index"
        >
          <!--        education numbering-->
          <div class="flex items-center justify-start">
            <div
              class="flex flex-col space-y-1 border-4 border-solid border-gray-500 text-white rounded-full p-5"
            >
              <span class="font-bold text-md">0{{ index + 1 }}</span>
              <span>{{ education.year }}</span>
            </div>
            <div class="w-full">
              <hr class="w-100 border-t-4 border-t-gray-500" />
            </div>
          </div>

          <!--        Education Award-->
          <div class="education-award w-1/2">
            <h3 class="text-white text-left">{{ education.award }}</h3>
          </div>

          <!--        Education details-->
          <div class="education-details w-1/2">
            <p class="text-gray-400 text-left">{{ education.details }}</p>
          </div>
        </div>
      </div>
    </Vue3Marquee>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";

export default {
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      educationList: [
        {
          award: "B.Tech - Computer Science and Engineering",
          details:
            "Lorem ipsum placeholder Lorem ipsum placeholder Lorem ipsum placeholder ",
          year: "2022",
        },
        {
          award: "SSCE",
          details:
            "Lorem ipsum placeholder Lorem ipsum placeholder Lorem ipsum placeholder ",
          year: "2014",
        },
        {
          award: "Graphic Design",
          details:
            "Lorem ipsum placeholder Lorem ipsum placeholder Lorem ipsum placeholder ",
          year: "2000",
        },
      ],
    };
  },
};
</script>

<template>
  <XyzTransition appear xyz="fade rotate-right ease-out-back">
    <div class="relative -top-10 sm:top-0">
      <div
        class="flex justify-around md:space-x-0 lg:space-x-4 md:px-10 lg:px-24"
      >
        <div
          class="profile-details w-full sm:w-1/2 basis-full sm:basis-1/2 px-10 mt-5"
        >
          <h1
            class="profile-heading font-heading uppercase text-white font-bold text-4xl sm:text-5xl mt-5 text-left mb-7"
          >
            <span class="text-[#E63F76]">Pro</span>file
          </h1>

          <div class="profile-summary text-white">
            <p class="text-justify leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              dolorem eveniet perferendis voluptatibus? Ab dolores error eveniet
              necessitatibus quidem! Animi dolores doloribus eligendi eum fugiat
              fugit nesciunt officiis perspiciatis vero! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Commodi dolorem eveniet
              perferendis voluptatibus? Ab dolores error eveniet necessitatibus
              quidem! Animi dolores doloribus eligendi eum fugiat fugit nesciunt
              officiis perspiciatis vero!
            </p>
            <p class="text-justify leading-loose mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              dolorem eveniet perferendis voluptatibus? Ab dolores error eveniet
              necessitatibus quidem!
            </p>
          </div>

          <div class="block mt-3 md:hidden">
            <!--          <h2 class="uppercase text-white text-md font-app-default">Makanjuola P.O.</h2>-->
            <!--          <p class="text-white font-heading">Graphics Designer</p>-->

            <div class="flex justify-between items-center">
              <span class="text-white">Contact: </span>
              <i class="fa-brands fa-discord text-[#49D6FB]"></i>
              <i class="fa-brands fa-instagram text-[#49D6FB]"></i>
              <i class="fa-brands fa-twitter text-[#49D6FB]"></i>
              <i class="fa-brands fa-facebook text-[#49D6FB]"></i>
              <i class="fa-brands fa-youtube text-[#49D6FB]"></i>
            </div>
          </div>
        </div>

        <!--      Profile Card-->

        <div
          class="md:flex flex-col rounded-3xl border-2 border-[#233340] divide-y-2 divide-[#233340] hidden w-1/3 justify-between items-center h-100 py-10"
        >
          <div class="flex justify-center items-center w-full mb-7 basis-1/2">
            <div class="card-image h-48 w-48 rounded-full bg-[#CBCCD1] z-50">
              <img
                :src="myself"
                alt="myself"
                class="object-scale-down h-48 w-96 -z-10"
              />
            </div>
          </div>

          <div class="flex justify-center w-full basis-1/2">
            <div class="container other-details mt-10">
              <h2
                class="uppercase text-white font-bold text-xl font-app-default tracking-[5px] mb-5"
              >
                Makanjuola P.O.
              </h2>
              <p class="text-white font-heading">Graphics Designer</p>

              <div class="flex md:space-x-3 lg:space-x-5 justify-center mt-16">
                <i class="fa-brands fa-discord text-[#49D6FB] text-2xl"></i>
                <i class="fa-brands fa-instagram text-[#49D6FB] text-2xl"></i>
                <i class="fa-brands fa-twitter text-[#49D6FB] text-2xl"></i>
                <i class="fa-brands fa-facebook text-[#49D6FB] text-2xl"></i>
                <i class="fa-brands fa-youtube text-[#49D6FB] text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </XyzTransition>
</template>

<script>
// import xyz

export default {
  props: {
    myself: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="absolute bottom-1 w-screen z-10">
    <div
      class="container md:mx-auto flex flex-row-reverse w-1/3 items-center md:justify-center justify-start gap-12 ml-auto mr-2"
      v-if="this.$route.name === 'about'"
    >
      <div class="previousPageItem btn btn-primary animate-wiggle">
        <button class="cursor-pointer capitalize">
          Continue
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <div
      class="container md:mx-auto flex flex-row-reverse w-1/3 items-center md:justify-center justify-start gap-12 ml-auto mr-2"
      v-else
    >
      <div class="nextPageItem btn btn-primary animate-bounce">
        <button class="cursor-pointer">
          <i class="fa fa-arrow-alt-circle-right" />
        </button>
      </div>
      <div
        class="previousPageItem btn btn-primary animate-bounce md:mr-0 mr-2"
      >
        <button class="cursor-pointer">
          <i class="fa fa-arrow-alt-circle-left" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

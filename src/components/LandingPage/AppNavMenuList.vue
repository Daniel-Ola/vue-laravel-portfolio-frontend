<template>
  <router-link :to="{ name: nav.url }" class="rounded-md px-3 py-2">
    {{ nav.title }}
  </router-link>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      required: true,
    },
  },
};
</script>

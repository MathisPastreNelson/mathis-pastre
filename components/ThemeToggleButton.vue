<template>
  <button
    aria-label="theme change"
    @click="toggleTheme"
    class="themeButton outline-none shadow-shadow1 flex justify-center items-center px-4 py-3 w-14 max-sm:w-12 max-sm:px-2 h-5vh rounded-lg font-black active:brightness-150 hover:brightness-150 ease-out duration-300">
    <i class="text-1xl" :class="theme === 'dark' ? 'ii-moon' : 'ii-sun'"></i>
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleTheme() {
      this.$emit("toggle-theme");
    },
  },
};
</script>

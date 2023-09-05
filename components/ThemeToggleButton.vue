<template>
  <!-- bouton change theme -->
  <button
    aria-label="theme change"
    @click="toggleTheme"
    class="themeButton outline-none shadow-shadow1 flex justify-center items-center px-4 py-3 w-14 max-sm:w-12 max-sm:px-2 h-5vh rounded-lg font-black active:brightness-150 hover:brightness-150 ease-out duration-300">
    <img
      class="w-4"
      v-if="theme === 'dark'"
      src="~/assets/images/items/Icons/Moon.svg"
      alt="French Flag" />
    <img
      class="w-7"
      v-else-if="theme === 'light'"
      src="~/assets/images/items/Icons/Sun.svg"
      alt="English Flag" />
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

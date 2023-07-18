<template>
  <div>
    <button
      aria-label="theme change"
      class="themeButton outline-none shadow-shadow1 flex justify-center items-center w-14 px-2 py-3 max-sm:w-12 max-sm:px-2 mr-3 h-5vh rounded-lg font-black active:brightness-150 hover:brightness-150 ease-out duration-300"
      @click="toggleTheme">
      <img class="w-7" :src="currentIcon" alt="theme-icon" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "dark",
    };
  },

  computed: {
    currentIcon() {
      return this.theme === "light"
        ? "~/assets/images/items/icons/Sun.svg"
        : "~/assets/images/items/icons/Moon.svg";
    },
  },

  methods: {
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      this.theme = newTheme;
      // You can perform any additional actions related to theme change here
      // For example, save the theme in localStorage or emit an event to update the theme globally.
      this.$emit("toggle-theme", newTheme);
    },
  },
};
</script>

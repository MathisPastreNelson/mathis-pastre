<template>
  <button
    aria-label="theme change"
    @click="toggleTheme"
    class="themeButton outline-none shadow-shadow1 flex justify-center items-center px-4 py-3 w-14 max-sm:w-12 max-sm:px-2 h-5vh rounded-lg font-black active:brightness-150 hover:brightness-150 ease-out duration-300">
    <img :src="getIconSrc()" alt="theme-icon" class="icon-img" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkIcon: "~/assets/images/items/icons/Moon.svg",
      lightIcon: "~/assets/images/items/icons/Sun.svg",
    };
  },
  methods: {
    getIconSrc() {
      if (process.client) {
        return localStorage.getItem("theme") === "light"
          ? this.darkIcon
          : this.lightIcon;
      }
      // Default icon when running SSR (server-side rendering)
      return this.darkIcon;
    },
    toggleTheme() {
      // Avoid toggling theme when running SSR
      if (process.client) {
        const currentTheme = localStorage.getItem("theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        this.$emit("toggle-theme", newTheme);
      }
    },
  },
};
</script>

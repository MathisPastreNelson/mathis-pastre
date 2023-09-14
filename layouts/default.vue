<template>
  <main class="relative overflow-hidden">
    <header
      class="headerHeight flex items-center px-10 max-sm:px-4 duration-300 justify-between w-full z-10">
      <!-- Logo -->
      <img
        class="logo"
        src="../assets/images/items/MP-logo.webp"
        alt="header logo" />

      <!-- boutons theme + lang -->
      <Animate
        delay=""
        duration=""
        repeat=""
        v-bind:scroll="true"
        animation="animate__fadeInDown 	">
        <div class="flex justify-center items-center">
          <LanguageSwitchButton />
          <ThemeToggleButton :theme="theme" @toggle-theme="toggleTheme" />
        </div>
      </Animate>
    </header>

    <slot></slot>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

import ThemeLogic from "~/components/scripts/ThemeToggleButton.js";

const theme = ref("dark");

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  ThemeLogic.setThemeInLocalStorage(theme.value);
  ThemeLogic.updateThemeClass(theme.value);
};

onMounted(() => {
  theme.value = ThemeLogic.getThemeFromLocalStorage();
  ThemeLogic.updateThemeClass(theme.value);
});
</script>

<style scoped>
.headerHeight {
  height: 10dvh;
}
.logo {
  max-width: 130px;
  min-width: 90px;
  width: 10%;
  max-height: 9dvh;
  border-radius: 15px;
  transition: 300ms ease-in;
}
</style>

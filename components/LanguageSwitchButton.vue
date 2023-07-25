<template>
  <div>
    <button
      aria-label="language change"
      class="langButton outline-none shadow-shadow1 flex justify-center items-center w-14 px-2 py-3 max-sm:w-12 max-sm:px-2 mr-3 h-5vh rounded-lg font-black active:brightness-150 hover:brightness-150 ease-out duration-300"
      @click="toggleLocale">
      <img
        class="w-7 rounded-sm"
        v-if="currentLocale === 'FR'"
        src="@/assets/images/items/FlagFrench.svg"
        alt="French Flag" />
      <img
        class="w-7 rounded-sm"
        v-else-if="currentLocale === 'EN'"
        src="@/assets/images/items/FlagEnglish.svg"
        alt="English Flag" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLocale: "FR",
    };
  },

  methods: {
    toggleLocale() {
      const newLocale = this.currentLocale === "FR" ? "EN" : "FR";
      this.currentLocale = newLocale;
      this.$i18n.setLocale(newLocale.toLowerCase());
    },
  },
};
</script>

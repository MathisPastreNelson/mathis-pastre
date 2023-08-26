<template>
  <!-- le bouton consistant à scroll top -->
  <button
    aria-label="scroll top"
    class="scrollbutton outline-none p-3 hover:scale-y-110 bounceReverse focus:scale-y-110 z-50 active:scale-y-110 absolute rounded-lg bg-center right-6 max-sm:right-3 top-6 max-sm:top-3 hover:brightness-125 duration-300"
    @click="handleScrollToSection">
    <svg id="more-arrows" width="37.8" height="32.5">
      <polygon
        class="arrow-top"
        points="18.8,0.65 0.9,13.95 1.65,14.6 18.8,1.95 35.95,14.6 36.8,13.95" />
      <polygon
        class="arrow-middle"
        points="18.8,9.35 0.4,22.9 2.2,24.05 18.8,11.65 35.4,24.05 37.2,22.9" />
      <polygon
        class="arrow-bottom"
        points="18.8,18.05 0,32 2.55,33.65 18.8,21.65 35.05,33.65 37.6,32" />
    </svg>
  </button>
</template>

<script>
export default {
  props: ["scrollContainerRef"],
  methods: {
    handleScrollToSection() {
      const sectionHeight = this.scrollContainerRef.clientHeight;
      const scrollAmount = sectionHeight * 0.85; // 85vh

      this.scrollContainerRef.scrollTo({
        top: this.scrollContainerRef.scrollTop - scrollAmount,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
#more-arrows {
  width: 37px;
  height: 32px;

  &:hover {
    polygon {
      transition: all 0.2s ease-out;

      &.arrow-bottom {
        transform: translateY(-9px);
      }

      &.arrow-top {
        transform: translateY(9px);
      }
    }
  }
}

polygon {
  transition: all 0.2s ease-out;

  &.arrow-middle {
    opacity: 0.75;
  }

  &.arrow-top {
    opacity: 0.5;
  }
}
</style>

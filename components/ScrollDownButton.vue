<template>
  <button
    aria-label="scroll down"
    class="outline-none m-3 hover:scale-y-110 bounce focus:scale-y-110 z-50 active:scale-y-110 absolute rounded-lg bg-center bottom-6 right-6 max-sm:right-3 max-sm:bottom-3 hover:brightness-125 duration-300"
    @click="handleScrollToSection">
    <svg id="more-arrows" width="37.8" height="32.5">
      <polygon
        class="arrow-top"
        points="18.8,13.95 0.9,0.65 1.65,0 18.8,12.65 35.95,0 36.8,0.65" />
      <polygon
        class="arrow-middle"
        points="18.8,22.9 0.4,9.35 2.2,8.2 18.8,20.6 35.4,8.2 37.2,9.35" />
      <polygon
        class="arrow-bottom"
        points="18.8,32 0,18.05 2.55,16.4 18.8,28.4 35.05,16.4 37.6,18.05" />
    </svg>
  </button>
</template>

<script>
export default {
  props: ["scrollContainerRef"],
  methods: {
    handleScrollToSection() {
      const sectionHeight = this.scrollContainerRef.clientHeight;
      const scrollAmount = sectionHeight * 0.55; // 85vh

      this.scrollContainerRef.scrollTo({
        top: this.scrollContainerRef.scrollTop + scrollAmount,
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

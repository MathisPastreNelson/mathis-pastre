<template>
  <Head>
    <Title>Portfolio Mathis Pastre</Title>
    <Meta
      name="description"
      content="Vous trouverez dans mon portfolio, mes réalisations, mes services, une petite présentation ainsi qu'un petit formulaire pour me joindre. C'est une vitrine de mon travail, qui me permet de me présenter et de montrer ce que je suis capable de faire." />
  </Head>

  <NuxtLayout>
    <IndicationBox :activeSection="activeSection" :totalSections="4" />
    <div class="scroll-container" ref="scrollContainer">
      <!-- Section 1 -->
      <section
        class="flex items-center flex-col duration-300 justify-center relative sectionHeight scroll-section w-full before:-z-10 before:w-380 before:h-380 before:-ml-190 before:inset-1/2 before:-top-340 before:absolute before:animate-[spin_100s_linear_infinite] before:bg-[url(~/assets/images/background/starwheel.svg)] before:bg-no-repeat before:bg-cover">
        <Section1Component />
        <ScrollDownButton :scrollContainerRef="scrollContainerRef" />
      </section>
      <!-- Section 2 -->
      <section
        class="flex items-center justify-center scroll-section sectionHeight relative duration-300 section2Element">
        <Section2Component />
        <ScrollTopButton :scrollContainerRef="scrollContainerRef" />
        <ScrollDownButton :scrollContainerRef="scrollContainerRef" />
      </section>
      <!-- Section 3 -->
      <section
        class="flex items-center justify-center scroll-section relative sectionHeight duration-300">
        <Section3Component />
        <ScrollTopButton :scrollContainerRef="scrollContainerRef" />
        <ScrollDownButton :scrollContainerRef="scrollContainerRef" />
      </section>
      <!-- Section 4 -->
      <section
        class="flex items-center justify-center scroll-section lastSectionHeight relative duration-300 section4Element">
        <Section4Component />
        <ScrollTopButton :scrollContainerRef="scrollContainerRef" />
      </section>
      <Footer />
    </div>
  </NuxtLayout>
</template>

<script>
import IndicationBox from "@/components/IndicationBox.vue";
import ScrollDownButton from "@/components/ScrollDownButton.vue";
import ScrollTopButton from "@/components/ScrollTopButton.vue";

export default {
  components: {
    IndicationBox,
    ScrollDownButton,
    ScrollTopButton,
  },
  data() {
    return {
      scrollContainerRef: null,
      activeSection: 1, // Set the initial active section to 1
    };
  },
  mounted() {
    this.scrollContainerRef = this.$refs.scrollContainer;
    this.observeSections();
  },
  beforeUnmount() {
    this.unobserveSections();
  },
  methods: {
    observeSections() {
      const sections =
        this.$refs.scrollContainer.querySelectorAll(".scroll-section");
      const options = {
        root: this.scrollContainerRef,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold value as needed
      };

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.dataset.section);
            this.activeSection = sectionIndex;
          }
        });
      };

      this.observer = new IntersectionObserver(callback, options);
      sections.forEach((section, index) => {
        section.dataset.section = index + 1;
        this.observer.observe(section);
      });
    },
    unobserveSections() {
      const sections =
        this.$refs.scrollContainer.querySelectorAll(".scroll-section");
      sections.forEach((section) => {
        this.observer.unobserve(section);
      });
      this.observer.disconnect();
    },
  },
};
</script>

<style scoped>
.section2Element::after {
  content: "●";

  font-size: 8rem;

  position: absolute;
  z-index: -1;
  top: 0vh;

  width: 100vw;
  animation: 60s linear infinite orbit-planet;
  transition: 300ms;
}
.section4Element::after {
  content: "●";

  font-size: 1rem;

  position: absolute;
  z-index: -1;
  opacity: 0.3;
  width: 100vw;
  animation: 20s ease-in infinite reverse orbit-planet;
  transition: 300ms;
}
.section4Element::before {
  content: "●";

  font-size: 1rem;

  position: absolute;
  z-index: -1;

  opacity: 0.3;
  width: 100vw;
  animation: 40s ease-out infinite reverse orbit-planet2;
  transition: 300ms;
}
</style>

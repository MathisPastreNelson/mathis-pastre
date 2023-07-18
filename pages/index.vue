<template>
  <Head>
    <Title>Portfolio Mathis Pastre</Title>

    <Meta
      name="description"
      content="Mon portfolio est un outil essentiel pour présenter mes compétences, mes réalisations. C'est une vitrine de mon travail, qui me permet de me présenter et de montrer ce que je suis capable de faire." />
  </Head>

  <NuxtLayout>
    <div class="scroll-container" ref="scrollContainer">
      <!-- Section 1 -->
      <section
        class="flex items-center flex-col duration-300 justify-center relative sectionHeight scroll-section w-full before:-z-10 before:w-380 before:h-380 before:-ml-190 before:inset-1/2 before:-top-340 before:absolute before:animate-[spin_100s_linear_infinite] before:bg-[url(~/assets/images/background/starwheel.svg)] before:bg-no-repeat before:bg-cover">
        <Section1Component />
        <ScrollDownButton :scrollContainerRef="scrollContainerRef" />
      </section>
      <!-- Section 2 -->
      <section
        class="flex items-center justify-center scroll-section sectionHeight relative duration-300">
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
        class="flex items-center justify-center scroll-section lastSectionHeight relative duration-300">
        <Section4Component />
        <ScrollTopButton :scrollContainerRef="scrollContainerRef" />
      </section>
      <Footer />
    </div>
  </NuxtLayout>
</template>

<script>
import ScrollDownButton from "@/components/ScrollDownButton.vue";
import ScrollTopButton from "@/components/ScrollTopButton.vue";

export default {
  components: {
    ScrollDownButton,
    ScrollTopButton,
  },
  data() {
    return {
      scrollContainerRef: null,
    };
  },
  mounted() {
    this.scrollContainerRef = this.$refs.scrollContainer;

    // L'erreur de slide vien de cette ligne visiblement
    // L'erreur de slide vien de cette ligne visiblement
    // L'erreur de slide vien de cette ligne visiblement
    // L'erreur de slide vien de cette ligne visiblement
    // L'erreur de slide vien de cette ligne visiblement

    // this.scrollContainerRef.addEventListener("scroll", this.handleScroll);

    // L'erreur de slide vien de cette ligne visiblement
    // L'erreur de slide vien de cette ligne visiblement
    // L'erreur de slide vien de cette ligne visiblement
    // L'erreur de slide vien de cette ligne visiblement
    // L'erreur de slide vien de cette ligne visiblement
    // this.handleScroll(); // Vérifier la position de défilement initiale
  },
};
</script>

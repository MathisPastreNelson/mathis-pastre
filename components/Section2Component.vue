<template>
  <div class="section2BackgroundTexture"></div>
  <div class="section2 px-6 py-4 my-4 relative">
    <h2
      class="text-4xl max-sm:text-3xl text-center font-semibold Cinzel cursor-default">
      {{ $t("section2title") }}
    </h2>
    <div class="divider my-4"></div>
    <!-- Articles -->
    <div class="flip-box cursor-default">
      <div class="flip-box-inner">
        <h3 class="flip-box-front text-xl max-sm:text-xl font-semibold">
          <img
            class="w-6 bounceH iconHover"
            src="../assets/images/items/selection.svg"
            alt="Hover me !" />
          {{ $t("IntegrationWebTitle") }}
        </h3>
        <p class="flip-box-back font-semibold">
          {{ $t("IntegrationWebDescribe") }}
        </p>
      </div>
    </div>
    <div class="flip-box cursor-default">
      <div class="flip-box-inner">
        <h3 class="flip-box-front text-xl max-sm:text-xl font-semibold">
          <img
            class="w-6 bounceHR iconHover"
            src="../assets/images/items/selection.svg"
            alt="Hover me !" />
          {{ $t("customDevTitle") }}
        </h3>

        <p class="flip-box-back font-semibold">
          {{ $t("customDevDescribe") }}
        </p>
      </div>
    </div>
    <div class="flip-box cursor-default">
      <div class="flip-box-inner">
        <h3 class="flip-box-front text-xl max-sm:text-xl font-semibold">
          <img
            class="w-6 bounceH iconHover"
            src="../assets/images/items/selection.svg"
            alt="Hover me !" />
          {{ $t("dynamicPagesTitle") }}
        </h3>

        <p class="flip-box-back font-semibold">
          {{ $t("dynamicPagesDescribe") }}
        </p>
      </div>
    </div>
    <div class="flip-box cursor-default">
      <div class="flip-box-inner">
        <h3 class="flip-box-front text-xl max-sm:text-xl font-semibold">
          <img
            class="w-6 bounceHR iconHover"
            src="../assets/images/items/selection.svg"
            alt="Hover me !" />
          {{ $t("SEOTitle") }}
        </h3>
        <p class="flip-box-back font-semibold">
          {{ $t("SEODescribe") }}
        </p>
      </div>
    </div>
    <div class="flip-box cursor-default">
      <div class="flip-box-inner">
        <h3 class="flip-box-front text-xl max-sm:text-xl font-semibold">
          <img
            class="w-6 bounceH iconHover"
            src="../assets/images/items/selection.svg"
            alt="Hover me !" />
          {{ $t("responsiveDesignTitle") }}
        </h3>

        <p class="flip-box-back font-semibold">
          {{ $t("responsiveDesignDescribe") }}
        </p>
      </div>
    </div>
    <div class="divider my-4"></div>
    <TechnologiesList />
  </div>
</template>

<style scoped>
.section2::before {
  content: "●";
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1rem;
  color: #f19797b9;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0%;
  width: 60%;

  animation: 16s linear infinite reverse orbit-pullquote;
}

.section2::after {
  content: "●";
  display: flex;
  align-items: center;
  font-size: 3rem;
  color: #42d3ff7c;
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 100%;
  left: 0%;

  animation: 30s linear infinite orbit-pullquote;
}
/* Flip-box */
.flip-box {
  perspective: 1000px;
  height: 3rem;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateX(180deg);
}

.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
}
.iconHover {
  backface-visibility: hidden;
  margin-right: 1rem;
}
.flip-box-front {
  background-color: #bbbbbb00;
}

.flip-box-back {
  transform: rotateX(180deg);
}
</style>

<template>
  <button
    class="flex items-center justify-evenly py-1 px-3 rounded-xl buttonEffect relative duration-300">
    <template v-if="iconClass && iconPosition === 'left'">
      <i class="mr-3" :class="iconClass"></i>
    </template>
    <template v-else-if="svgPath && iconPosition === 'left'">
      <img
        class="mr-3 svg-icon"
        :src="svgPath"
        :style="{ width: svgWidth, height: svgHeight }"
        alt="SVG Icon" />
    </template>
    <span class="font-semibold">{{ buttonText }}</span>
    <template v-if="iconClass && iconPosition === 'right'">
      <i class="ml-3" :class="iconClass"></i>
    </template>
    <template v-else-if="svgPath && iconPosition === 'right'">
      <img
        class="ml-3 svg-icon"
        :src="svgPath"
        :style="{ width: svgWidth, height: svgHeight }"
        alt="SVG Icon" />
    </template>
  </button>
</template>

<style scoped>
.buttonEffect:hover {
  box-shadow: 0px 0px 40px 0px rgba(0, 139, 163, 0.76);
}
.buttonEffect::after {
  content: "●";
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.8em;
  color: rgba(232, 255, 131, 0.397);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  height: 100%;
  width: 0;
  transform-origin: left;
  animation: 16s linear infinite reverse orbit-pullquote;
  transition: 1.2s ease-out;
}
.buttonEffect:hover::after {
  width: 80%;
}
.buttonEffect::before {
  content: "●";
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2em;
  color: rgba(192, 253, 255, 0.534);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  height: 100%;
  width: 0;
  transform-origin: left;
  animation: 16s linear infinite orbit-pullquote;
  transition: 0.4s ease-out;
}
.buttonEffect:hover::before {
  width: 80%;
}
</style>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      default: "",
    },
    iconPosition: {
      type: String,
      default: "left",
    },
    svgPath: {
      type: String,
      default: "",
    },
    svgWidth: {
      type: String,
      default: "20px",
    },
    svgHeight: {
      type: String,
      default: "20px",
    },
  },
};
</script>

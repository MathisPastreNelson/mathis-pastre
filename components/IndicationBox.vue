<template>
  <div class="flex indicationBox">
    <div
      v-for="section in totalSections"
      :key="section"
      class="indicationElement"
      :class="{ 'indicationElement--active': activeSection === section }"></div>
  </div>
</template>

<script>
export default {
  props: {
    activeSection: {
      type: Number,
      required: true,
    },
    totalSections: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.indicationBox {
  position: absolute;
  top: 10dvh;
  right: 25%;
  opacity: 0.8;
  z-index: 5;
}

.indicationElement {
  width: 10px;

  height: 15px;
  margin: 0 2px;
  transition: 300ms;
  border-radius: 0 0 2px 2px;
}

.indicationElement--active {
  height: 30px;
}
</style>

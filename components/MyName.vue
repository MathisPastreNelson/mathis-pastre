<template>
  <div class="first-container share">
    <h1 class="flex flex-wrap justify-center">
      <div class="flex-none">
        <span id="one">M</span><span>a</span><span>t</span><span>h</span>
        <span>i</span><span>s</span>
      </div>
      <div class="flex-none">
        <span></span>
        <span>P</span><span>a</span><span>s</span><span>t</span><span>r</span
        ><span>e</span>
      </div>
    </h1>
  </div>
  <div v-if="$i18n.locale === 'fr'" class="second-container share">
    <h1 class="flex flex-wrap justify-center">
      <div class="flex-none">
        <span>D</span><span>é</span><span>v</span><span>e</span><span>l</span>
        <span>o</span><span>p</span><span>p</span><span>e</span><span>u</span
        ><span>r</span><span></span>
      </div>
      <div class="flex-none"><span>W</span><span>e</span><span>b</span></div>
    </h1>
  </div>
  <div v-else class="second-container share">
    <h1 class="flex flex-wrap justify-center">
      <div class="flex-none">
        <span>W</span><span>e</span><span>b</span><span></span>
      </div>
      <div class="flex-none">
        <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span
        ><span>o</span><span>p</span><span>e</span><span>r</span>
      </div>
    </h1>
  </div>
</template>

<style scoped>
.first-container,
.second-container {
  cursor: default;
  position: relative;
}
.second-container::before {
  content: "●";
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 3rem;
  color: #e0e0e08a;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 40%;

  left: 40%;

  animation: 8s linear infinite reverse orbit-pullquote;
}

.second-container::after {
  content: "●";
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #e7f3a13d;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 35%;

  left: 35%;

  animation: 16s linear infinite orbit-pullquote;
}

.first-container h1,
.second-container h1 {
  position: relative;
  letter-spacing: 1px;
}

.first-container {
  margin-bottom: 15px;
}

span {
  display: inline-block;
  position: relative;
  margin-right: 5px;
}
span:after {
  content: "";
  position: absolute;
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  transition: 0.6s;
  z-index: -5;
}
</style>
<script></script>

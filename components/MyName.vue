<template>
  <!-- mon nom + titre (page 1) -->
  <div class="opacity-90 font-thin">
    <Animate
      delay=""
      duration=""
      repeat=""
      v-bind:scroll="true"
      animation="animate__lightSpeedInRight 	">
      <div class="titleBox">
        <div class="content">
          <h1>Mathis Pastre</h1>
          <h1>Mathis Pastre</h1>
        </div>
      </div>
    </Animate>
    <Animate
      delay=""
      duration=""
      repeat=""
      v-bind:scroll="true"
      animation="animate__lightSpeedInLeft 	">
      <div class="titleBox2">
        <div class="content2">
          <h2>{{ $t("title") }}</h2>
          <h2>{{ $t("title") }}</h2>
        </div>
      </div>
    </Animate>
  </div>
</template>

<style scoped>
.titleBox {
  display: flex;
  cursor: url("../assets/cursor/classic.svg"), default;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
}
.titleBox2 {
  display: flex;
  cursor: url("../assets/cursor/classic.svg"), default;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
}
.content {
  position: relative;
}
.content2 {
  position: relative;
}
.content h1 {
  color: #fff;
  transition: 300ms;
  position: absolute;
  transform: translate(-50%, 10%);
}

.content h1:nth-child(1) {
  color: transparent;
}

.content h1:nth-child(2) {
  animation: animate 4s ease-in-out infinite;
}
.content2 h2 {
  color: #fff;
  transition: 300ms;
  position: absolute;
  transform: translate(-50%, 110%);
}

.content2 h2:nth-child(1) {
  color: transparent;
}

.content2 h2:nth-child(2) {
  animation: animate2 4s ease-in-out infinite;
}

.titleBox::before {
  content: "●";
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  color: #f19797b9;
  position: absolute;
  z-index: -1;

  width: 15%;

  animation: 24s linear infinite reverse orbit-pullquote;
}

.titleBox::after {
  content: "●";
  display: flex;
  align-items: center;
  font-size: 3rem;
  color: #ecff4248;
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 25%;
  transform: translate(50%, 50%);
  animation: 18s linear infinite orbit-pullquote;
}

.titleBox2::before {
  content: "●";
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2rem;
  color: #97f19f6e;
  position: absolute;
  z-index: -1;
  top: 0;
  width: 35%;
  transform: translate(50%, 50%);

  animation: 28s linear infinite reverse orbit-pullquote;
}

.titleBox2::after {
  content: "●";
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #7276b148;
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 45%;
  transform: translate(50%, 50%);
  animation: 36s linear infinite orbit-pullquote;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}

@keyframes animate2 {
  0% {
    clip-path: polygon(
      0% 48%,
      18% 42%,
      40.8% 40.8%,
      61.2% 45.6%,
      80.4% 60%,
      100% 66%,
      100% 0%,
      0% 0%
    );
  }

  50% {
    clip-path: polygon(
      0% 66%,
      19.2% 67.2%,
      39.6% 50%,
      64.8% 48%,
      84% 49.2%,
      100% 55.2%,
      100% 0%,
      0% 0%
    );
  }

  100% {
    clip-path: polygon(
      0% 48%,
      18% 42%,
      40.8% 40.8%,
      61.2% 45.6%,
      80.4% 60%,
      100% 66%,
      100% 0%,
      0% 0%
    );
  }
}
</style>
<script></script>

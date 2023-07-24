<template>
  <div class="opacity-90">
    <Animate
      delay=""
      duration=""
      repeat=""
      v-bind:scroll="true"
      animation="animate__fadeInLeft 	">
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
      animation="animate__fadeInRight 	">
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

  white-space: nowrap;
  align-items: center;
  justify-content: center;
}
.titleBox2 {
  display: flex;

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

  position: absolute;
  transform: translate(-50%, 110%);
}

.content2 h2:nth-child(1) {
  color: transparent;
}

.content2 h2:nth-child(2) {
  animation: animate2 4s ease-in-out infinite;
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

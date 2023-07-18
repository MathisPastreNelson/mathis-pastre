<template>
  <div class="img img-01 text-sm">
    <p class="hoverText w-60">{{ $t("hoverImgText") }}</p>
  </div>
  <div class="img img-02">
    <div class="relative w-full h-full">
      <p
        class="absolute text-base max-sm:text-sm presentation leading-5 flex flex-col">
        <span class="divider mb-4"></span>
        {{ $t("presentationTexte") }}
        <span class="divider mt-4"></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.hoverText {
  position: absolute;
  width: 100%;
  bottom: -15%;

  text-align: center;
  animation: bounce 3s infinite;
  border-radius: 10px;
}
.img {
  width: 80px;
  top: -15dvh;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  position: absolute;

  transition: 300ms ease;

  border-radius: 50%;
  object-fit: cover;
}

.img-01 {
  background-image: url(../assets/images/items/moi-8bit.png);
  background-color: rgba(255, 255, 255, 0.212);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  z-index: 2;
  width: 80px;
  height: 80px;
}

.img-02 {
  background-image: url(../assets/images/items/moi.jpg);
  top: 2.5dvh;

  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: 1;
  opacity: 0;
  pointer-events: none;

  border-radius: 0;
  width: 100%;
  height: 65dvh;
}

.presentation {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  border-radius: 5px;
  height: 90%;
  max-height: 260px;
  padding: 0.5rem;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-01:hover {
  opacity: 0;
}

.img-01:hover ~ .img-02 {
  opacity: 1;
  box-shadow: 0px 0px 120px 0px rgba(0, 139, 163, 0.76);
  filter: grayscale(0.2);
}
.img-01:hover ~ .img-02 > div {
  animation: scale-in-hor-right 1200ms ease-out;
}
</style>

<template>
  <div class="img img-01 text-sm">
    <p class="hoverText w-60">{{ $t("hoverImgText") }}</p>
  </div>

  <div class="img img-02">
    <p class="titleGif absolute w-full z-50">{{ $t("gifTitle") }}</p>
    <p class="titleGif2 absolute w-full z-50">{{ $t("gifTitle2") }}</p>
    <img
      src="../assets/my-photos/1.webp"
      class="h-full absolute photoGif"
      alt=""
      srcset="" />
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
  animation: bounceClassic 3s infinite;
  border-radius: 10px;
}
.img {
  top: -15dvh;
  left: 50%;

  height: auto;
  position: absolute;
  cursor: url("../assets/cursor/zoom.svg"), default;
  transition: 300ms ease;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  object-fit: cover;
}

.img-01 {
  background-image: url(../assets/images/items/moi-8bit.webp);
  background-color: rgba(114, 120, 173, 0.534);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 90%;
  z-index: 2;
  width: 80px;
  height: 80px;
}

.titleGif,
.titleGif2 {
  top: 50%;
  left: 50%;
  width: auto;
  transform: translate(350%, -50%);
  padding: 1rem 0.5rem;
  border-radius: 15px;
  opacity: 0;
}

.photoGif {
  top: 50%;
  left: 50%;

  transform: translate(350%, -50%);
}

.img-02 {
  background-image: url(../assets/images/items/moi.webp);
  top: 2.5dvh;

  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
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

.presentation::before {
  content: "●";
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 3rem;
  color: #d63c3c48;
  position: absolute;
  z-index: -1;
  top: 20px;

  width: 140%;

  animation: 10s linear infinite reverse orbit-pullquote;
}

.presentation::after {
  content: "●";
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #8a9c253d;
  position: absolute;
  z-index: -1;
  bottom: 20px;
  width: 120%;

  animation: 8s linear infinite orbit-pullquote;
}

.img-01:hover {
  opacity: 0;
}

.img-01:hover ~ .img-02 {
  opacity: 1;
  box-shadow: 0px 0px 120px 0px rgba(0, 139, 163, 0.76);
  filter: grayscale(0.2);
}

.img-01:hover ~ .img-02 > .titleGif {
  animation: gifAnim 1s ease-in;
}

.img-01:hover ~ .img-02 > .titleGif2 {
  animation: gifAnim2 3s ease-in;
}
.img-01:hover ~ .img-02 > img {
  animation: gifAnim 4s ease-in;
}
.img-01:hover ~ .img-02 > div {
  animation: scale-in-hor-right 6s ease-out;
}
</style>

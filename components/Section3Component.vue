<template>
  <div class="carousel">
    <div
      class="carousel__background"
      :style="{ backgroundImage: `url(${activeProjectImage})` }"></div>

    <div class="carousel__body">
      <div class="carousel__slider">
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">AI Generation</h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("aigenerationDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/ai-generation/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/aigeneration.jpg"
                  alt="" />
                <p class="absolute right-[5%] bottom-[5%]">05/2023</p>
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">Tesla Clone</h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("teslaDescribe") }}
                </p>
                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/tesla-clone/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">05/2023</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/tesla.png"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">Mouffette</h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("mouffetteDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/mouffette/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">05/2023</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/mouffette.svg"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">France en transe</h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("franceentranseDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/disco-groove/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">04/2023</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/franceEnTranse.jpg"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">Cinémathis</h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("cinemathisDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/my-api-project/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">03/2023</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/cinemathis.jpg"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">
                  Neuilly-le-Brignon
                </h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("mairieDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/site-mairie/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">02/2023</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/mairie.jpg"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">
                  Role-Playing-Groubi
                </h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("rpgroubiDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://role-playing-groubi.netlify.app/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">01/2023</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/rpg.jpg"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">Kasa</h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("kasaDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/projet-7-ocr/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">12/2022</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/kasa.png"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">Piiiquante</h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("piquanteDescribe") }}
                </p>
                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://github.com/MathisPastreNelson/Projet-6-OCR/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">10/2022</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/flame.svg"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">Kanap</h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("kasaDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/Projet-5-OCR/front/html/index.html">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">09/2022</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/kanap.png"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">La panthère</h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("panthereDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/Projet-4-OCR/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">08/2022</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/panthere.png"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <h3 class="font-semibold text-2xl Cinzel">Oh My Food</h3>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("ohmyfoodDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/Projet-3-OCR/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">08/2022</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/ohmyfood.svg"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <div class="flex justify-center items-center">
                  <h3 class="font-semibold text-2xl Cinzel">Booki</h3>
                </div>
                <p
                  class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                  {{ $t("bookiDescribe") }}
                </p>

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/Projet-2-OCR/">
                  <Button
                    class="visitButton mt-4 font-black text-xl rounded-sm"
                    :svgPath="`_nuxt/assets/images/items/visit.svg`"
                    :iconPosition="'right'"
                    :buttonText="$t('visitButton')" />
                </a>
                <p class="absolute right-[5%] bottom-[5%]">07/2022</p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounce max-w-110px max-sm:max-w-80px max-h-7vh rounded-md"
                  src="~/assets/images/projects/logos/Booki.png"
                  alt="" />
              </div>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
        <!-- ... Autres éléments carousel__slider__item ... -->
      </div>
    </div>

    <div class="carousel__buttons_box">
      <!-- Boutons controlant le carroussel -->
      <div class="data-container carousel__buttons_box">
        <span class="btn-left carousel__buttons carousel__prev mr-3">
          <img src="../assets/images/items/leftArrow.svg" alt="" srcset="" />
        </span>
        <span class="btn carousel__buttons carousel__next ml-3">
          <img src="../assets/images/items/rightArrow.svg" alt="" srcset="" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import aigenerationImage from "../assets/images/projects/aigeneration.jpg";
import teslaImage from "../assets/images/projects/tesla.jpg";
import mouffetteImage from "../assets/images/projects/mouffette.jpg";
import franceentranseImage from "../assets/images/projects/franceentranse.jpg";
import cinemathisImage from "../assets/images/projects/cinemathis.jpg";
import mairieImage from "../assets/images/projects/mairie.jpg";
import rpgroubiImage from "../assets/images/projects/rpgroubi.jpg";
import kasaImage from "../assets/images/projects/kasa.jpg";
import piquanteImage from "../assets/images/projects/piquante.jpg";
import kanapImage from "../assets/images/projects/kanap.jpg";
import panthereImage from "../assets/images/projects/panthere.jpg";
import ohmyfoodImage from "../assets/images/projects/ohmyfood.jpg";
import bookiImage from "../assets/images/projects/booki.jpg";
export default {
  data() {
    return {
      activeProjectImage: aigenerationImage,
    };
  },
  mounted() {
    const imageURLs = [
      aigenerationImage,
      teslaImage,
      mouffetteImage,
      franceentranseImage,
      cinemathisImage,
      mairieImage,
      rpgroubiImage,
      kasaImage,
      piquanteImage,
      kanapImage,
      panthereImage,
      ohmyfoodImage,
      bookiImage,
      // Ajoutez les URL des autres images ici
    ];

    (function () {
      const carousel = document.getElementsByClassName("carousel")[0];
      const slider = carousel.getElementsByClassName("carousel__slider")[0];
      const items = carousel.getElementsByClassName("carousel__slider__item");
      const prevBtn = carousel.getElementsByClassName("carousel__prev")[0];
      const nextBtn = carousel.getElementsByClassName("carousel__next")[0];

      let width,
        height,
        totalWidth,
        margin = 20,
        currIndex = 0;

      function init() {
        resize();
        move(1);
        bindEvents();
      }

      function resize() {
        width = Math.max(window.innerWidth * 0.3, 300);
        height = window.innerHeight * 0.55;
        totalWidth = width * items.length;

        slider.style.width = totalWidth + "px";

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          item.style.width = width - margin * 2 + "px";
          item.style.height = height + "px";
        }
      }

      function move(index) {
        if (index < 1) index = items.length;
        if (index > items.length) index = 1;
        currIndex = index;

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const box = item.getElementsByClassName("item__3d-frame")[0];

          if (i === index - 1) {
            item.classList.add("carousel__slider__item--active");
            carousel.getElementsByClassName(
              "carousel__background"
            )[0].style.backgroundImage = `url(${imageURLs[i]})`;
            carousel.style.backgroundSize = "cover";
            carousel.style.backgroundPosition = "center";
            carousel.style.backgroundRepeat = "no-repeat";
            box.style.transform = "perspective(1200px)";
          } else {
            item.classList.remove("carousel__slider__item--active");
            box.style.transform =
              "perspective(1200px) rotateY(" +
              (i < index - 1 ? 40 : -40) +
              "deg)";
          }
        }

        slider.style.transform =
          "translate3d(" +
          (index * -width + width / 2 + window.innerWidth / 2) +
          "px, 0, 0)";
      }

      function prev() {
        move(--currIndex);
      }

      function next() {
        move(++currIndex);
      }

      function bindEvents() {
        window.onresize = resize;
        prevBtn.addEventListener("click", prev);
        nextBtn.addEventListener("click", next);

        window.addEventListener("keydown", (event) => {
          if (event.key === "ArrowLeft") {
            prev();
          } else if (event.key === "ArrowRight") {
            next();
          }
        });
      }

      init();
    })();
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90dvh;
  box-sizing: border-box;
}

.carousel__background {
  position: absolute;

  width: 100%;
  height: 89dvh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transition: 500ms;
  filter: blur(4px) brightness(50%); /* Apply the blur effect here */
  z-index: -1; /* Set a lower z-index to place it behind the carousel content */
}

.carousel__buttons_box {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.carousel__prev,
.carousel__next {
  bottom: 0;
  transition: transform 0.25s ease;
  cursor: pointer;
}

.carousel__prev:hover,
.carousel__next:hover {
  transform: scale(1.25);
  filter: brightness(1.5);
  box-shadow: 0px 0px 40px 0px rgba(0, 139, 163, 0.76);
}

.carousel__body {
  width: 100%;
}
.carousel__body .carousel__slider {
  position: relative;
  transition: transform 1s ease-in-out;
}
.carousel__body .carousel__slider__item {
  position: relative;
  display: block;
  float: left;
  box-sizing: border-box;
  margin-left: 20px;
  margin-right: 20px;
}
.carousel__body .carousel__slider__item .item__3d-frame {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.carousel__body .carousel__slider__item .item__3d-frame:after {
  content: "";
  position: absolute;

  width: 100%;

  transform: rotateX(90deg) translate3d(0px, -20px, 0px);
  opacity: 0.85;
}
.carousel__body .carousel__slider__item .item__3d-frame__box {
  display: flex;
  align-items: center;
  vertical-align: middle;
  flex-direction: column;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  border-width: 1px;
  border-style: solid;
}
.carousel__body .carousel__slider__item .item__3d-frame__box h3 {
  width: 100%;
}
.carousel__body .carousel__slider__item .item__3d-frame__box--right,
.carousel__body .carousel__slider__item .item__3d-frame__box--left {
  top: 0;
  width: 40px;
  backface-visibility: hidden;
}
.carousel__body .carousel__slider__item .item__3d-frame__box--left {
  left: 0;
  border-left-width: 2px;
  transform: translate3d(1px, 0, -40px) rotateY(-90deg);
  transform-origin: 0%;
}
.carousel__body .carousel__slider__item .item__3d-frame__box--right {
  right: 0;
  border-right-width: 2px;
  transform: translate3d(-1px, 0, -40px) rotateY(90deg);
  transform-origin: 100%;
}
</style>

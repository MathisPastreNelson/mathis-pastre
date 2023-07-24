<template>
  <div class="carousel">
    <div
      class="carousel__background zoom"
      :style="{ backgroundImage: `url(${activeProjectImage})` }"></div>

    <div class="carousel__body">
      <div class="carousel__slider">
        <div class="carousel__slider__item">
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <div
                class="h-full flex justify-evenly align-middle flex-col px-3 cursor-default">
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">
                    AI Generation
                  </h3></Animate
                >
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("aigenerationDescribe") }}
                  </p></Animate
                >

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/ai-generation/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>

                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
                  src="~/assets/images/projects/logos/aigeneration.webp"
                  alt="" />

                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp">
                    07/2023
                  </Animate>
                </p>
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">
                    Tesla Clone
                  </h3></Animate
                >
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("teslaDescribe") }}
                  </p></Animate
                >
                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/tesla-clone/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >06/2023</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
                  src="~/assets/images/projects/logos/tesla.webp"
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">
                    Mouffette
                  </h3></Animate
                >
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("mouffetteDescribe") }}
                  </p></Animate
                >

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/mouffette/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >05/2023</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">
                    France en transe
                  </h3></Animate
                >
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("franceentranseDescribe") }}
                  </p></Animate
                >

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/disco-groove/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >04/2023</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
                  src="~/assets/images/projects/logos/franceEnTranse.webp"
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">Cinémathis</h3>
                </Animate>
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("cinemathisDescribe") }}
                  </p></Animate
                >

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/my-api-project/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >03/2023</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
                  src="~/assets/images/projects/logos/cinemathis.webp"
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">
                    Neuilly-le-Brignon
                  </h3>
                </Animate>
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("mairieDescribe") }}
                  </p></Animate
                >

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/site-mairie/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >02/2023</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
                  src="~/assets/images/projects/logos/mairie.webp"
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">
                    Role-Playing-Groubi
                  </h3>
                </Animate>
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("rpgroubiDescribe") }}
                  </p></Animate
                >

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://role-playing-groubi.netlify.app/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >01/2023</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
                  src="~/assets/images/projects/logos/rpg.webp"
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">Kasa</h3></Animate
                >
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("kasaDescribe") }}
                  </p></Animate
                >

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/projet-7-ocr/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >12/2022</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
                  src="~/assets/images/projects/logos/kasa.webp"
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">
                    Piiiquante
                  </h3></Animate
                >
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("piquanteDescribe") }}
                  </p></Animate
                >
                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://github.com/MathisPastreNelson/Projet-6-OCR/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >10/2022</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">Kanap</h3></Animate
                >
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("kasaDescribe") }}
                  </p></Animate
                >

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/Projet-5-OCR/front/html/index.html">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >09/2022</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
                  src="~/assets/images/projects/logos/kanap.webp"
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">
                    La panthère
                  </h3></Animate
                >
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("panthereDescribe") }}
                  </p></Animate
                >

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/Projet-4-OCR/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >08/2022</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
                  src="~/assets/images/projects/logos/panthere.webp"
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
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInDown">
                  <h3 class="font-semibold text-2xl Cinzel">
                    Oh My Food
                  </h3></Animate
                >
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("ohmyfoodDescribe") }}
                  </p></Animate
                >

                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/Projet-3-OCR/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>

                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp"
                    >08/2022</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
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
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInDown">
                    <h3 class="font-semibold text-2xl Cinzel">
                      Booki
                    </h3></Animate
                  >
                </div>
                <Animate
                  delay=""
                  duration=""
                  repeat=""
                  v-bind:scroll="true"
                  animation="animate__fadeInUp">
                  <p
                    class="text-lg leading-6 max-sm:leading-5 max-sm:text-base overflow-ellipsis overflow-hidden">
                    {{ $t("bookiDescribe") }}
                  </p>
                </Animate>
                <a
                  class="mx-auto"
                  target="_blank"
                  href="https://mathispastrenelson.github.io/Projet-2-OCR/">
                  <button
                    class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
                    <span class="font-semibold"> {{ $t("visitButton") }}</span>
                    <img
                      class="ml-3 w-5 svg-icon"
                      src="../assets/images/items/visit.svg"
                      alt="SVG Icon" />
                  </button>
                </a>
                <p class="absolute right-[5%] bottom-[5%]">
                  <Animate
                    delay=""
                    duration=""
                    repeat=""
                    v-bind:scroll="true"
                    animation="animate__fadeInUp">
                    07/2022</Animate
                  >
                </p>
                <img
                  class="absolute left-[5%] bottom-[5%] bounceClassic rounded-md floatProjectIcon"
                  src="~/assets/images/projects/logos/Booki.webp"
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

    <Animate
      delay=""
      duration=""
      repeat=""
      v-bind:scroll="true"
      animation="animate__fadeInUp 	">
      <div class="carousel__buttons_box relative">
        <!-- Boutons controlant le carroussel -->
        <div class="data-container carousel__buttons_box">
          <span class="btn-left carousel__buttons carousel__prev mr-3">
            <img src="../assets/images/items/leftArrow.svg" alt="" srcset="" />
          </span>
          <span class="btn carousel__buttons carousel__next ml-3">
            <img
              src="../assets/images/items/rightArrow.svg "
              alt=""
              srcset="" />
          </span>
        </div>
      </div>
    </Animate>

    <div class="current-slide-index absolute font-bold">
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
      <span class="spanIndex"></span>
    </div>
  </div>
</template>

<script>
import aigenerationImage from "../assets/images/projects/aigeneration.webp";
import teslaImage from "../assets/images/projects/tesla.webp";
import mouffetteImage from "../assets/images/projects/mouffette.webp";
import franceentranseImage from "../assets/images/projects/franceentranse.webp";
import cinemathisImage from "../assets/images/projects/cinemathis.webp";
import mairieImage from "../assets/images/projects/mairie.webp";
import rpgroubiImage from "../assets/images/projects/rpgroubi.webp";
import kasaImage from "../assets/images/projects/kasa.webp";
import piquanteImage from "../assets/images/projects/piquante.webp";
import kanapImage from "../assets/images/projects/kanap.webp";
import panthereImage from "../assets/images/projects/panthere.webp";
import ohmyfoodImage from "../assets/images/projects/ohmyfood.webp";
import bookiImage from "../assets/images/projects/booki.webp";
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

        // Add the "activeDiv" class to the corresponding span
        const currentSlideIndexDiv = document.querySelector(
          ".current-slide-index"
        );
        const spanElements = currentSlideIndexDiv.getElementsByTagName("span");
        for (let j = 0; j < spanElements.length; j++) {
          if (j === index - 1) {
            spanElements[j].classList.add("activeDiv");
          } else {
            spanElements[j].classList.remove("activeDiv");
          }
        }
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
.floatProjectIcon {
  width: 15%;

  max-width: 90px;
  min-width: 40px;
  max-height: 70px;
}
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

  width: 120%;
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

.current-slide-index {
  display: flex;
  opacity: 0.8;
  bottom: 0dvh;
}

.spanIndex {
  width: 10px;
  height: 15px;
  margin: 0 2px;
  transition: 300ms;
  border-radius: 2px 2px 0 0;
}

.activeDiv {
  transform: scaleY(3.5);
}
</style>

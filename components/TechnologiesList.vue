<template>
  <Animate
    delay=""
    duration=""
    repeat=""
    v-bind:scroll="true"
    animation="animate__fadeInUp 	">
    <div
      class="tooltip_container p-1 flex items-center justify-evenly w-full mx-auto">
      <button
        class="techonologiesIcon opacity-60 hover:opacity-100 duration-300">
        <img src="../assets/images/items/icons/html.svg" alt="HTML5" />
        <span class="tooltip shadow-shadow1 rounded-md py-1 px-4 font-black"
          >HTML</span
        >
      </button>
      <button
        class="techonologiesIcon opacity-60 hover:opacity-100 duration-300">
        <img src="../assets/images/items/icons/css.svg" alt="CSS3" />
        <span class="tooltip shadow-shadow1 rounded-md py-1 px-4 font-black"
          >CSS</span
        >
      </button>
      <button
        class="techonologiesIcon opacity-60 hover:opacity-100 duration-300">
        <img
          src="../assets/images/items/icons/javascript.svg"
          alt="JavaScript" />
        <span class="tooltip shadow-shadow1 rounded-md py-1 px-4 font-black"
          >Javascript
        </span>
      </button>
      <button
        class="techonologiesIcon opacity-60 hover:opacity-100 duration-300">
        <img src="../assets/images/items/icons/react.svg" alt="React" />
        <span class="tooltip shadow-shadow1 rounded-md py-1 px-4 font-black"
          >React</span
        >
      </button>
      <button
        class="techonologiesIcon opacity-60 hover:opacity-100 duration-300">
        <img src="../assets/images/items/icons/vue.svg" alt="VueJs" />
        <span class="tooltip shadow-shadow1 rounded-md py-1 px-4 font-black"
          >VueJS</span
        >
      </button>
      <button
        class="techonologiesIcon opacity-60 hover:opacity-100 duration-300">
        <img src="../assets/images/items/icons/wordpress.svg" alt="WordPress" />
        <span class="tooltip shadow-shadow1 rounded-md py-1 px-4 font-black"
          >WordPress</span
        >
      </button>
    </div>
  </Animate>
</template>

<style scoped>
/* // Tooltips */
.techonologiesIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  transition: transform 300ms, opacity 0.15s ease-in-out;
  outline: none;
  appearance: none;

  &:hover {
    transform: scale(1.2);
    span {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  span {
    position: absolute;
    left: 50%;
    bottom: 100%;
    opacity: 0;
    white-space: nowrap;
    transform: translate(-50%, 1em);
    transition: all 0.15s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      width: 0;
      height: 0;
      border: 0.5em solid transparent;
      border-top-color: rgba(0, 0, 0, 0.75);
      transform: translate(-50%, 0);
    }
  }
}
/* Les animations */
.techonologiesIcon::after {
  content: "●";
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.8em;
  color: rgba(80, 92, 30, 0.61);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  height: 100%;
  width: 0;
  transform-origin: left;
  animation: 6s linear infinite reverse orbit-pullquote;
  transition: 0.4s ease-out;
  opacity: 0;
}
.techonologiesIcon:hover::after {
  width: 70%;
  opacity: 1;
}
.techonologiesIcon::before {
  content: "●";
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2em;
  color: rgba(52, 176, 180, 0.534);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  height: 100%;
  width: 0;
  transform-origin: left;
  animation: 6s linear infinite orbit-pullquote;
  transition: 0.8s ease-out;
  opacity: 0;
}
.techonologiesIcon:hover::before {
  width: 70%;
  opacity: 1;
}
</style>

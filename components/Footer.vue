<template>
  <footer
    class="min-h-30px footerHeight flex items-center justify-end duration-300 text-xl px-10 max-sm:px-2">
    <nav class="flex justify-center items-center">
      <a
        class="flex footerButton items-center text-sm justify-center font-semibold px-3 duration-300 hover:scale-x-110 shadow-shadow1 hover:bg-slate-500 hover:brightness-125 rounded hover:rounded-xl footerElements"
        href="mailto:mathis.pastre@outlook.com">
        <img
          class="pr-2"
          src="../assets//images/items/MailIcon.svg"
          alt="Mail" />
        Mail
      </a>
      <a
        class="flex footerButton items-center text-sm justify-center font-semibold max-sm:mx-1 mx-4 px-3 duration-300 hover:scale-x-110 shadow-shadow1 hover:bg-slate-500 hover:brightness-125 rounded hover:rounded-xl footerElements"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/mathis-pastre/">
        <img
          class="pr-2"
          src="../assets//images/items/Linkedin.svg"
          alt="Linkedin" />
        Linkedin
      </a>
      <a
        class="flex footerButton items-center text-sm justify-center font-semibold px-3 duration-300 hover:scale-x-110 shadow-shadow1 hover:bg-slate-500 hover:brightness-125 rounded hover:rounded-xl footerElements"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/MathisPastreNelson">
        <img
          class="pr-2"
          src="../assets//images/items/GithubIcon.svg"
          alt="github" />
        Github
      </a>
    </nav>
  </footer>
</template>

<style scoped>
.footerHeight {
  height: 7.5dvh;
}

.footerButton {
  height: 5dvh;
  min-height: 28px;
  max-height: 36px;
}
</style>

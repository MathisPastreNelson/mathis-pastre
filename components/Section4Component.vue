<template>
  <div class="section4BackgroundTexture"></div>
  <!-- goutte d'eau -->
  <div class="section4DropWater"></div>
  <div class="section4DropWater2"></div>
  <div class="section4BackgroundStalagmite"></div>
  <div class="section4BackgroundStalagmite2"></div>
  <form
    class="section4Form flex justify-center items-center flex-col my-4 px-6 py-4 duration-300"
    @submit.prevent="handleSubmit">
    <Animate
      delay=""
      duration=""
      repeat=""
      v-bind:scroll="true"
      animation="animate__fadeInDown 	">
      <h3 class="text-4xl max-sm:text-3xl text-center font-semibold Cinzel">
        {{ $t("contactTitle") }}
      </h3>
      <h4 class="text-4xl max-sm:text-3xl text-center font-semibold Cinzel">
        {{ $t("contactSubTitle") }}
      </h4>
    </Animate>
    <div class="divider m-4"></div>
    <label
      class="text-2xl max-sm:text-xl w-full text-left pb-2 ml-2"
      for="email">
      <Animate
        delay=""
        duration=""
        repeat=""
        v-bind:scroll="true"
        animation="animate__fadeInRight 	">
        Email
      </Animate>
    </label>
    <input
      id="email"
      class="w-full p-2 outline-none inputContact font-bold duration-300"
      type="email"
      name="email"
      v-model="email"
      required />
    <label
      class="text-2xl max-sm:text-xl w-full ml-2 py-2 text-left"
      for="message">
      <Animate
        delay=""
        duration=""
        repeat=""
        v-bind:scroll="true"
        animation="animate__fadeInRight 	">
        Message
      </Animate>
    </label>
    <textarea
      id="message"
      class="w-full h-28 p-2 outline-none inputContact max-h-80 font-bold duration-300"
      name="message"
      v-model="message"
      required></textarea>
    <Animate
      delay=""
      duration=""
      repeat=""
      v-bind:scroll="true"
      animation="animate__fadeInUp 	">
      <button
        class="visitButton mt-3 flex items-center justify-evenly py-2 px-4 rounded-xl buttonEffect relative duration-300">
        <span class="font-semibold"> {{ $t("contactSend") }}</span>
        <img
          class="ml-3 svg-icon w-4"
          src="../assets/images/items/sendMessage.svg"
          alt="SVG Icon" />
      </button>
    </Animate>
  </form>
</template>

<style scoped>
label {
  cursor: url("../assets/cursor/write.svg"), default;
}

input:hover,
textarea:hover {
  box-shadow: 0px 0px 40px 0px rgba(0, 139, 163, 0.76);
  cursor: url("../assets/cursor/write.svg"), default;
}
</style>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        alert("Une adresse e-mail valide est requise.");
        return;
      }

      if (this.message.length < 30) {
        alert("Le message doit contenir au moins 30 caractères.");
        return;
      }

      const data = {
        email: this.email,
        message: this.message,
      };
      fetch("https://formspree.io/f/xayzplww", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(() => {
          alert("Votre message a bien été envoyé !");
          this.email = "";
          this.message = "";
        })
        .catch((error) => alert(error.message));
    },
  },
};
</script>

<template>
  <div class="section4BackgroundTexture"></div>
  <form
    class="section4Form flex justify-center items-center flex-col my-4 px-6 py-4 duration-300"
    @submit.prevent="handleSubmit">
    <h3
      class="text-4xl max-sm:text-3xl text-center font-semibold Cinzel cursor-default">
      {{ $t("contactTitle") }}
    </h3>
    <h4
      class="text-4xl max-sm:text-3xl text-center font-semibold Cinzel cursor-default">
      {{ $t("contactSubTitle") }}
    </h4>
    <div class="divider m-4"></div>
    <label
      class="text-2xl max-sm:text-xl w-full text-left pb-2 ml-2"
      for="email">
      Email
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
      Message
    </label>
    <textarea
      id="message"
      class="w-full h-28 p-2 outline-none inputContact max-h-80 font-bold duration-300"
      name="message"
      v-model="message"
      required></textarea>

    <Button
      type="submit"
      class="visitButton mt-4 font-black text-xl rounded-sm"
      :buttonText="$t('contactSend')" />
  </form>
</template>

<style scoped>
input:hover,
textarea:hover {
  box-shadow: 0px 0px 40px 0px rgba(0, 139, 163, 0.76);
}
</style>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
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

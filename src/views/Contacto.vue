<template>
  <div class="contact">
    <h1>Contáctanos</h1>
    <p>
      Si tienes alguna pregunta, no dudes en comunicarte con nosotros mediante el siguiente formulario.
    </p>
<!--en esta seccion se integra endpoint del formulario para que funcione-->
    <form action="https://formsubmit.co/478b59a40b7d2fcb0613775063de7b6b" method="POST" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre Completo"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo Electrónico"
          required
        />
      </div>

      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Descripción de su mensaje"
          required
        ></textarea>
      </div>

      <!-- Campo oculto para redirigir después del envío -->
      <input type="hidden" name="_next" value="https://tiny-jelly-e57d4b.netlify.app/contact"/>

      <!--No me direccione al recapcha-->
      <input type="hidden" name="_captcha" value="false"/>

      <!-- Botón de envío dinámico -->
      <button type="submit" :disabled="loading">
        {{ loading ? "Enviando..." : "Enviar" }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      loading: false, // Estado para controlar el botón
    };
  },
  methods: {
    handleSubmit(event) {
      this.loading = true;

      // Espera 1.5 segundos para simular carga antes de enviar el formulario
      setTimeout(() => {
        event.target.submit(); // Envía el formulario manualmente
        this.loading = false;
      }, 1500);
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/contact.css";
</style>

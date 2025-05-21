<template>
  <!--boton de whatsapp flotante-->
    <!-- Botón flotante de WhatsApp -->
    <a
      href="https://wa.me/3166132308"
      class="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="@/assets/bank_img/modulos/whatsapp.png"
        alt="Chat en WhatsApp"
      />
    </a>
  <div>
    <!-- Sección de héroe con imagen de portada -->
    <section class="hero">
      <img
        src="@/assets/bank_img/modulos/portada-servicios.jpg"
        alt="Imagen de portada"
        class="hero-image"
      />
      <div class="hero-content">
        <h1>Soluciones Tecnológicas</h1>
        <p>Transformamos tu negocio</p>
        <button @click="scrollToServices">Explora Nuestros Servicios</button>
      </div>
    </section>

    <!-- Sección de Servicios -->
    <div class="services-container" ref="servicesSection">
      <h1 class="services-title">Más Servicios</h1>
      <div class="services-grid">
        <div
          class="services-row"
          v-for="(pair, index) in groupedServices"
          :key="index"
        >
          <router-link
            v-for="service in pair"
            :key="service.id"
            :to="service.route"
            class="service-card"
          >
            <img
              :src="require(`@/assets/bank_img/modulos/${service.image}`)"
              :alt="'Imagen de ' + service.name"
              class="service-image"
            />
            <div class="service-info">
              <h2 class="service-name">{{ service.name }}</h2>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      services: [
        {
          id: 1,
          name: "Cableado Estructurado",
          description: "Infraestructura cableado estructurado.",
          image: "cableado.jpg",
          route: "/ServicesPage5",
        },
        {
          id: 2,
          name: "Mantenimiento Preventivo y Correctivo",
          description: "Asesoramiento en tecnologías de la información.",
          image: "mantenimiento.jpg",
          route: "/ServicesPage6",
        },
        {
          id: 3,
          name: "Venta equipos de computo",
          description: "Conecta los componentes de tu organización en un solo entorno.",
          image: "ventaequipos.jpg",
          route: "/ServicesPage7",
        },
        {
          id: 4,
          name: "Instalación CCTV",
          description: "Incluye Circuito Cerrado de Televisión.",
          image: "cctv.jpg",
          route: "/ServicesPage8",
        },
      ],
    };
  },
  computed: {
    groupedServices() {
      const pairs = [];
      for (let i = 0; i < this.services.length; i += 2) {
        pairs.push(this.services.slice(i, i + 2));
      }
      return pairs;
    },
  },
  methods: {
    scrollToServices() {
      this.$refs.servicesSection.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
@import "@/assets/css/services.css"; /* Importa el archivo CSS */
</style>

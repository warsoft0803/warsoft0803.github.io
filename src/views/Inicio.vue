<!--vista principal del sitio donde se despliega todo-->

<template>
  <div class="home">
    <!-- Sección de héroe -->
    <header class="hero">
      <div class="hero-background">
        <h1>Bienvenido a Tecsion Group</h1>
        <p>Soluciones tecnológicas personalizadas diseñadas
           específicamente para impulsar el crecimiento y la eficiencia de tu negocio.
        </p>
      </div>
    </header>
    
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
  </div>

    <!-- Sección "¿Warsoft?" -->
    <section class="about">
      <h2>¿Tecsion Group?</h2>
      <p>
        Somos una empresa dedicada a brindar soluciones tecnológicas
        innovadoras. Nuestro equipo de expertos está listo para ayudarte a
        transformar tu negocio y llevarlo al siguiente nivel.
      </p>
    </section>
    
    <!-- Vista previa de servicios -->
    <section class="services-preview">
      <h2>Servicios</h2>
      <div class="service-list">
        <!-- Itera sobre los servicios y crea una tarjeta por cada uno -->
        <div class="service-card" v-for="service in services" :key="service.id">
          <!-- Enlace a la vista específica del servicio -->
          <router-link :to="service.route">
            <img
              :src="require(`@/assets/bank_img/modulos/${service.image}`)"
              :alt="`Imagen de ${service.title}`"
            />
          </router-link>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>
<!-- Partners Aliados -->
<section class="partners-section">
  <div class="partners-container">
    <h2>Partners Aliados</h2>
    <p class="partners-description">
      Aliados estratégicos en soluciones de tecnológica de la informacion.
    </p>
    <div class="partners-slider">
      <div class="slide-track">
        <div class="slide"><img src="@/assets/bank_img/modulos/partners/microsoft.jpg" alt="microsoft" /></div>
        <div class="slide"><img src="@/assets/bank_img/modulos/partners/google.jpg" alt="google" /></div>
        <div class="slide"><img src="@/assets/bank_img/modulos/partners/acronis.jpg" alt="acronis" /></div>
        <div class="slide"><img src="@/assets/bank_img/modulos/partners/kaspersky.jpg" alt="kaspersky" /></div>

        <!-- Copia para efecto infinito -->
        <div class="slide"><img src="@/assets/bank_img/modulos/partners/microsoft.jpg" alt="microsoft" /></div>
        <div class="slide"><img src="@/assets/bank_img/modulos/partners/google.jpg" alt="google" /></div>
        <div class="slide"><img src="@/assets/bank_img/modulos/partners/acronis.jpg" alt="acronis" /></div>
        <div class="slide"><img src="@/assets/bank_img/modulos/partners/kaspersky.jpg" alt="kaspersky" /></div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Sitios Web",
          description: "Creación de sitios web personalizados y optimizados.",
          image: "develop.jpg",
          route: "/SitiosWeb", // Ruta para el servicio Sitios Web
        },
        {
          id: 2,
          title: "Consultoría IT",
          description: "Asesoramiento en tecnologías de la información.",
          image: "consultoria.jpg",
          route: "/Consultoria", // Ruta para Consultoría IT
        },
        {
          id: 3,
          title: "Ciberseguridad",
          description: "Protege tus aplicaciones, sistemas críticos y datos de posibles amenazas digitales.",
          image: "ciberseguridad.jpg",
          route: "/Ciberseguridad", // Ruta para Ciberseguridad
        },
        {
          id: 4,
          title: "Infraestructura",
          description: "Conecta los componentes de tu organización en un solo entorno.",
          image: "infraestructura.jpg",
          route: "/Infraestructura", // Ruta para Infraestructura
        },
      ],
    };
  },
};
</script>

<style>
@import "@/assets/css/home.css"; /* Importa el archivo CSS */
</style>

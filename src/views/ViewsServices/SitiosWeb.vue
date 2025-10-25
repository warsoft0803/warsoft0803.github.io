<!--Servicio de desarrollo de web-->

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

  <!-- Sección de héroe con imagen de portada -->
  <section class="hero">
    <img
      src="@/assets/bank_img/servicios/diseñoweb.jpg"
      alt="Diseño Web Profesional"
      class="hero-image"
    />
    <div class="hero-content">
      <h1>Diseño y desarrollo de sitios web</h1>
      <p>
        Desarrollamos aplicaciones web con tecnologías modernas.
      </p>
    </div>
  </section>

  <!-- Sección de Servicios -->
  <section class="about-section">
    <!-- Servicios -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Diseño Web</h2>
        <p>
          Ofrecemos servicios integrales en diseño y sitios web, enfocados
          en crear interfaces modernas, rápidas y optimizadas. Nos especializamos en
          tecnologías que potencian la experiencia del usuario y el rendimiento
          de tu negocio.
        </p>
  
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/tecnologia.jpg"
          alt="Tecnologías modernas"
        />
      </div>
    </div>

    <!-- Misión -->
    <div class="content-wrapper reverse">
      <div class="text">
        <h2>Nuestra Misión</h2>
        <p>
          Transformar la visión de nuestros clientes en proyectos web
          innovadores. Ofrecemos soluciones personalizadas que combinan
          creatividad, tecnología de vanguardia y un enfoque centrado en el
          usuario para maximizar el impacto digital de tu negocio.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/desarrollo1.jpg"
          alt="Misión en diseño web"
        />
      </div>
    </div>

    <!-- Visión -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Nuestra Visión</h2>
        <p>
          Ser líderes en el desarrollo web, reconocidos por nuestra capacidad de
          innovar y crear soluciones que marquen la diferencia. Nuestro objetivo
          es apoyar a las empresas en su camino hacia la digitalización con
          herramientas y tecnologías adaptadas a sus necesidades.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/desarrollo2.jpg"
          alt="Visión de futuro en desarrollo web"
        />
      </div>
    </div>

   <!-- Valores -->
        <div class="content-wrapper">
        <div class="text">
          <h2>Compromiso y Calidad</h2>
          <p>
            <strong>Calidad:</strong> Usamos materiales certificados y marcas líderes.<br />
            <strong>Seguridad:</strong> Instalaciones seguras, limpias y organizadas.<br />
            <strong>Compromiso:</strong> Garantía por escrito en todos nuestros trabajos.
          </p>
          <a href="https://wa.me/3166132308" target="_blank" rel="noopener noreferrer">
            <button>Solicita tu diagnóstico gratuito</button>
          </a>
        </div>
      </div>
  </section>
  <!-- Partners Aliados -->
<section class="partners-section">
  <div class="partners-container">
    <h2>Tecnologías de Vanguardia</h2>
    <p class="partners-description">
      Implementamos las soluciones tecnológicas más alta demanda
    </p>
    <div class="partners-logos">
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/tecnologias/vue.png" alt="vue" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/tecnologias/js.png" alt="js" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/tecnologias/html.png" alt="vue" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/tecnologias/css.png" alt="vue" />
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "ServicesPage1.vue",
};
</script>

<style>
@import "@/assets/css_services/diseño_web.css"; /* Importa el archivo CSS */
</style>

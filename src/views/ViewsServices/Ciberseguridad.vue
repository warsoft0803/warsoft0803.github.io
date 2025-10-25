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
    
  <!-- Sección de héroe con imagen de portada ciberseguridad -->

  <section class="hero">
    <img
      src="@/assets/bank_img/servicios/ciberseguridad/ciberseguridad4.jpg"
      alt="Ciberseguridad Avanzada"
      class="hero-image"
    />
    <div class="hero-content">
      <h1>Soluciones en Ciberseguridad</h1>
      <p>
        Protegemos tus datos y fortalecemos la seguridad de tu infraestructura
        tecnológica.
      </p>
    </div>
  </section>

  <!-- Sección de Servicios -->
  <section class="about-section">
    <!-- Servicios -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Nuestras Soluciones en Ciberseguridad</h2>
        <p>
          Ofrecemos servicios especializados en protección de datos, prevención
          de ataques cibernéticos y cumplimiento de normativas de seguridad.
          Garantizamos un entorno digital seguro para tu negocio.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/ciberseguridad/ciberseguridad1.jpg"
          alt="Protección avanzada de datos"
        />
      </div>
    </div>

    <!-- Alcance -->
    <div class="content-wrapper reverse">
      <div class="text">
        <h2>Alcance</h2>
        <p>
          Brindamos soluciones integrales en ciberseguridad, desde auditorías de
          seguridad hasta implementación de sistemas avanzados para mitigar
          riesgos. Nuestro objetivo es proteger la continuidad operativa de tu
          empresa.
        </p>
      </div>
      <div class="image">
        <img
         src="@/assets/bank_img/servicios/ciberseguridad/ciberseguridad2.jpg"
          alt="Auditoría de ciberseguridad"
        />
      </div>
    </div>

    <!-- Proyecciones -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Nuestra Visión</h2>
        <p>
          Ser líderes en soluciones de ciberseguridad, reconocidos por nuestra
          capacidad de anticiparnos a las amenazas del futuro y asegurar la
          protección total de nuestros clientes.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/ciberseguridad/ciberseguridad3.jpg"
          alt="Visión de futuro en ciberseguridad"
        />
      </div>
    </div>

    <!-- Valores -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Nuestros Valores</h2>
        <p>
          <strong>Innovación:</strong> Usamos tecnologías de vanguardia para
          garantizar la seguridad.<br />
          <strong>Confianza:</strong> Protegemos lo más valioso de tu
          empresa.<br />
          <strong>Excelencia:</strong> Ofrecemos soluciones personalizadas y de
          calidad superior.
        </p>
        <a href="https://wa.me/3166132308" target="_blank" rel="noopener noreferrer">
          <button>Agenda una consultoría</button>
        </a>
      </div>
    </div>
  </section>
    <!-- Partners Aliados -->
<section class="partners-section">
  <div class="partners-container">
    <h2>Tecnologías Integradas</h2>
    <p class="partners-description">
      Integramos soluciones reconocidas globalmente para mejorar nuestros servicios.
    </p>
    <div class="partners-logos">
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/ciberseguridad/AVG.png" alt="AVG" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/ciberseguridad/debian.png" alt="debian" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/ciberseguridad/mcafee.png" alt="mcafee" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/ciberseguridad/redhat.png" alt="redhat" />
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "CiberseguridadPage.vue",
};
</script>

<style>
@import "@/assets/css_services/ciberseguridad.css"; /* Importa el archivo CSS */
</style>

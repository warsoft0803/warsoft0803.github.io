<template>
  <!-- Sección de héroe con imagen de portada -->
  <section class="hero">
    <img
      src="@/assets/bank_img/servicios/infraestructura/Infraestructura22.jpg"
      alt="Infraestructura Segura"
      class="hero-image"
    />
    <div class="hero-content">
      <h1>Fortalece tu Infraestructura Tecnológica</h1>
      <p>
        Diseñamos e implementamos soluciones para proteger tus sistemas críticos y garantizar la continuidad operativa.
      </p>
    </div>
  </section>

  <!-- Sección de Servicios -->
  <section class="about-section">
    <!-- Soluciones -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Nuestras Soluciones</h2>
        <p>
          Especializados en protección de redes, seguridad de servidores, mitigación de ataques DDoS y cumplimiento de normativas como ISO/IEC 27001. 
          Adaptamos nuestras soluciones a la infraestructura tecnológica de tu empresa.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/infraestructura/Infraestructura11.jpg"
          alt="Infraestructura tecnológica segura"
        />
      </div>
    </div>

    <!-- Auditorías y Análisis -->
    <div class="content-wrapper reverse">
      <div class="text">
        <h2>Auditorías y Mitigación de Riesgos</h2>
        <p>
          Realizamos auditorías completas en tu infraestructura tecnológica, detectamos vulnerabilidades y diseñamos estrategias de mitigación usando tecnologías de última generación.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/infraestructura/Infraestructura33.jpg"
          alt="Auditoría de sistemas"
        />
      </div>
    </div>

    <!-- Proyecciones Tecnológicas -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Proyecciones y Escalabilidad</h2>
        <p>
          Ayudamos a las empresas a diseñar infraestructuras escalables y resilientes, preparadas para enfrentar amenazas futuras mientras garantizan el rendimiento óptimo de los sistemas.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/infraestructura/Infraestructura44.jpg"
          alt="Infraestructura escalable y segura"
        />
      </div>
    </div>

    <!-- Valores y Compromiso -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Nuestros Valores</h2>
        <p>
          <strong>Integridad:</strong> Diseñamos soluciones transparentes y confiables.<br />
          <strong>Resiliencia:</strong> Preparamos tu infraestructura ante cualquier amenaza.<br />
          <strong>Innovación:</strong> Incorporamos tecnologías emergentes tomar la mejor desicion para tu compañia.
        </p>
        <a href="https://google.com" target="_blank">
          <button>Solicita una evaluación de tu infraestructura</button>
        </a>
      </div>
    </div>
  </section>

   <!-- Partners Aliados -->
   <section class="partners-section">
      <div class="partners-container">
        <h2>Partners Aliados</h2>
        <p class="partners-description">
          Trabajamos con marcas líderes para garantizar la calidad del mantenimiento de tus equipos.
        </p>
        <div class="partners-logos">
          <img src="@/assets/bank_img/servicios/cableado/partner/cisco.png" alt="Cisco" />
          <img src="@/assets/bank_img/servicios/cableado/partner/cisco.png" alt="HP" />
          <img src="@/assets/bank_img/servicios/cableado/partner/cisco.png" alt="Lenovo" />
          <img src="@/assets/bank_img/servicios/cableado/partner/cisco.png" alt="Dell" />
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "ServicesPage4.vue",
};
</script>

<style>
@import "@/assets/css_services/infraestructura.css"; /* Importa el archivo CSS */
</style>
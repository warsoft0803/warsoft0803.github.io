<!--Vista de consultoria-->

<template>
  <!-- Sección de héroe con imagen de portada -->
  <section class="hero">
    <img
      src="@/assets/bank_img/servicios/consultoria/ConsultoriaIT2.jpg"
      alt="Consultoría IT Profesional"
      class="hero-image"
    />
    <div class="hero-content">
      <h1>Soluciones en Consultoría IT</h1>
      <p>
        Transformamos tus ideas en proyectos tecnológicos exitosos.
      </p>
    </div>
  </section>

  <!-- Sección de Servicios -->
  <section class="about-section">
    <!-- Servicios -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Nuestras Soluciones en Consultoría IT</h2>
        <p>
          Ofrecemos servicios personalizados en planificación estratégica,
          implementación de sistemas, y modernización de infraestructura
          tecnológica. Nos enfocamos en optimizar tus procesos y maximizar
          la rentabilidad de tu negocio.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/consultoria/ConsultoriaIT1.jpg"
          alt="Tecnologías modernas para consultoría IT"
        />
      </div>
    </div>

    <!-- Alcance -->
    <div class="content-wrapper reverse">
      <div class="text">
        <h2>Alcance</h2>
        <p>
          Empoderar a las empresas mediante soluciones tecnológicas innovadoras.
          Nuestro objetivo es ser socios estratégicos en la transformación
          digital de nuestros clientes, apoyando su crecimiento y eficiencia.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/consultoria/Consultoria3.jpg"
          alt="Misión en consultoría IT"
        />
      </div>
    </div>

    <!-- Proyecciones -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Nuestra Visión</h2>
        <p>
          Convertirnos en la consultora IT más confiable del mercado, conocida por 
          nuestra excelencia y compromiso en cada proyecto. Queremos liderar la 
          innovación tecnológica que impulse a las empresas hacia el éxito.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/servicios/consultoria/MundoDG.jpg"
          alt="Visión de futuro en consultoría IT"
        />
      </div>
    </div>

    <!-- Valores -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Nuestros Valores</h2>
        <p>
          <strong>Innovación:</strong> Estamos siempre a la vanguardia tecnológica.<br>
          <strong>Compromiso:</strong> Tu éxito es nuestra prioridad.<br>
          <strong>Excelencia:</strong> Ofrecemos soluciones de la más alta calidad.
        </p>
        <a href="https://wa.me/3166132308" target="_blank">
          <button>Agenda una cita</button>
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
    name: "ServicesPage2.vue",
  };
  </script>
  
  <style>
  @import "@/assets/css_services/consultoria_it.css"; /* Importa el archivo CSS */
  </style>
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
    
    <section class="hero">
      <img
        src="@/assets/bank_img/servicios/cctv/cctv1.jpg"
        alt="Soluciones de CCTV"
        class="hero-image"
      />
      <div class="hero-content">
        <h1>CCTV</h1>
        <p>
          Brindamos sistemas de videovigilancia adaptados a tus necesidades. Seguridad, monitoreo y control con tecnología de punta para hogares, negocios y empresas.
        </p>
      </div>
    </section>
  
    <!-- Sección de servicios -->
    <section class="about-section">
      <div class="content-wrapper">
        <div class="text">
          <h2>Instalación de Cámaras</h2>
          <p>
            Instalamos cámaras de seguridad con cobertura estratégica, cableado estructurado y equipos de alta resolución. Ideal para interiores y exteriores.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/bank_img/servicios/cctv/cctv2.jpg" alt="Instalación de cámaras de seguridad" />
        </div>
      </div>
  
      <div class="content-wrapper reverse">
        <div class="text">
          <h2>Monitoreo y Control</h2>
          <p>
            Configuramos sistemas de monitoreo remoto, alertas en tiempo real y acceso desde dispositivos móviles o centros de control, garantizando supervisión 24/7.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/bank_img/servicios/cctv/cctv3.jpg" alt="Monitoreo de cámaras" />
        </div>
      </div>
  
      <div class="content-wrapper">
        <div class="text">
          <h2>Mantenimiento y Actualización</h2>
          <p>
            Realizamos mantenimiento preventivo y correctivo a sistemas de CCTV, actualizamos firmware y mejoramos la infraestructura para mayor rendimiento y seguridad.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/bank_img/servicios/cctv/cctv4.jpg" alt="Mantenimiento de CCTV" />
        </div>
      </div>
  
      <!-- Valores agregados -->
      <div class="content-wrapper">
        <div class="text">
          <h2>Seguridad, Soporte y Garantía</h2>
          <p>
            <strong>Confiabilidad:</strong> Equipos certificados y tecnología avanzada.<br />
            <strong>Soporte:</strong> Atención técnica especializada postventa.<br />
            <strong>Garantía:</strong> Instalaciones con respaldo profesional.
          </p>
          <a href="/Contact">
            <button>Solicita una asesoría gratuita</button>
          </a>
        </div>
      </div>
    </section>
  
    <!-- Partners Aliados -->
    <section class="partners-section">
      <div class="partners-container">
        <h2>Marcas Aliadas</h2>
        <p class="partners-description">
          Trabajamos con fabricantes líderes para garantizar soluciones de videovigilancia confiables y eficientes.
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
    name: "ServicesPage7",
  };
  </script>
  
  <style scoped src="@/assets/css_services/cctv.css"></style>
  
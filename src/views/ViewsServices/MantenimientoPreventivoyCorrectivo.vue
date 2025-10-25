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
        src="@/assets/bank_img/servicios/mantenimiento/mantenimiento1.jpg"
        alt="Mantenimiento preventivo y correctivo"
        class="hero-image"
      />
      <div class="hero-content">
        <h1>Mantenimiento de Equipos de Cómputo</h1>
        <p>
          Garantizamos el funcionamiento óptimo de tus equipos mediante mantenimiento preventivo y correctivo, mejorando su vida útil y rendimiento.
        </p>
      </div>
    </section>
  
    <!-- Sección de servicios -->
    <section class="about-section">
      <div class="content-wrapper">
        <div class="text">
          <h2>Mantenimiento Preventivo</h2>
          <p>
            Realizamos limpieza interna y externa, revisión de hardware, actualización de software, y optimización de sistemas para evitar fallas futuras.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/bank_img/servicios/mantenimiento/mantenimiento2.jpg" alt="Mantenimiento preventivo" />
        </div>
      </div>
  
      <div class="content-wrapper reverse">
        <div class="text">
          <h2>Mantenimiento Correctivo</h2>
          <p>
            Diagnosticamos y reparamos fallas en equipos, reemplazamos componentes dañados y restauramos el funcionamiento completo de tus sistemas.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/bank_img/servicios/mantenimiento/mantenimiento3.jpg" alt="Mantenimiento correctivo" />
        </div>
      </div>
  
      <div class="content-wrapper">
        <div class="text">
          <h2>Diagnóstico y Reportes Técnicos</h2>
          <p>
            Entregamos diagnósticos detallados y reportes técnicos para que tengas claridad sobre el estado de tus equipos y sus necesidades de mantenimiento.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/bank_img/servicios/mantenimiento/mantenimiento4.jpg" alt="Diagnóstico técnico" />
        </div>
      </div>
  
      <!-- Valores -->
      <div class="content-wrapper">
        <div class="text">
          <h2>Compromiso y Calidad</h2>
          <p>
            <strong>Calidad:</strong> Usamos repuestos originales y herramientas especializadas.<br />
            <strong>Rapidez:</strong> Intervenciones técnicas en tiempos mínimos.<br />
            <strong>Confianza:</strong> Personal capacitado y garantía en nuestros servicios.
          </p>
          <a href="https://wa.me/3166132308" target="_blank" rel="noopener noreferrer">
            <button>Solicita tu revisión gratuita</button>
          </a>
        </div>
      </div>
    </section>
  
    <!-- Partners Aliados -->
<section class="partners-section">
  <div class="partners-container">
    <h2>Marcas aliadas</h2>
    <p class="partners-description">
      Colaboramos con fabricantes líderes a nivel mundial para ofrecer productos de alta calidad.
    </p>
    <div class="partners-logos">
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/mantenimiento/asrock.png" alt="asrock" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/mantenimiento/asus.png" alt="asus" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/mantenimiento/gigabyte.png" alt="gigabyte" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/mantenimiento/msi.png" alt="msi" />
      </div>
    </div>
  </div>
  </section>
</template>
  
  <script>
  export default {
    name: "ServicesPage6",
  };
  </script>
  
  <style scoped src="@/assets/css_services/mantenimientoprev.css"></style>
  
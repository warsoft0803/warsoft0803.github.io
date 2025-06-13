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
        src="@/assets/bank_img/servicios/cableado/cableado_estructurado1.jpg"
        alt="Cableado estructurado profesional"
        class="hero-image"
      />
      <div class="hero-content">
        <h1>Soluciones en Cableado Estructurado</h1>
        <p>
          Instalamos infraestructura de red robusta, segura y escalable para garantizar conectividad óptima y eficiencia en tus operaciones.
        </p>
      </div>
    </section>
  
    <!-- Sección de servicios -->
    <section class="about-section">
      <div class="content-wrapper">
        <div class="text">
          <h2>Diseño e Implementación</h2>
          <p>
            Planificamos y ejecutamos proyectos de cableado estructurado para redes LAN, centros de datos y oficinas corporativas. Cumplimos con estándares internacionales TIA/EIA y certificaciones CAT5e, CAT6 y fibra óptica.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/bank_img/servicios/cableado/cableado_estructurado2.jpg" alt="Diseño de red" />
        </div>
      </div>
  
      <div class="content-wrapper reverse">
        <div class="text">
          <h2>Certificación y Monitoreo</h2>
          <p>
            Verificamos el rendimiento de cada punto de red con equipos certificados, ofreciendo reportes técnicos que avalan la calidad de la instalación.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/bank_img/servicios/cableado/cableado_estructurado3.jpg" alt="Certificación de red" />
        </div>
      </div>
  
      <div class="content-wrapper">
        <div class="text">
          <h2>Soporte y Escalabilidad</h2>
          <p>
            Ofrecemos mantenimiento preventivo y correctivo, además de ampliaciones sin afectar la operatividad del negocio. Infraestructura lista para crecer contigo.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/bank_img/servicios/cableado/cableado_estructurado4.jpg" alt="Soporte de red" />
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
          <a href="/Contact">
            <button>Solicita tu diagnóstico gratuito</button>
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
        <img src="@/assets/bank_img/servicios/aliados/cableado/belkin.png" alt="belkin" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/cableado/commscope.png" alt="commscope" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/cableado/levolor.png" alt="levolor" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/cableado/grok.png" alt="grok" />
      </div>
    </div>
  </div>
</section>

</template>
  
  <script>
  export default {
    name: "CableadoEstructuradoPage.vue",
  };
  </script>
  
  <style scoped src="@/assets/css_services/cableado.css"></style>
  
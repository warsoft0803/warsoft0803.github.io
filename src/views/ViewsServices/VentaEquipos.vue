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
      src="@/assets/bank_img/servicios/ventaequipos/ventas1.jpg"
      alt="Venta de equipos de cómputo"
      class="hero-image"
    />
    <div class="hero-content">
      <h1>Venta de Equipos de Cómputo</h1>
      <p>
        Ofrecemos equipos tecnológicos de alta calidad para uso personal, profesional o empresarial. Encuentra la solución perfecta para tus necesidades informáticas.
      </p>
    </div>
  </section>

  <!-- Sección de productos -->
  <section class="about-section">
    <div class="content-wrapper">
      <div class="text">
        <h2>Equipos de Escritorio y Portátiles</h2>
        <p>
          Contamos con una amplia variedad de computadores de escritorio y portátiles ideales para empresas, oficinas y usuarios domésticos. Calidad garantizada y configuraciones personalizadas.
        </p>
      </div>
      <div class="image">
        <img src="@/assets/bank_img/servicios/ventaequipos/ventas2.jpg" alt="Equipos de escritorio y portátiles" />
      </div>
    </div>

    <div class="content-wrapper reverse">
      <div class="text">
        <h2>Accesorios y Periféricos</h2>
        <p>
          Te ofrecemos monitores, teclados, mouses, impresoras, dispositivos de red y todo lo necesario para complementar tu equipo. Trabajamos con marcas líderes del mercado.
        </p>
      </div>
      <div class="image">
        <img src="@/assets/bank_img/servicios/ventaequipos/ventas3.jpg" alt="Accesorios y periféricos" />
      </div>
    </div>

    <div class="content-wrapper">
      <div class="text">
        <h2>Asesoría y Configuración</h2>
        <p>
          Te orientamos para elegir el equipo ideal según tus requerimientos técnicos y presupuesto. Además, configuramos tu equipo para que lo recibas listo para usar.
        </p>
      </div>
      <div class="image">
        <img src="@/assets/bank_img/servicios/ventaequipos/ventas4.jpg" alt="Asesoría en compra de equipos" />
      </div>
    </div>

    <!-- Valores agregados -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Calidad, Soporte y Garantía</h2>
        <p>
          <strong>Calidad:</strong> Equipos nuevos y con garantía directa.<br />
          <strong>Soporte:</strong> Acompañamiento técnico postventa.<br />
          <strong>Confianza:</strong> Atención personalizada y marcas reconocidas.
        </p>
        <a href="https://wa.me/3166132308" target="_blank" rel="noopener noreferrer">
          <button>Solicita una cotización</button>
        </a>
      </div>
    </div>
  </section>

    <!-- Partners Aliados -->
<section class="partners-section">
  <div class="partners-container">
    <h2>Aliados estrategicos</h2>
    <p class="partners-description">
      Distribuimos equipos de cómputo de las marcas líderes del mercado, garantizando calidad, rendimiento y respaldo.
    </p>
    <div class="partners-logos">
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/ventas/lenovo.png" alt="lenovo" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/ventas/hp.png" alt="hp" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/ventas/apple.png" alt="apple" />
      </div>
      <div class="partner-logo-container">
        <img src="@/assets/bank_img/servicios/aliados/ventas/dell.png" alt="dell" />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: "ServicesPage7",
};
</script>

<style scoped src="@/assets/css_services/ventas.css"></style>

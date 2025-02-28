<!--Una página que proporciona información sobre la empresa y estadisticas los clientes.-->

<template>
  <section class="about-section">
    <!-- Sección de Servicios -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Servicios que ofrecemos</h2>
        <p>
          Ofrecemos impulsar la transformación digital de nuestros clientes,
          proporcionando soluciones tecnológicas innovadoras y personalizadas
          que les permitan optimizar sus procesos, aumentar su eficiencia y
          alcanzar sus objetivos de negocio.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/modulos/quienes-somos.jpg"
          alt="Imagen de servicios"
        />
      </div>
    </div>

    <!-- Sección de Misión (imagen invertida) -->
    <div class="content-wrapper reverse">
      <div class="text">
        <h2>Nuestra Misión</h2>
        <p>
          Nuestro compromiso es ofrecer soluciones innovadoras y tecnológicas
          que permitan a nuestros clientes adoptar las mejores prácticas y
          herramientas para optimizar sus procesos y obtener resultados
          medibles.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/modulos/mision.jpg"
          alt="Imagen de misión"
        />
      </div>
    </div>

    <!-- Sección de Visión -->
    <div class="content-wrapper">
      <div class="text">
        <h2>Nuestra Visión</h2>
        <p>
          Nuestra visión es ser reconocidos como líderes en la transformación
          digital, apoyando a empresas en su camino hacia la innovación, el
          crecimiento sostenido y la competitividad.
        </p>
      </div>
      <div class="image">
        <img
          src="@/assets/bank_img/modulos/vision.jpg"
          alt="Imagen de visión"
        />
      </div>
    </div>

    <!-- Sección de Estadísticas -->
    <div class="statistics-wrapper">
      <h3>Nuestra fuerza de trabajo</h3>
      <div class="statistics-grid">
        <div class="stat">
          <span class="stat-number">+40</span>
          <p>Colaboradores</p>
        </div>
        <div class="stat">
          <span class="stat-number">+130</span>
          <p>Trabajadores indirectos</p>
        </div>
        <div class="stat">
          <span class="stat-number">+23</span>
          <p>Años de experiencia</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style>
@import "@/assets/css/about_page.css"; /* Importa el archivo CSS */
</style>

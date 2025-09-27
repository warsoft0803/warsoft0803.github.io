<template>
  <nav :class="{ scrolled: isScrolled }">
    <router-link to="/" class="logo">
      <img src="@/assets/bank_img/modulos/logo.png" alt="Logo" />
    </router-link>
    <div class="menu-toggle" @click="toggleMenu">
      <div class="bar" :class="{ open: isMenuOpen }"></div>
      <div class="bar" :class="{ open: isMenuOpen }"></div>
      <div class="bar" :class="{ open: isMenuOpen }"></div>
    </div>
    <ul :class="['nav-links', { open: isMenuOpen }]">
      <li><a href="/">Inicio</a></li>
      <li @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
        <a href="/Servicios" class="dropdown-toggle">
          Servicios
          <span class="arrow">▼</span> <!-- Flecha hacia abajo -->
        </a>
        <ul v-show="showDropdown || isMenuOpen" class="dropdown-menu">
          <li><a href="/SitiosWeb">Sitios Web</a></li>
          <li><a href="/ConsultoriaIT">Consultoría IT</a></li>
          <li><a href="/Ciberseguridad">Ciberseguridad</a></li>
          <li><a href="/Infraestructura">Infraestructura</a></li>
          <li><a href="/CableadoEstructurado">Cableado Estructurado</a></li>
          <li><a href="/MantenimientoPreventivoyCorrectivo">Manto. Prev y corr</a></li>
          <li><a href="/VentaEquipos">Venta equipos de cómputo</a></li>
          <li><a href="/Instalacioncctv">Instalacion CCTV</a></li>
        </ul>
      </li>
      <li><a href="/QuienesSomos">Quiénes somos</a></li>
      <li><a href="/Contacto">Contacto</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      showDropdown: false,
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // Cerrar el menú desplegable al cerrar el menú hamburguesa
      if (!this.isMenuOpen) {
        this.showDropdown = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@import '@/assets/css/navbar.css';
</style>



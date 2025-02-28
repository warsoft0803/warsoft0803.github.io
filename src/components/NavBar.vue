<template>
  <nav :class="{ scrolled: isScrolled }">
    <div class="logo">
      <img src="@/assets/bank_img/modulos/logo.png" alt="Logo" />
    </div>
    <div class="menu-toggle" @click="toggleMenu">
      <div class="bar" :class="{ open: isMenuOpen }"></div>
      <div class="bar" :class="{ open: isMenuOpen }"></div>
      <div class="bar" :class="{ open: isMenuOpen }"></div>
    </div>
    <ul :class="['nav-links', { open: isMenuOpen }]">
      <li><a href="/">Inicio</a></li>
      <li @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
        <a href="/services">Servicios</a>
        <ul v-show="showDropdown" class="dropdown-menu">
          <li><a href="/ServicesPage1">Desarrollo Web</a></li>
          <li><a href="/ServicesPage2">Consultoría IT</a></li>
          <li><a href="/ServicesPage3">Ciberseguridad</a></li>
          <li><a href="/ServicesPage4">Infraestructura</a></li>
          <li><a href="#">Cableado Estructurado</a></li>
          
        </ul>
      </li>
      <li><a href="/about">Quiénes somos</a></li>
      <li><a href="/contact">Contacto</a></li>
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



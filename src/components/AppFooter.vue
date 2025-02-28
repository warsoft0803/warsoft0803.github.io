<!--El pie de página del sitio web que se mostrará en todas las páginas.-->

<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-logo">
        <img src="@/assets/bank_img/modulos/logo.png" alt="Logo de la empresa" />
        <p>Somos el mejor aliado estratégico en soluciones inovadoras</p>
        <div class="social-icons">
          <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div class="footer-location">
        <h3>Sede Bogota</h3>
        <p>📞 XXX-XXX | +57 XXX XXX XXX</p>
        <p>📍 Direccion – OFICINA </p>
        <p>✉️ Correo: info@warsoft.com</p>
      </div>
      <div class="footer-location">
        <h3>Sede Cali</h3>
        <p>📞 604 2079773 | +57 319 672 3171</p>
        <p>📍 Carrera 103 #11 – 40 | Cali</p>
        <p>✉️ Correo: info@warsoft.com</p>
      </div>
      <div class="footer-links">
        <h3>Información Adicional</h3>
        <ul>
          <li>Consultoria</li>
          <li>Inovaccion</li>

          <!--<li><router-link to="/about">Nuestra Historia</router-link></li> 
          Ejemplo documento este texto tener el ejemplo documentar router dentro del mismo web-->
      
        </ul>
      </div>
    </div>
    <div class="footer-final">
      <p>Warsoft © 2024 Diseñado por warsoft soluciones S.A.S</p>
      <div class="payment-icons">
        <img src="@/assets/bank_img/modulos/logo.png" alt="Visa" />
        <img src="@/assets/bank_img/modulos/logo.png" alt="MasterCard" />
        <img src="@/assets/bank_img/modulos/logo.png" alt="PayPal" />
        <img src="@/assets/bank_img/modulos/logo.png" alt="American Express" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
@import '@/assets/css/footer.css';
</style>

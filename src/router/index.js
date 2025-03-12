import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import Services from "../views/ServicesPage.vue";
import About from "../views/AboutPage.vue";
import Contact from "../views/ContactPage.vue";
import ServicesPage1 from "../views/ViewsServices/ServicesPage1.vue";
import ServicesPage2 from "../views/ViewsServices/ServicesPage2.vue";
import ServicesPage3 from "../views/ViewsServices/ServicesPage3.vue";
import ServicesPage4 from "../views/ViewsServices/ServicesPage4.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/services", name: "Services", component: Services },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/servicespage1", name: "ServicesPage1", component: ServicesPage1 },
  { path: "/servicespage2", name: "ServicesPage2", component: ServicesPage2 },
  { path: "/servicespage3", name: "ServicesPage3", component: ServicesPage3 },
  { path: "/servicespage4", name: "ServicesPage4", component: ServicesPage4 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Si hay una posición guardada (por ejemplo, al navegar hacia atrás)
      return savedPosition;
    } else {
      // Siempre desplazarse hacia la parte superior de la página
      return { top: 0 };
    }
  },
});

// Integrar Google Analytics en cambios de ruta
router.afterEach((to) => {
  if (window.gtag) {
    window.gtag("config", "G-39G32YCTDV", {
      page_path: to.fullPath,
    });
  }
});

export default router;

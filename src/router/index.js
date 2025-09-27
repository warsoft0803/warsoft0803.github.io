import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../views/Inicio.vue";
import Servicios from "../views/Servicios.vue";
import QuienesSomos from "../views/QuienesSomos.vue";
import Contacto from "../views/Contacto.vue";
import SitiosWeb from "../views/ViewsServices/SitiosWeb.vue";
import ConsultoriaIT from "../views/ViewsServices/ConsultoriaIT.vue";
import Ciberseguridad from "../views/ViewsServices/Ciberseguridad.vue";
import Infraestructura from "../views/ViewsServices/Infraestructura.vue";
import CableadoEstructurado from "../views/ViewsServices/CableadoEstructurado.vue";
import MantenimientoPreventivoyCorrectivo from "../views/ViewsServices/MantenimientoPreventivoyCorrectivo.vue";
import VentaEquipos from "../views/ViewsServices/VentaEquipos.vue";
import Instalacioncctv  from "../views/ViewsServices/Instalacioncctv.vue";

const routes = [
  { path: "/", name: "Inicio", component: Inicio },
  { path: "/servicios", name: "Servicios", component: Servicios },
  { path: "/QuienesSomos", name: "QuienesSomos", component: QuienesSomos },
  { path: "/contacto", name: "Contacto", component: Contacto },
  { path: "/SitiosWeb", name: "SitiosWeb", component: SitiosWeb },
  { path: "/ConsultoriaIT", name: "ConsultoriaIT", component: ConsultoriaIT },
  { path: "/Ciberseguridad", name: "Ciberseguridad", component: Ciberseguridad },
  { path: "/Infraestructura", name: "Infraestructura", component: Infraestructura },
  { path: "/CableadoEstructurado", name: "CableadoEstructurado", component: CableadoEstructurado },
  { path: "/MantenimientoPreventivoyCorrectivo", name: "MantenimientoPreventivoyCorrectivo", component: MantenimientoPreventivoyCorrectivo },
  { path: "/VentaEquipos", name: "VentaEquipos", component: VentaEquipos },
  { path: "/Instalacioncctv", name: "Instalacioncctv", component: Instalacioncctv },
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

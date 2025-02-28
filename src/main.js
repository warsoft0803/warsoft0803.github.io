import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

const port = process.env.VUE_APP_PORT || 3000;
console.log(`Usando el puerto: ${port}`);

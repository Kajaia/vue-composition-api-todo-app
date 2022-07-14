import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");

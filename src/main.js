import { createApp } from "vue";
import "./index.css";
import index from "./pages/index.vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  mirror: true,
});

createApp(index).mount("#app");

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"; 
import ToastPlugin from 'vue-toast-notification';

import 'bootstrap/dist/css/bootstrap.css';
import "swiper/css/bundle"; 
import "react-toastify/dist/ReactToastify.css";
import 'vue-toast-notification/dist/theme-bootstrap.css';

import '../public/assets/css/animate.min.css';
import '../public/assets/css/default.css';
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/fontawesome-all.min.css';
import '../public/assets/css/style.css';
import '../public/assets/css/responsive.css';

const app = createApp(App); 

app.use(router);
app.use(ToastPlugin);
// app.use(Vuelidate);
app.mount("#app");

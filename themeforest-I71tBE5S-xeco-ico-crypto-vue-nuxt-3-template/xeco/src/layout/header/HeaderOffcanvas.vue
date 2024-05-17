<script setup>
import { inject } from "vue";

import logo_1 from "/assets/img/logo/logo.png";

const propValue = inject('offcanvasOpen');
const emit = defineEmits(["setOffcanvasOpen"]);

const handleClose = () => {
   emit("setOffcanvasOpen", false);
}

</script>

<template>
   <div :class="propValue ? 'offcanvas-menu-visible' : ''">
      <div class="extra-info" :class="propValue ? 'active' : ''">
         <div class="close-icon menu-close">
            <button @click="handleClose(false)"><i class="far fa-window-close"></i></button>
         </div>
         <div class="logo-side mb-30">
            <router-link to="/"><img :src="logo_1" alt="Logo"></router-link>
         </div>
         <div class="side-info mb-30">
            <div class="contact-list mb-30">
               <h4>Office Address</h4>
               <p>123/A, Miranda City Likaoli <br> Prikano, Dope</p>
            </div>
            <div class="contact-list mb-30">
               <h4>Phone Number</h4>
               <p>+0989 7876 9865 9</p>
               <p>+(090) 8765 86543 85</p>
            </div>
            <div class="contact-list mb-30">
               <h4>Email Address</h4>
               <p>info@example.com</p>
               <p>example.mail@hum.com</p>
            </div>
         </div>
         <div class="social-icon-right mt-30">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-google-plus-g"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
         </div>
      </div>
      <div @click="handleClose(false)" class="offcanvas-overly" :class="propValue ? 'active' : ''"></div>
   </div>
</template>
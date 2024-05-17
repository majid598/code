<script setup>

import { inject } from "vue";
import MobileMenu from "./MobileMenu.vue";

import logo_1 from "/assets/img/logo/logo.png";

const propValue = inject('sidebarOpen');
const emit = defineEmits(["setSidebarOpen"]);

const handleClose = () => {
   emit("setSidebarOpen", false);
}

</script>

<template>
   <div :class="propValue ? 'mobile-menu-visible' : ''">
      <div class="mobile-menu">
         <nav class="menu-box">
            <div @click="handleClose(false)" class="close-btn"><i class="fas fa-times"></i></div>
            <div class="nav-logo">
               <router-link to="/"><img :src="logo_1" alt="Logo"></router-link>
            </div>
            <div class="menu-outer">
               <MobileMenu/>
            </div>
            <div class="social-links">
               <ul class="clearfix list-wrap">
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-youtube"></i></a></li>
               </ul>
            </div>
         </nav>
      </div>
      <div @click="handleClose(false)" class="menu-backdrop"></div>
   </div>
</template>
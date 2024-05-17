<script setup>
import { ref, provide } from "vue";
import NavMenu from "./NavMenu.vue";
import HeaderOffcanvas from "./HeaderOffcanvas.vue";
import Sidebar from "./Sidebar.vue";

import headerLogo from "/assets/img/logo/logo.png";

const isSticky = ref(false)
const handleSticky = () => {
   if (window.scrollY > 80) {
      isSticky.value = true
   }
   else {
      isSticky.value = false
   }
}
window.addEventListener('scroll', handleSticky)

// offcanvas open
const offcanvasOpen = ref(false);
provide('offcanvasOpen', offcanvasOpen)

const setOffcanvasOpen = (value = true) => {
   offcanvasOpen.value = value;
};

// slidebar open
const sidebarOpen = ref(false);
provide('sidebarOpen', sidebarOpen)

const setSidebarOpen = (value = true) => {
   sidebarOpen.value = value;
};

</script>

<template>
   <header id="header">
      <div id="sticky-header" class="menu-area transparent-header" :class="isSticky ? 'sticky-menu' : ''">
         <div class="container custom-container">
            <div class="row">
               <div class="col-12">
                  <div class="menu-wrap">
                     <nav class="menu-nav">
                        <div class="logo">
                           <router-link to="/"><img :src="headerLogo" alt="Logo"></router-link>
                        </div>
                        <div class="navbar-wrap main-menu d-none d-lg-flex">
                           <NavMenu />
                        </div>
                        <div class="header-action">
                           <ul class="list-wrap">
                              <li class="header-login"><a href="#">Login<i class="fas fa-user"></i></a></li>
                              <li class="offcanvas-menu"><a @click="setOffcanvasOpen(true)" href="#" class="menu-tigger"><i
                                       class="fas fa-bars"></i></a>
                              </li>
                           </ul>
                        </div>
                        <div @click="setSidebarOpen(true)" class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
   <Sidebar v-if="sidebarOpen" @set-sidebar-open="setSidebarOpen" />
   <HeaderOffcanvas v-if="offcanvasOpen" @set-offcanvas-open="setOffcanvasOpen" />
</template>
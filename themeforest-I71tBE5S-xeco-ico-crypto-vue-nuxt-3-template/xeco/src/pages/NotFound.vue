<script setup>

import Header from '@/layout/header/Header.vue';
import Footer from '@/layout/footer/Footer.vue';
import ScrollToTop from "@/components/common/ScrollToTop.vue";
</script>

<template>
   <Header />
   <main>
      <section className="eg-error__area">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xxl-6 col-xl-7 col-lg-9 col-md-10">
                  <div className="eg-error__content text-center">
                     <h2 className="eg-error__title">404</h2>
                     <p>&quot;Sorry, the page you are looking for could not be found&quot;</p>
                     <router-link to="/" class="btn">Back to home</router-link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </main>
   <Footer />
   <ScrollToTop />
</template>
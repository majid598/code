<script setup>

import CountdownClock from "@/ui/CountdownClock.vue";

import bannerShape_1 from "/assets/img/banner/banner_shape01.png";
import bannerShape_2 from "/assets/img/banner/banner_shape02.png";

</script>

<template>
   <section class="banner-area banner-bg" :style="{ 'background-image': 'url(/assets/img/banner/banner_bg.png)' }">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-lg-10">
               <div class="banner-content text-center">
                  <h2 class="title">Discover the Next Big Opportunity: <br /> <span>Our ICO is Live</span></h2>
                  <p>A new smart block chain based marketplace for trading digital <br /> goods & assets according.</p>
                  <div class="banner-countdown-wrap">
                     <div class="coming-time" data-countdown="2024/8/29">
                        <CountdownClock />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="banner-scroll-down">
         <a href="#contribution" class="section-link">
            <span></span>
            <span></span>
            <span></span>
         </a>
      </div>
      <div class="banner-shape-wrap">
         <img :src="bannerShape_1" alt="" class="leftToRight" />
         <img :src="bannerShape_2" alt="" class="alltuchtopdown" />
      </div>
   </section>
</template>
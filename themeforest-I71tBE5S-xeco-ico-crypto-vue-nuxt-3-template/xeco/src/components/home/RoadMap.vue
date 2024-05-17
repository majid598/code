<script setup>

import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

const roadmap_data = reactive([
   {
      id: 1,
      roadmap_title: "End of Q4 2023",
      title: "Research",
      desc: "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations",
   },
   {
      id: 2,
      roadmap_title: "App Beta Test",
      title: "Research",
      desc: "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations",
   },
   {
      id: 3,
      roadmap_title: "End of Q4 2023",
      title: "Token Test",
      desc: "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations",
   },
   {
      id: 4,
      roadmap_title: "End of Q4 2023",
      title: "Alpha Test",
      desc: "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations",
   },
   {
      id: 5,
      roadmap_title: "End of Q4 2023",
      title: "Concept",
      desc: "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations",
   },
   {
      id: 6,
      roadmap_title: "End of Q4 2023",
      title: "Token Test",
      desc: "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations",
   },
]);

</script>

<template>
   <section id="roadMap" class="roadmap-area pt-140">
      <div class="container-fluid p-0">
         <div class="row g-0">
            <div class="col-lg-12">
               <div class="section-title text-center mb-70">
                  <h2 class="title">Our Roadmap</h2>
               </div>
            </div>
         </div>
            <swiper :loop="true" :centeredSlides="true" :slide-per-view="5"
               :autoplay="{ delay: 2500, disableOnInteraction: false, }" :modules="[Autoplay]" class="row g-0 roadMap-active" 
               :breakpoints="{
                  0: {
                     slidesPerView: 1,
                  },
                  575: {
                     slidesPerView: 2,
                  },
                  768: {
                     slidesPerView: 2,
                  },
                  992: {
                     slidesPerView: 3,
                  },
                  1200: {
                     slidesPerView: 4,
                  },
                  1400: {
                     slidesPerView: 5,
                  },
               }">
               <swiper-slide v-for="item in roadmap_data" :key="item.id" class="col-lg-4">
                  <div class="roadmap-item">
                     <span class="roadmap-title">{{ item.roadmap_title }}</span>
                     <div class="roadmap-content">
                        <h4 class="title"><span class="dot"></span>{{ item.title }}</h4>
                        <p>{{ item.desc }}</p>
                     </div>
                  </div>
               </swiper-slide>
            </swiper>
      </div>
   </section>
</template>
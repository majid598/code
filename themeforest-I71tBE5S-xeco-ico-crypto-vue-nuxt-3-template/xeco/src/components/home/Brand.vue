<script setup>

import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

import brandImg_1 from "/assets/img/brand/brand_img01.png"
import brandImg_2 from "/assets/img/brand/brand_img02.png"
import brandImg_3 from "/assets/img/brand/brand_img03.png"
import brandImg_4 from "/assets/img/brand/brand_img04.png"
import brandImg_5 from "/assets/img/brand/brand_img05.png"
import brandImg_6 from "/assets/img/brand/brand_img06.png"
import brandImg_7 from "/assets/img/brand/brand_img07.png"

const brand_data = reactive([brandImg_1, brandImg_2, brandImg_3, brandImg_4, brandImg_5, brandImg_6, brandImg_7, brandImg_4]);

</script>

<template>
   <div className="brand-area">
      <div className="container-fluid p-0">
         <div className="row g-0">
            <div className="col-lg-12">
               <div className="brand-title text-center">
                  <h6 className="title">Our top Partner</h6>
               </div>
            </div>
         </div>
         <div className="brand-item-wrap">
            <swiper :loop="true" :slide-per-view="7" :autoplay="{ delay: 2500, disableOnInteraction: false, }"
               :modules="[Autoplay]" :breakpoints="{
                  0: {
                     slidesPerView: 2,
                  },
                  575: {
                     slidesPerView: 3,
                  },
                  768: {
                     slidesPerView: 3,
                  },
                  992: {
                     slidesPerView: 4,
                  },
                  1200: {
                     slidesPerView: 5,
                  },
                  1400: {
                     slidesPerView: 7,
                  },
               }">
               <swiper-slide v-for="(item, index) in brand_data" :key="index" class="col-12">
                  <div class="brand-item">
                     <img :src="item" alt="" />
                  </div>
               </swiper-slide>
            </swiper>
         </div>
      </div>
   </div>
</template>
<script setup>

import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import teamImg_1 from "/assets/img/team/team_img01.png"
import teamImg_2 from "/assets/img/team/team_img02.png"
import teamImg_3 from "/assets/img/team/team_img03.png"
import teamImg_4 from "/assets/img/team/team_img04.png"
import teamImg_5 from "/assets/img/team/team_img05.png"
import teamImg_6 from "/assets/img/team/team_img06.png"
import teamImg_7 from "/assets/img/team/team_img07.png"
import teamImg_8 from "/assets/img/team/team_img08.png"

const team_data = reactive([
   {
      id: 1,
      img: teamImg_1,
      title: "Floyd Miles",
      profession: "Marketer",
   },
   {
      id: 2,
      img: teamImg_2,
      title: "Eleanor Pena",
      profession: "Founder & CEO",
   },
   {
      id: 3,
      img: teamImg_3,
      title: "Arlene McCoy",
      profession: "Technology Officer",
   },
   {
      id: 4,
      img: teamImg_4,
      title: "Robert Fox",
      profession: "Financial Officer",
   },
   {
      id: 5,
      img: teamImg_5,
      title: "Jacob Jones",
      profession: "Head of Blockchain",
   },
   {
      id: 6,
      img: teamImg_6,
      title: "Albert Flores",
      profession: "Product Designer",
   },

   {
      id: 7,
      img: teamImg_7,
      title: "Devon Lane",
      profession: "Visual Designer",
   },
   {
      id: 8,
      img: teamImg_8,
      title: "Jerome Bell",
      profession: "Legal & DPO",
   },
   {
      id: 9,
      img: teamImg_3,
      title: "Arlene McCoy",
      profession: "Technology Officer",
   },
]);

</script>

<template>
   <section class="team-area team-bg" :style="{ backgroundImage: `url(/assets/img/bg/team_bg.png)` }">
      <div class="container-fluid p-0">
         <div class="row g-0">
            <div class="col-12">
               <div class="section-title text-center mb-50">
                  <h2 class="title">Meet the Brick Veneers</h2>
               </div>
            </div>
         </div>
         <swiper :loop="true" :slide-per-view="8" class="row g-0 team-active" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :breakpoints="{
            0: {
               slidesPerView: 1,
            },
            575: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 3,
            },
            992: {
               slidesPerView: 4,
            },
            1200: {
               slidesPerView: 6,
            },
            1400: {
               slidesPerView: 8,
            },
         }">
            <swiper-slide v-for="item in team_data" :key="item.id" class="">
               <div class="team-item">
                  <div class="team-thumb">
                     <img :src="item.img" alt="">
                     <a href="#" class="team-social"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                  <div class="team-content">
                     <h2 class="title">{{item.title}}</h2>
                     <span>{{item.profession}}</span>
                  </div>
               </div>
            </swiper-slide>
         </swiper>
      </div>
   </section>
</template>
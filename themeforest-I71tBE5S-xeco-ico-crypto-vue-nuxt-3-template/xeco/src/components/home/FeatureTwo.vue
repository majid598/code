<script setup>

import { reactive } from "vue";

import featuresImg_1 from "/assets/img/images/features_two_img01.png";
import featuresImg_2 from "/assets/img/images/features_two_img02.png";
import featuresImg_3 from "/assets/img/images/features_two_img03.png";

import featuresTitleImg_1 from "/assets/img/images/title_img01.jpg";
import featuresTitleImg_2 from "/assets/img/images/title_img02.jpg";

import featureShape_1 from "/assets/img/images/features_shape01.png";
import featureShape_2 from "/assets/img/images/features_shape02.png";

const feature_data = reactive([
   {
      id: 1,
      title: "Lifetime free and transaction",
      img: featuresImg_1
   },
   {
      id: 2,
      title: "Security & Control over money",
      img: featuresImg_2
   },
   {
      id: 3,
      title: "Mobile Payment Make Easy",
      img: featuresImg_3
   }
]);

</script>

<template>
   <section class="features-area-two features-bg" :style="{ backgroundImage: `url(/assets/img/bg/features_bg.png)` }">
      <div class="container">
         <div class="features-inner-wrap">
            <div class="features-item-wrap">
               <div class="row justify-content-center">
                  <div v-for="item in feature_data" :key="item.id" class="col-lg-4 col-md-6">
                     <div class="features-item-two">
                        <div class="features-img-two">
                           <img :src="item.img" alt="" />
                        </div>
                        <div class="features-content-two">
                           <h2 class="title">{{ item.title }}</h2>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="row">
               <div class="col-lg-12">
                  <div class="section-title section-title-two text-center">
                     <h2 class="title">
                        The World's 1st ICO Platform That Offers Rewards
                        <img :src="featuresTitleImg_1" alt="" />
                        is a groundbreaking platform that revolutionizes the way
                        <img :src="featuresTitleImg_2" alt="" />
                        Initial Coin Offerings are conducted
                     </h2>
                  </div>
               </div>
            </div>
            <div class="features-line-shape"></div>
         </div>
      </div>

      <div class="features-shape-wrap">
         <img :src="featureShape_1" alt="" class="alltuchtopdown" />
         <img :src="featureShape_2" alt="" class="leftToRight" />
      </div>
   </section>
</template>
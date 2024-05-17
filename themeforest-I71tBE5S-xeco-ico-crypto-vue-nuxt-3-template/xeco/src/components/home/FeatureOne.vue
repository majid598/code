<script setup>

import { reactive } from "vue";

import featureImg_1 from "/assets/img/images/features_img01.png";
import featureImg_2 from "/assets/img/images/features_img02.png";
import featureImg_3 from "/assets/img/images/features_img03.png";
import featureImg_4 from "/assets/img/images/features_img04.png";

const feature_data = reactive([
  {
    id: 1,
    title: "Mobile Payment Make Easy",
    desc: "Add new, trending and rare artwork to your collection.",
    img: featureImg_1,
  },
  {
    id: 2,
    title: "Lifetime Free Transaction",
    desc: "Add new, trending and rare artwork to your collection.",
    img: featureImg_2,
  },
  {
    id: 3,
    title: "Protect the <br/> Identity",
    desc: "Add new, trending and rare artwork to your collection.",
    img: featureImg_3,
  },
  {
    id: 4,
    title: "Security & Control Over Money",
    desc: "Add new, trending and rare artwork to your collection.",
    img: featureImg_4
  },
]);
</script>

<template>
  <section id="feature" class="features-area pt-140 pb-110">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="section-title text-center mb-70">
            <h2 class="title">Revolutionary ICO Platform with Exclusive Rewards Program</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in feature_data" :key="item.id" class="col-lg-6">
          <div class="features-item">
            <div class="features-content">
              <h2 class="title"><router-link v-html="item.title" to="#!"></router-link></h2>
              <p>{{ item.desc }}</p>
            </div>
            <div class="features-img">
              <img :src="item.img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
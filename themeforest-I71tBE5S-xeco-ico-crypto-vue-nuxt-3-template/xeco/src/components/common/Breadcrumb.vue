<script setup>

const props = defineProps({
   title: String,
});

const breadcrumbShape_1 = "/assets/img/images/breadcrumb_shape01.png";
const breadcrumbShape_2 = "/assets/img/images/breadcrumb_shape02.png";

</script>

<template>
   <section class="breadcrumb-area breadcrumb-bg" :style="{ backgroundImage: `url(/assets/img/bg/breadcrumb_bg.png)` }">
      <div class="container">
         <div class="row">
            <div class="col-lg-12">
               <div class="breadcrumb-content">
                  <h2 class="title">{{ title }}</h2>
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>
      </div>
      <div class="breadcrumb-shape-wrap">
         <img :src="breadcrumbShape_1" alt="" class="alltuchtopdown" />
         <img :src="breadcrumbShape_2" alt="" class="rotateme" />
      </div>
   </section>
</template>
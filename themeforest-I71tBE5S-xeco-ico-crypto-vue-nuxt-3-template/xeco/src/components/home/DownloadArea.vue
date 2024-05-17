<script setup>

import downloadBtnImg_1 from "/assets/img/images/download_btn01.png"
import downloadBtnImg_2 from "/assets/img/images/download_btn02.png"
import downloadImg_1 from "/assets/img/images/download_img01.png"
import downloadImg_2 from "/assets/img/images/download_img02.png"
import downloadShape_1 from "/assets/img/images/download_shape01.png"
import downloadShape_2 from "/assets/img/images/download_shape02.png"

</script>

<template>
   <section class="download-area pt-130 pb-130">
      <div class="container">
         <div class="download-inner-wrap">
            <div class="row align-items-end">
               <div class="col-lg-6">
                  <div class="download-content">
                     <div class="section-title mb-40">
                        <h2 class="title">Control Application From Your Mobile</h2>
                     </div>
                     <div class="download-list">
                        <ul class="list-wrap">
                           <li><span>1</span>White Paper</li>
                           <li><span>2</span>Privacy & Policy</li>
                        </ul>
                     </div>
                     <div class="download-btn-wrap">
                        <a href="#" class="download-btn"><img :src="downloadBtnImg_1" alt="" /></a>
                        <a href="#" class="download-btn"><img :src="downloadBtnImg_2" alt="" /></a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="download-img">
                     <img :src="downloadImg_1" alt="" />
                     <img :src="downloadImg_2" alt="" />
                  </div>
               </div>
            </div>
            <div class="download-shape-wrap">
               <img :src="downloadShape_1" alt="" />
               <img :src="downloadShape_2" alt="" />
            </div>
         </div>
      </div>
   </section>
</template>
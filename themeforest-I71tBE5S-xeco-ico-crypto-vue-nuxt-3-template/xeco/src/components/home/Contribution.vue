<script setup>

import contributionShape_1 from "/assets/img/images/contribution_shape01.png";
import contributionShape_2 from "/assets/img/images/contribution_shape02.png";

</script>

<template>
   <section id="contribution" class="contribution-area pt-130 pb-130">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-lg-10">
               <div class="contribution-title">
                  <h2 class="title"><span>$45,256,432</span> Contribution Receive</h2>
               </div>
               <div class="progress-wrap">
                  <ul class="list-wrap">
                     <li>Pre-Sale</li>
                     <li>soft cap</li>
                     <li>bonus</li>
                  </ul>
                  <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="83"
                     aria-valuemin="0" aria-valuemax="100">
                     <div class="progress-bar" :style="{ width: '83%' }"></div>
                  </div>
                  <h6 class="progress-title"> 65 target raised <span>1 ETH = $1000 = 3177.38 CIC</span></h6>
               </div>
               <div class="contribution-btn">
                  <router-link to="/contact" class="btn">Purchase a Token</router-link>
                  <router-link to="/contact" class="btn btn-two">Read White Paper</router-link>
               </div>
            </div>
         </div>
      </div>
      <div class="contribution-shape-wrap">
         <img :src="contributionShape_1" alt="" class="alltuchtopdown">
         <img :src="contributionShape_2" alt="" class="leftToRight">
      </div>
   </section>
</template>
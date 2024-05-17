<script setup>

import NewsletterForm from "../../components/forms/NewsletterForm.vue";
import { reactive } from "vue";

import footerShape_1 from "/assets/img/images/footer_shape01.png";
import footerShape_2 from "/assets/img/images/footer_shape02.png";


const footer_data = reactive([
   {
      id: 1,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-6",
      title: "Usefull Links",
      footer_link: [{ link: "/contact", link_title: "Contact us" }, { link: "/contact", link_title: "How it Works" }, { link: "/contact", link_title: "Create" }, { link: "/contact", link_title: "Explore" }, { link: "/contact", link_title: "Terms & Services" },]
   },
   {
      id: 2,
      class_name: "col-xl-3 col-lg-2 col-md-4 col-sm-6",
      title: "SOLUTIONS",
      footer_link: [{ link: "/contact", link_title: "Token Suite" }, { link: "/contact", link_title: "Ecosystem" }, { link: "/contact", link_title: "Investment" }, { link: "/contact", link_title: "Portal" }, { link: "/contact", link_title: "Tokenization" },]
   },
   {
      id: 3,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-4",
      title: "Usefull Links",
      footer_link: [{ link: "/contact", link_title: "Help Center" }, { link: "/contact", link_title: "Partners" }, { link: "/contact", link_title: "Suggestions" }, { link: "/blog", link_title: "Blog" }, { link: "/contact", link_title: "Newsletters" },]
   },
]);

</script>

<template>
   <footer>
      <div class="footer-area footer-bg" :style="{ backgroundImage: `url(/assets/img/bg/footer_bg.png)` }">
         <div class="container">
            <div class="footer-top">
               <div class="row">
                  <div v-for="item in footer_data" :key="item.id" :class="item.class_name">
                     <div class="footer-widget">
                        <h4 class="fw-title">{{ item.title }}</h4>
                        <div class="footer-link">
                           <ul class="list-wrap">
                              <li v-for="(li, i) in item.footer_link" :key="i">
                                 <router-link :to="li.link">{{ li.link_title }}</router-link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div class="col-xl-3 col-lg-4 col-sm-8">
                     <div class="footer-widget">
                        <h4 class="fw-title">Subscribe Newsletter</h4>
                        <div class="footer-newsletter">
                           <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo</p>
                           <NewsletterForm />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="footer-bottom">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="copyright-text">
                        <p>Copyright © 2023 XECO. All rights reserved.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="footer-shape-wrap">
            <img :src="footerShape_1" alt="" class="alltuchtopdown" />
            <img :src="footerShape_2" alt="" class="leftToRight" />
         </div>
      </div>
   </footer>
</template>
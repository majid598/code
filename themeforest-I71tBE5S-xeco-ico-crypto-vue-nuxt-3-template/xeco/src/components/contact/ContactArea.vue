<script setup>
import { reactive } from 'vue';
import ContactForm from "../forms/ContactForm.vue"

const contact_data = reactive([
   {
      id: 1,
      icon: "fas fa-map-marker-alt",
      title: "Location",
      info: "1901 Thornridge Cir. <br /> Shiloh, Hawaii",
   },
   {
      id: 2,
      icon: "fas fa-phone-alt",
      title: "Contact",
      info: "<a href='tel:0123456789'>+88(0) 555-0108</a> <br /> <a href='tel:0123456789'>+88(0) 555-01117</a>",
   },
   {
      id: 3,
      icon: "fas fa-envelope",
      title: "Email",
      info: "<a href='mailto:xeco.@example.com'>sara.cruz@example.com</a> <br /> <a href='mailto:xeco.@example.com'>xeco.@example.com</a>",
   },
   {
      id: 4,
      icon: "fas fa-business-time",
      title: "Visit Between",
      info: "Mon - Sat : 8.00-5.00 <br /> Sunday : Closed",
   },
])

</script>

<template>
   <section class="contact-area pt-140 pb-140">
      <div class="container">
         <div class="contact-info-wrap">
            <div class="row justify-content-center">
               <div v-for="item in contact_data" :key="item.id" class="col-xl-3 col-lg-4 col-md-6">
                  <div class="contact-info-item">
                     <div class="icon">
                        <i :class=item.icon></i>
                     </div>
                     <div class="content">
                        <h6 class="title">{{ item.title }}</h6>
                        <p v-html="item.info"></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="contact-form-wrap">
            <div class="row g-0">
               <div class="col-57 order-0 order-lg-2">
                  <div class="contact-form">
                     <h4 class="title">Send a message</h4>
                     <ContactForm />
                     <p class="ajax-response mb-0"></p>
                  </div>
               </div>
               <div class="col-43">
                  <div class="contact-map">
                     <iframe src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/"
                        allowFullScreen loading="lazy"></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
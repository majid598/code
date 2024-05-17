<script setup>

import DocumentForm from "../forms/DocumentForm.vue";

import docShape from "/assets/img/images/document_shape.png"

const doc_data = ["Whitepaper", "Token Sale Terms", "Presentation", "Lightpaper"]

</script>

<template>
   <section className="document-area">
         <div className="container">
            <div className="document-inner-wrap">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title text-center mb-60">
                        <h2 className="title">Have Any Questions?</h2>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-lg-8">
                     <div className="document-form-wrap">
                        <h4 className="title">Get In Touch Now</h4>
                        <DocumentForm />
                     </div>
                  </div>
                  
                  <div className="col-lg-4">
                     <div className="document-wrap">
                        <h4 className="title">Read Documents</h4>
                        <ul className="list-wrap">
                              <li v-for="(list,i) in doc_data " :key="i">
                                 <a href="#">
                                    <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                    {{list}}
                                 </a>
                              </li>
                        </ul>
                        <a href="#" className="btn">Download All</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="document-shape">
            <img :src="docShape" alt="" className="alltuchtopdown" />
         </div>
      </section>
</template>
<script setup>

import { reactive, onMounted } from "vue";

const faq_data = reactive([
   {
      id: 1,
      question: " What cryptocurrencies can I use to purchase?",
      answer: "LessAccounting is 100% web-based, meaning it can be accessed from anywhere and there’s no software to install on your computer. You can easily use LessAccounting on your iPhone or any Android mobile device with our cloud accounting.",
      showAnswer: false,
   },
   {
      id: 2,
      question: "What is the ICO?",
      answer: "LessAccounting is 100% web-based, meaning it can be accessed from anywhere and there’s no software to install on your computer. You can easily use LessAccounting on your iPhone or any Android mobile device with our cloud accounting.",
      showAnswer: false,
   },
   {
      id: 3,
      question: "How can I connect API with my Current Site",
      answer: "LessAccounting is 100% web-based, meaning it can be accessed from anywhere and there’s no software to install on your computer. You can easily use LessAccounting on your iPhone or any Android mobile device with our cloud accounting.",
      showAnswer: false,
   },
   {
      id: 4,
      question: "What is the Payment Mathod",
      answer: "LessAccounting is 100% web-based, meaning it can be accessed from anywhere and there’s no software to install on your computer. You can easily use LessAccounting on your iPhone or any Android mobile device with our cloud accounting.",
      showAnswer: false,
   },
   {
      id: 5,
      question: "What makes Less Accounting better than the rest?",
      answer: "LessAccounting is 100% web-based, meaning it can be accessed from anywhere and there’s no software to install on your computer. You can easily use LessAccounting on your iPhone or any Android mobile device with our cloud accounting.",
      showAnswer: false,
   },
]);

const toggleAnswer = (index) => {
   faq_data.forEach((faq, i) => {
      faq.showAnswer = i === index ? !faq.showAnswer : false;
   });
};

onMounted(() => {
   faq_data[0].showAnswer = true;
});

</script>

<template>
   <section class="faq-area">
      <div class="container">
         <div class="faq-inner-wrap">
            <div class="row">
               <div class="col-lg-12">
                  <div class="section-title text-center mb-70">
                     <h2 class="title">Ask Quick Question</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-12">
                  <div class="faq-wrap">
                     <div class="accordion" id="accordionExample">
                        <div v-for="(item, index) in faq_data" :key="index"
                           :class="{ 'accordion-item': true, 'active': item.showAnswer }">
                           <h2 class="accordion-header">
                              <button @click="toggleAnswer(index)" type="button"
                                 :class="{ 'accordion-button': true, 'collapsed': !item.showAnswer }">
                                 {{ item.question }}
                              </button>
                           </h2>
                           <div v-if="item.showAnswer" class="accordion-collapse collapse show">
                              <div class="accordion-body">
                                 <p>{{ item.answer }}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
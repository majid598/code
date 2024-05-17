<script setup>

import BlogComment from "../blog-common/BlogComment.vue";
import BlogForm from "../../forms/BlogForm.vue";
import BlogSidebar from "../blog-common/BlogSidebar.vue";

import blogThumb_1 from "/assets/img/blog/blog_details.jpg";
import blogThumb_2 from "/assets/img/blog/blog_details02.jpg";
import blogThumb_3 from "/assets/img/blog/blog_details03.jpg";
import blogAvatar_1 from "/assets/img/blog/blog_author01.png";
import blogAvatar_2 from "/assets/img/blog/avatar.png";

const content_data = {
   title_1: "ICO Success Stories Realizing the Potential of Token Sales",
   desc_1: "In the world of cryptocurrency, ICOs (Initial Coin Offerings) have emerged as a powerful fundraising tool for innovative projects and blockchain-based startups. &quot;ICO Success Stories: Realizing the Potential of Token Sales&quot; delves into the remarkable achievements and breakthroughs witnessed in the realm of ICOs",
   desc_2: "This blog explores how these token sales have transformed the way companies raise capital, democratizing investment opportunities and enabling individuals from all around the world to participate. We dive into inspiring success stories of projects that started with an ICO and went on to disrupt industries, revolutionize technology, and create immense value for their investors. Discover how ICOs have unleashed.",
   desc_3: "We delve into real-life examples of projects that have soared to new heights after launching their ICOs. From decentralized finance (DeFi) platforms that have transformed the traditional banking system to blockchain-based solutions addressing real-world challenges, these success stories demonstrate the power.",
   desc_4: "the potential of blockchain technology, fostering innovation and driving economic growth. Join us on this journey as we explore the fascinating world of ICO success stories and the incredible potential they hold.",
   desc_5: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
   desc_6: "Join us as we delve into the journeys of these trailblazing projects, from the initial idea to the successful ICO and beyond. Gain insights into the strategies they employed, the challenges they overcame, and the lessons they learned along the way. ICO success stories are not just about financial gains but also about the transformative impact these projects have had on various sectors. If you&apos;re curious about the potential of ICOs.",
   desc_7: "We explore a diverse range of projects that have thrived after launching their ICOs, disrupting traditional industries and paving the way for revolutionary solutions. From decentralized applications (DApps) that have reshaped digital ecosystems to blockchain platforms revolutionizing supply chain management, these success stories demonstrate the power of ICOs to propel ideas into reality.",
   desc_8: "Through in-depth case studies and interviews with project leaders, we offer insights into the challenges they faced, the strategies they employed, and the lessons they learned along the way. Whether you&apos;re an investor seeking inspiration or an entrepreneur entrepreneur considering an ICO, these stories.",
   desc_9: "The Founder and Creative Director of XECO, a digital creative studio in USA, has over 15 years of experience as an award-winning Creative Director/Art for clients.",
   social_icon: ["fab fa-facebook-f", "fab fa-linkedin-in", "fab fa-twitter", "fab fa-instagram",]
}

const { title_1, desc_1, desc_2, desc_3, desc_4, desc_5, social_icon, desc_6, desc_7, desc_8, desc_9 } = content_data;

</script>

<template>
   <section class="blog-details-area pt-140 pb-140">
      <div class="container">
         <div class="row">
            <div class="col-lg-8">
               <div class="blog-details-wrap">
                  <div class="blog-details-thumb">
                     <img :src="blogThumb_1" alt="image" />
                  </div>
                  <div class="blog-details-content">
                     <div class="blog-meta">
                        <ul class="list-wrap">
                           <li class="blog-author"><router-link to="/blog-details"><img :src="blogAvatar_1" alt="">Stacey Moore</router-link></li>
                           <li><i class="far fa-clock"></i>2023/03/15</li>
                           <li><i class="far fa-comment"></i>07</li>
                           <li><i class="far fa-eye"></i>1,752Viewers</li>
                        </ul>
                     </div>

                     <h2 class="title">{{ title_1 }}</h2>
                     {{ desc_1 }}
                     {{ desc_2 }}
                     {{ desc_3 }}
                     {{ desc_4 }}
                     <blockquote>
                        <p>{{ desc_5 }}</p>
                        <cite>- Chris Prouty</cite>
                     </blockquote>

                     <div class="blog-details-inner-img">
                        <div class="row">
                           <div class="col-md-6">
                              <img :src="blogThumb_2" alt="" />
                           </div>
                           <div class="col-md-6">
                              <img :src="blogThumb_3" alt="" />
                           </div>
                        </div>
                     </div>

                     <p>{{ desc_6 }}</p>
                     <p>{{ desc_7 }}</p>
                     <p>{{ desc_8 }}</p>
                     <div class="blog-details-bottom">
                        <div class="row align-items-center">
                           <div class="col-md-7">
                              <div class="post-tags">
                                 <ul class="list-wrap">
                                    <li><a href="#">ICO</a></li>
                                    <li><a href="#">blockchain</a></li>
                                    <li><a href="#">currency</a></li>
                                 </ul>
                              </div>
                           </div>

                           <div class="col-md-5">
                              <div class="blog-post-share">
                                 <ul class="list-wrap">
                                    <li v-for="(icon, i) in social_icon" :key="i">
                                       <a to="#"><i :class="icon"></i></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="blog-avatar-wrap mb-65">
                  <div class="blog-avatar-img">
                     <a href="#"><img :src="blogAvatar_2" alt="img" /></a>
                  </div>
                  <div class="blog-avatar-info">
                     <h4 class="name"><a href="#">About Anik Singal</a></h4>
                     <p>{{ desc_9 }}</p>
                  </div>
               </div>

               <BlogComment />
               <BlogForm />
            </div>
            <BlogSidebar/>
         </div>
      </div>
   </section>
</template>
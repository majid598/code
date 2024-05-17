<script setup>

import { reactive } from "vue";

import rcPost_1 from "/assets/img/blog/rc_post01.jpg"
import rcPost_2 from "/assets/img/blog/rc_post02.jpg"
import rcPost_3 from "/assets/img/blog/rc_post03.jpg"

const rc_data = reactive([
   {
      id: 1,
      img: rcPost_1,
      date: "July 25,2023",
      title: "We Advocate Swapping Screen Time",
   },
   {
      id: 2,
      img: rcPost_2,
      date: "July 20,2023",
      title: "Utilizing mobile technology in the field",
   },
   {
      id: 3,
      img: rcPost_3,
      date: "July 15,2023",
      title: "Building intelligent transportation systems",
   },
]);

</script>

<template>
   <div className="blog-widget">
      <h4 className="widget-title">Recent Posts</h4>
      <div className="rc-post-wrap">
         <div v-for="item in rc_data" :key="item.id" className="rc-post-item">
            <div className="thumb">
               <router-link to="/blog-details"><img :src="item.img" alt="" /></router-link>
            </div>
            <div className="content">
               <span className="date">{{ item.date }}</span>
               <h6 className="title"><router-link to="/blog-details">{{ item.title }}</router-link></h6>
            </div>
         </div>
      </div>
   </div>
</template>
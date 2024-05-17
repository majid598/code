<script setup>
import { ref } from 'vue';
import BlogCategory from './BlogCategory.vue';
import BlogRcPost from './BlogRcPost.vue';
import BlogTag from './BlogTag.vue';

const searchKeyword = ref('');

const handleSubmit = (e) => {
   e.preventDefault();
};

</script>

<template>
   <div className="col-lg-4">
      <aside className="blog-sidebar">
         <div className="blog-widget">
            <h4 className="widget-title">Search</h4>
            <div className="sidebar-search">
               <form @submit.prevent="handleSubmit">
                  <input v-model="searchKeyword" type="text" placeholder="Search your keyword" />
                  <button type="submit"><i class="fas fa-search"></i></button>
               </form>
            </div>
         </div>
         
         <BlogCategory />
         <BlogRcPost />

         <div className="blog-widget">
            <h4 className="widget-title">Follow Us</h4>
            <div className="sidebar-follow-wrap">
               <ul className="list-wrap">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
               </ul>
               <router-link to="/contact" className="btn">Get In Touch</router-link>
            </div>
         </div>

         <BlogTag />
      </aside>
   </div>
</template>
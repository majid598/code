<script setup>

import { reactive } from 'vue';

const category_data = reactive([
   { id: 1, title: "Blockchain", count: "05" }, { id: 2, title: "Web Development", count: "03" },
   { id: 1, title: "Cryptocurrency", count: "05=6" }, { id: 1, title: "Branding Design", count: "05" },
   { id: 1, title: "Uncategorized", count: "02" }, { id: 1, title: "UI/UX Design", count: "04" }, { id: 1, title: "Email Marketing", count: "05" },
]);

</script>

<template>
   <div class="blog-widget">
      <h4 class="widget-title">Categories</h4>
      <div class="sidebar-cat-list">
         <ul class="list-wrap">
            <li v-for="(category, index) in category_data" :key="index">
               <a href="#"> {{ category.title }} <span>{{ category.count }}</span> </a>
            </li>
         </ul>
      </div>
   </div>
</template>
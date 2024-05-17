<script setup>
import {reactive } from "vue";

const menu_data = reactive([
   {
      id: 1,
      has_dropdown: false,
      title: "Home",
      link: "/",
   },
   {
      id: 2,
      has_dropdown: false,
      title: "Feature",
      link: "/#feature",
   },
   {
      id: 3,
      has_dropdown: false,
      title: "Ico Chart",
      link: "/#chart",
   },
   {
      id: 4,
      has_dropdown: false,
      title: "RoadMap",
      link: "/#roadMap",
   },
   {
      id: 5,
      has_dropdown: true,
      title: "Blog",
      link: "/blog",
      sub_menus: [
         { link: "/blog", title: "Our Blog" },
         { link: "/blog-details", title: "Blog-Details", },
      ],
   },
   {
      id: 6,
      has_dropdown: false,
      title: "Contact",
      link: "/contact",
   },
]);

</script>

<template>
   <ul class="navigation">
      <li v-for="(item, i) in menu_data" :key="i" :class="item?.has_dropdown ? 'menu-item-has-children' : ''">
         <router-link :to="item.link"> <span></span>{{ item.title }}</router-link>
         <ul v-if="item.has_dropdown" class="sub-menu">
            <li v-for="(sub_menu, index) in item?.sub_menus" :key="index">
               <router-link :to="sub_menu.link"><span>{{ sub_menu.title }}</span></router-link>
            </li>
         </ul>
      </li>
   </ul>
</template>
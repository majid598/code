<script setup>
import { reactive, ref } from "vue";

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


const navTitle = ref('');

const openMobileMenu = (item) => {
  if (navTitle.value === item) {
    navTitle.value = '';
  } else {
    navTitle.value = item;
  }
};

</script>


<template>
  <ul class="navigation">
    <li v-for="(item, i) in menu_data" :key="i" :class="{ 'menu-item-has-children': item.has_dropdown }">

      <template v-if="item.has_dropdown">
        <router-link :to="item.link">{{ item.title }}</router-link>
        <ul class="sub-menu" :class="{ 'd-block': navTitle === item.title, 'd-none': navTitle !== item.title }">
          <li v-for="(sub_item, index) in item.sub_menus" :key="index">
            <router-link :to="sub_item.link">{{ sub_item.title }}</router-link>
          </li>
        </ul>
      </template>

      <template v-else>
        <router-link :to="item.link">{{ item.title }}</router-link>
      </template>

      <div v-if="item.has_dropdown" @click="openMobileMenu(item.title)" class="dropdown-btn" :class="{ 'open': navTitle === item.title }">
        <i :class="{ 'fas fa-angle-up': navTitle === item.title, 'fas fa-angle-down': navTitle !== item.title }"></i>
      </div>

    </li>
  </ul>
</template>


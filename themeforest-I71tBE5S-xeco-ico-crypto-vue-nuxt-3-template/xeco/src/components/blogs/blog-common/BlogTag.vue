<script setup>

import { reactive } from 'vue';

const tags = reactive(["ICO", "blockchain", "investments", "currency", "crypto trading", "crypto", "ico blockchain", "advisor", "web", "ICO Token"]);

</script>

<template>
   <div className="blog-widget">
      <h4 className="widget-title">Tags</h4>
      <div className="sidebar-tag-list">
         <ul className="list-wrap">
            <li v-for="(tag, i) in tags " :key="i"><a href="#">{{ tag }}</a></li>
         </ul>
      </div>
   </div>
</template>
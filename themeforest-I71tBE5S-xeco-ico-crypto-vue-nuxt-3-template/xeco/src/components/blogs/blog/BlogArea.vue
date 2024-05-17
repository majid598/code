<script setup>
import { ref, computed } from "vue";
import { reactive } from "vue";
import BlogSidebar from "../blog-common/BlogSidebar.vue";

import blogThumb_1 from "/assets/img/blog/blog_masonry01.jpg";
import blogThumb_2 from "/assets/img/blog/blog_masonry02.jpg";
import blogThumb_3 from "/assets/img/blog/blog_standard01.jpg";
import blogThumb_4 from "/assets/img/blog/blog_standard02.jpg";

import blogAvatar_1 from "/assets/img/blog/blog_author01.png";
import blogAvatar_2 from "/assets/img/blog/blog_author02.png";
import blogAvatar_3 from "/assets/img/blog/blog_author03.png";
import blogAvatar_4 from "/assets/img/blog/blog_author04.png";

const blog_data = reactive([
   {
      id: 1,
      post: "masonry",
      thumb: blogThumb_1,
      date: "2023/03/15",
      comment: "07",
      views: "1,752Viewers",
      title: "The Power of Blockchain don't Miss Out on Our ICO",
      desc: "Our ICO is not just about financial gains; it's about being part of a movement that is shaping the future. By investing in our ICO, you become an integral part of a community that believes in the power..",
      author_avatar: blogAvatar_1,
      author_name: "Tom Cruise",
   },
   {
      id: 2,
      post: "masonry",
      thumb: blogThumb_2,
      date: "2023/03/20",
      comment: "09",
      views: "1,762Viewers",
      title: "Invest in the Next Big Thing discover Our ICO Opportunity",
      desc: "Our ICO is not just about financial gains; it's about being part of a movement that is shaping the future. By investing in our ICO, you become an integral part of a community that believes in the power..",
      author_avatar: blogAvatar_2,
      author_name: "Max Power",
   },
   {
      id: 3,
      post: "standard",
      thumb: blogThumb_3,
      date: "2023/03/25",
      comment: "14",
      views: "1,782Viewers",
      title: "Maximizing Potential discover the Benefits of Our ICO Investment",
      desc: "Our ICO is not just about financial gains; it's about being part of a movement that is shaping the future. By investing in our ICO, you become an integral part of a community that believes in the power..",
      author_avatar: blogAvatar_3,
      author_name: "Liam James",
   },
   {
      id: 4,
      post: "standard",
      thumb: blogThumb_4,
      date: "2023/03/30",
      comment: "03",
      views: "1,732Viewers",
      title: "Tokenize Your Future explore Our ICO for Game-Changing Investments",
      desc: "Our ICO is not just about financial gains; it's about being part of a movement that is shaping the future. By investing in our ICO, you become an integral part of a community that believes in the power..",
      author_avatar: blogAvatar_4,
      author_name: "Tom Cruise",
   },
   {
      id: 5,
      post: "masonry",
      thumb: blogThumb_2,
      date: "2023/03/20",
      comment: "09",
      views: "1,762Viewers",
      title: "Invest in the Next Big Thing discover Our ICO Opportunity",
      desc: "Our ICO is not just about financial gains; it's about being part of a movement that is shaping the future. By investing in our ICO, you become an integral part of a community that believes in the power..",
      author_avatar: blogAvatar_2,
      author_name: "Max Power",
   },
   {
      id: 6,
      post: "standard",
      thumb: blogThumb_4,
      date: "2023/03/30",
      comment: "03",
      views: "1,732Viewers",
      title: "Tokenize Your Future explore Our ICO for Game-Changing Investments",
      desc: "Our ICO is not just about financial gains; it's about being part of a movement that is shaping the future. By investing in our ICO, you become an integral part of a community that believes in the power..",
      author_avatar: blogAvatar_4,
      author_name: "Tom Cruise",
   },
]);

const itemsPerPage = 4;
const currentPage = ref(1);

const filteredItems = computed(() => {
   const start = (currentPage.value - 1) * itemsPerPage;
   const end = start + itemsPerPage;
   return blog_data.slice(start, end);
});

const pageCount = computed(() => Math.ceil(blog_data.length / itemsPerPage));

const handlePageClick = (pageNumber) => {
   currentPage.value = pageNumber;
};
</script>

<template>
   <section class="blog-area pt-140 pb-140">
      <div class="container">
         <div class="row">
            <div class="col-lg-8">
               <div class="blog-post-wrap">
                  <div v-for="item in filteredItems" :key="item.id">
                     <div v-if="item && item.post === 'masonry'" class="blog-masonry-post">
                        <div class="blog-masonry-thumb">
                           <router-link to="/blog-details">
                              <img :src="item.thumb" alt="" />
                           </router-link>
                        </div>
                        <div class="blog-masonry-content">
                           <div class="blog-meta">
                              <ul class="list-wrap">
                                 <li><i class="far fa-clock"></i>{{ item.date }}</li>
                                 <li>
                                    <router-link to="/blog-details">
                                       <i class="far fa-comment"></i>{{ item.comment }}
                                    </router-link>
                                 </li>
                                 <li><i class="far fa-eye"></i>{{ item.views }}</li>
                              </ul>
                           </div>
                           <h2 class="title">
                              <router-link to="/blog-details">{{
                                 item.title
                              }}</router-link>
                           </h2>
                           <p>{{ item.desc }}</p>
                           <div class="content-bottom">
                              <div class="blog-author">
                                 <router-link to="/blog-details">
                                    <img :src="item.author_avatar" alt="" />{{
                                       item.author_name
                                    }}
                                 </router-link>
                              </div>
                              <div class="read-more-btn">
                                 <router-link to="/blog-details">Read More
                                    <i class="fas fa-arrow-right"></i>
                                 </router-link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div v-else-if="item && item.post === 'standard'" class="blog-standard-post">
                        <div class="blog-standard-thumb">
                           <router-link to="/blog-details">
                              <img :src="item.thumb" alt="" />
                           </router-link>
                        </div>
                        <div class="blog-standard-content">
                           <div class="blog-meta">
                              <ul class="list-wrap">
                                 <li class="blog-author">
                                    <router-link to="/blog-details">
                                       <img :src="item.author_avatar" alt="" />{{
                                          item.author_name
                                       }}
                                    </router-link>
                                 </li>
                                 <li><i class="far fa-clock"></i>{{ item.date }}</li>
                                 <li>
                                    <router-link to="/blog-details">
                                       <i class="far fa-comment"></i>{{ item.comment }}
                                    </router-link>
                                 </li>
                                 <li><i class="far fa-eye"></i>{{ item.views }}</li>
                              </ul>
                           </div>
                           <h2 class="title">
                              <router-link to="/blog-details">{{
                                 item.title
                              }}</router-link>
                           </h2>
                           <p>{{ item.desc }}</p>
                           <div class="read-more-btn">
                              <router-link to="/blog-details">Read More
                                 <i class="fas fa-arrow-right"></i>
                              </router-link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <nav class="pagination-wrap">
                  <ul class="list-wrap">
                     <li>
                        <a @click.prevent="handlePageClick(currentPage - 1)" :disabled="currentPage <= 1">
                           <i class="fas fa-arrow-left"></i>
                        </a>
                     </li>
                     <li v-for="pageNumber in pageCount" :key="pageNumber" :class="{ active: pageNumber === currentPage }">
                        <a @click.prevent="handlePageClick(pageNumber)">{{
                           pageNumber
                        }}</a>
                     </li>
                     <li>
                        <a @click.prevent="handlePageClick(currentPage + 1)" :disabled="currentPage >= pageCount">
                           <i class="fas fa-arrow-right"></i>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
            <BlogSidebar />
         </div>
      </div>
   </section>
</template>

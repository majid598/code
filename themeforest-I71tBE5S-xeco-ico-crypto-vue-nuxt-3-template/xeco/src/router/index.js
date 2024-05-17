import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Blog from '../pages/Blog.vue';
import Contact from '../pages/Contact.vue';
import BlogDetails from '../pages/BlogDetails.vue';
import NotFound from '../pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/blog',
      component: Blog,
    },
    {
      path: '/blog-details',
      component: BlogDetails,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: "/:notFound",
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Scroll to the element with the specified ID (hash) when navigating to a hash link
      return {
        el: to.hash,
        behavior: 'smooth', // You can adjust the scroll behavior as needed
      };
    } else if (savedPosition) {
      // If a saved position is available, scroll to it
      return savedPosition;
    } else {
      // Otherwise, scroll to the top of the page
      return { top: 0, behavior: 'smooth' };
    }
  },
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
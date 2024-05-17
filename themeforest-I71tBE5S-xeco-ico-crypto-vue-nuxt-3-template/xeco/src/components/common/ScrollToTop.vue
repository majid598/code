 

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'; 
const showScroll = ref(false); 
// scroll to top
const isSticky = ref(false)
const handleSticky = () => {
  if (window.scrollY > 80) {
    isSticky.value = true
  }
  else {
    isSticky.value = false
  }
}
window.addEventListener('scroll', handleSticky)


const checkScrollTop = () => {
  if (!showScroll.value && window.pageYOffset > 400) {
    showScroll.value = true;
  } else if (showScroll.value && window.pageYOffset <= 400) {
    showScroll.value = false;
  }
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', checkScrollTop);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollTop);
});
</script>

<template> 
    <!-- <div class="back-to-top-wrapper" :class="{ 'back-to-top-btn-show': isSticky }"> -->
      <button @click="scrollTop" class="scroll-top scroll-to-target" :class="{'open':isSticky}" data-target="html" id="back_to_top">
        <i class="fas fa-angle-up"></i>
      </button>
    <!-- </div>  -->
</template>

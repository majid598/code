<!-- <script setup>
import HelloWorld from './components/home/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
</template> -->

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const wow = await import('wow.js')
  new wow.default().init()
})
</script>
  
<template>
  <router-view />
</template>
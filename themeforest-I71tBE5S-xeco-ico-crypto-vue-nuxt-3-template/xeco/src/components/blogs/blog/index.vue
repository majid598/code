<script setup>

import Header from '@/layout/header/Header.vue';
import Footer from '@/layout/footer/Footer.vue';
import Breadcrumb from '../../common/Breadcrumb.vue';
import BlogArea from './BlogArea.vue';
import DocumentArea from '../../common/DocumentArea.vue';

</script>

<template>
   <Header/>
   <main>
      <Breadcrumb title="Our Blog" />
      <BlogArea/>
      <DocumentArea/>
    </main>
   <Footer/>
</template>
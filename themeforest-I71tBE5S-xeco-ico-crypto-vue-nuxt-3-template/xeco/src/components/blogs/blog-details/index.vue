<script setup>

import Header from '@/layout/header/Header.vue';
import Breadcrumb from '../../common/Breadcrumb.vue';
import Footer from '@/layout/footer/Footer.vue';
import BlogDetailsArea from './BlogDetailsArea.vue';
import DocumentArea from '../../common/DocumentArea.vue';

</script>

<template>
   <Header/>
   <main>
      <Breadcrumb title="Our Blog" />
      <BlogDetailsArea/>
      <DocumentArea/>
    </main>
   <Footer/>
</template>
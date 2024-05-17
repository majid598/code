<script setup>

import Header from '@/layout/header/Header.vue';
import Breadcrumb from '../common/Breadcrumb.vue';
import Footer from '@/layout/footer/Footer.vue';
import DocumentArea from '../common/DocumentArea.vue';
import ContactArea from './ContactArea.vue';

</script>

<template>
   <Header/>
   <main>
      <Breadcrumb title="Contact" />
      <ContactArea/>
      <DocumentArea/>
    </main>
   <Footer/>
</template>
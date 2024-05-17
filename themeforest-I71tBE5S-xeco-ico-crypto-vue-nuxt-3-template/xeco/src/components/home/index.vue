<script setup>

import Header from '@/layout/header/Header.vue';
import Banner from './Banner.vue';
import Contribution from './Contribution.vue';
import Brand from './Brand.vue';
import FeatureOne from './FeatureOne.vue';
import FeatureTwo from './FeatureTwo.vue';
import RoadMap from './RoadMap.vue';
import Team from './Team.vue';
import FAQ from './FAQ.vue';
import DownloadArea from './DownloadArea.vue';
import DocumentArea from '../common/DocumentArea.vue';
import Footer from '@/layout/footer/Footer.vue';
import ChartAreas from './ChartAreas.vue';

</script>

<template>
  <Header />
  <main>
    <Banner />
    <Contribution />
    <Brand />
    <FeatureOne />
    <FeatureTwo />
    <ChartAreas />
    <RoadMap />
    <Team />
    <FAQ />
    <DownloadArea />
    <DocumentArea />
  </main>
  <Footer/>
</template>

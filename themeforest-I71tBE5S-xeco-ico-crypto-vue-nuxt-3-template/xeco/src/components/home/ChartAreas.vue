<script setup>

import { ref } from 'vue';
import { Doughnut } from 'vue-chartjs';
import 'chart.js/auto';

import chartImg from "/assets/img/images/chart_img.png";

const activeTab = ref(0);

const tabTitles = ["Funding Allocation", "Token Distribution"];

const handleTabClick = (index) => {
   activeTab.value = index;
};

// chart data
const chartData = {
   labels: ["Contingency", "Business Development", "Investor", "Poland", "Legal & Regulation", "Czech Republic"],
   datasets: [
      {
         label: 'Founding Allocation',
         data: [70, 20, 30, 15, 20, 50],
         backgroundColor: ["#44A08D", "#136F84", "#0B446D", "#033356", "#012641", "#191F28"]
      }
   ]
};

// chart option
const chartOptions = {
   responsive: true
};
const chartLists = [
   ["Contingency: 70%", "Business Development: 20%", "Investor: 30%", "Poland: 15%", "Legal & Regulation: 20%", "Czech Republic: 50%"],
   ["Czech Republic: 50%", "Poland: 15%", "Legal & Regulation: 20%", "Contingency: 70%", "Business Development: 20%", "Investor: 30%"]
];

</script>

<template>
   <div id="chart" class="chart-area pt-140">
      <div class="container">
         <div class="chart-inner-wrap">
            <div class="row align-items-center">
               <div class="col-lg-6">
                  <div class="chart-wrap">
                     <div class="chart">
                        <div id="doughnutChart">
                           <doughnut :data="chartData" :options="chartOptions"></doughnut>
                        </div>
                     </div>
                     <div class="chart-tab">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                           <li v-for="(tab, index) in tabTitles" :key="index" class="nav-item">
                              <button @click="handleTabClick(index)"
                                 :class="{ 'nav-link': true, 'active': activeTab === index }">
                                 {{ tab }}
                              </button>
                           </li>
                        </ul>

                        <div class="tab-content" id="myTabContent">
                           <div v-show="activeTab === 0" class="tab-pane fade show active" id="description">
                              <div class="chart-list">
                                 <ul class="list-wrap">
                                    <li v-for="(list, index) in chartLists[0]" :key="index">{{ list }}</li>
                                 </ul>
                              </div>
                           </div>
                           <div v-show="activeTab === 1" class="tab-pane fade show active" id="description">
                              <div class="chart-list">
                                 <ul class="list-wrap">
                                    <li v-for="(list, index) in chartLists[1]" :key="index">{{ list }}</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div class="col-lg-6">
                  <div class="right-side-content">
                     <img :src="chartImg" alt="" />
                     <p>Ethereum is a decentralized, open-source <br /> blockchain with smart contract</p>
                     <ul class="list-wrap">
                        <li><span>1</span>Symbol: CIC</li>
                        <li><span>2</span>Initial Value: 1 ETH = 3177.38 CIC</li>
                        <li><span>3</span>Type: ERC20</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
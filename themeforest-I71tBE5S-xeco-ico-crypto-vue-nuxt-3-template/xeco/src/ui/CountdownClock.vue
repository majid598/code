<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

const remainingTime = ref({
   remainingDays: 0,
   remainingHours: 0,
   remainingMinutes: 0,
   remainingSeconds: 0,
});

const liveTime = Date.now() + 302 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000; // Two days and three hours from now

const countdownObservable = interval(1000).pipe(
   map(() => {
      const remainingMilliseconds = liveTime - Date.now();
      return {
         remainingDays: Math.floor(remainingMilliseconds / 86400000),
         remainingHours: Math.floor((remainingMilliseconds % 86400000) / 3600000),
         remainingMinutes: Math.floor(((remainingMilliseconds % 86400000) % 3600000) / 60000),
         remainingSeconds: Math.floor((((remainingMilliseconds % 86400000) % 3600000) % 60000) / 1000),
      };
   })
);

const subscription = countdownObservable.subscribe((data) => {
   remainingTime.value = data;
});

onUnmounted(() => {
   subscription.unsubscribe();
});

</script>

<template>
      <div class="time-count day"><span>{{ remainingTime.remainingDays }}</span> days</div>
      <div class="time-count hour"><span>{{ remainingTime.remainingHours }}</span> hours</div>
      <div class="time-count min"><span>{{ remainingTime.remainingMinutes }}</span> mins</div>
      <div class="time-count sec"><span>{{ remainingTime.remainingSeconds }}</span> secs</div>
</template>
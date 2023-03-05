<template>
  
  <!-- Home Page -->

  <!-- <AnimeDeck :animes="results.value" :name="'Most Popular Anime'"/> -->

  <Suspense>
    
    <template #default>
      <AnimeDeck :animes="results" :name="'Most Popular Anime'"/>
    </template>

    <template #fallback>
      <p>
        Loading data, hang on....
      </p>
    </template>

  </Suspense>

</template>

<script setup>
import AnimeDeck from '@/components/AnimeDeck.vue';
import { ref } from 'vue';
const results = ref([]);

(async () => {
  const resp = await fetch('http://localhost:5000/api/v1/most-popular');
  const data = await resp.json();
  results.value = data.animes;
})()


const testObj = {
  "id": "one-punch-man-63",
  "name": "One Punch Man is literally good about aifniaffabfanbf abfu213bubfuabfda qinaifnainfddaandi",
  "poster": "https://img.zorores.com/_r/300x400/100/f5/d1/f5d173f8317f592c6c70d594829b89e4/f5d173f8317f592c6c70d594829b89e4.jpg",
  "duration": "24m",
  "type": "TV",
  "aboutPage": "https://zoro.to/one-punch-man-63",
  "rating": "18+",
  "episodes": "12/12"
}


</script>

<template>

  <section data-deck>

    <div 
      class="grid gap-4 transition ease-in duration-100" 
      style="grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));"
    >

      <AnimeCard 
        v-for="anime in animes"
        :info="anime"
        class="mx-auto"
      />

    </div>

  </section>

</template>


<script setup>
import AnimeCard from './AnimeCard.vue';

const props = defineProps({
  animes: {
    type: Array,
    required: true
  }
})

const testObj = {
  "id": "one-punch-man-63",
  "name": "One Punch Man",
  "poster": "https://img.zorores.com/_r/300x400/100/f5/d1/f5d173f8317f592c6c70d594829b89e4/f5d173f8317f592c6c70d594829b89e4.jpg",
  "duration": "24m",
  "type": "TV",
  "aboutPage": "https://zoro.to/one-punch-man-63",
  "rating": "18+",
  "episodes": "12/12"
}

</script>


<style></style>

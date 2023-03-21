<template>

  <section 
    data-seasons
    class="my-8 isolate relative"
  >

    <div 
      class="mb-6 text-accent-200"
      style="font-size: clamp(1.2rem, 3vmin, 1.58rem);"
    >
      More Seasons
    </div>


    <div
      class="flex gap-4 flex-wrap"
    >
      <SeasonsCard
        v-for="season, index in props.seasons"
        :key="index"
        :id="season.id" :is-current="season.isCurrent"
        :name="season.name" :poster="season.poster"
        :title="season.title"
        class=""
      />
    </div>

  </section>

</template>


<script setup>
import SeasonsCard from './SeasonsCard.vue';

const props = defineProps({
  seasons: {
    type: Array,
    required: true
  }
});

const seasons = [
  {
    "isCurrent": true,
    "id": "naruto-677",
    "name": "Naruto",
    "title": "Classic Series",
    "poster": "https://img.zorores.com/_r/200x200/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg"
  },
  {
    "isCurrent": false,
    "id": "naruto-shippuden-355",
    "name": "Naruto: Shippuden",
    "title": "Shippuden Series",
    "poster": "https://img.zorores.com/_r/100x200/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg"
  },
  {
    "isCurrent": false,
    "id": "naruto-spin-off-rock-lee-his-ninja-pals-2992",
    "name": "NARUTO Spin-Off: Rock Lee & His Ninja Pals",
    "title": "Spin-Off: Rock Lee & His Ninja Pals",
    "poster": "https://img.zorores.com/_r/100x200/100/37/f8/37f8b16b0f693e433207117abe5daf44/37f8b16b0f693e433207117abe5daf44.jpg"
  },
  {
    "isCurrent": false,
    "id": "boruto-naruto-next-generations-8143",
    "name": "Boruto: Naruto Next Generations",
    "title": "Boruto Series",
    "poster": "https://img.zorores.com/_r/100x200/100/32/c8/32c83e2ad4a43229996356840db3982c/32c83e2ad4a43229996356840db3982c.jpg"
  }
]
</script>


<style>

</style>

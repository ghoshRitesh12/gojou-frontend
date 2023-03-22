<template>

  <div>

    <p class="text-[1rem] pt-6 px-8 pb-2 text-gray-500">Categories</p>
    
    <nav id="anime-categories">
  
      <AnimeCategoryLink
        v-for="category in categories"
        :name="category.name"
        :href="category.href"
      />
  
    </nav>

  </div>


</template>


<script setup>
import { ref } from 'vue';
import AnimeCategoryLink from './AnimeCategoryLink.vue';

const categories = ref([
  { name: 'Movies', href: 'movie' },
  { name: 'TV Series', href: 'tv' },
  { name: 'Most Popular', href: 'most-popular' },
  { name: 'Most Favorite', href: 'most-favorite' },
  { name: 'Top Upcoming', href: 'top-upcoming' },
])

</script>


<style></style>

<template>

  <p class="text-[1rem] mt-8 px-8 pb-2 text-gray-500">Categories</p>

  <nav id="anime-categories">

    <AnimeCategoryLink
      v-for="category in categories"
      :name="category.name"
      :href="category.href"
    />

  </nav>

</template>


<script setup>
import { ref } from 'vue';
import AnimeCategoryLink from './AnimeCategoryLink.vue';

const categories = ref([
  { name: 'TV Series', href: '/anime/tv' },
  { name: 'Movies', href: '/anime/movies' },
  { name: 'Most Popular', href: '/anime/most-popular' },
  { name: 'Top Upcoming', href: '/anime/top-upcoming' },
])

</script>


<style></style>

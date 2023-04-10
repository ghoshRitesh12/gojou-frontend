<template>

  <div 
    data-explore-deck
    class="
    flex flex-wrap gap-2 sm:gap-3
    "
  >

    <ExploreCard
      v-for="category in exploreCategories"
      :key="category.href"
      :name="category.name"
      :href="category.href"
      :is-active="category.href === 'dubbed-anime'"
      class="flex-shrink-0"
    />
  
  </div>

</template>


<script setup>
import ExploreCard from './ExploreCard.vue';


const exploreCategories = [
  {
    name: 'Most Popular',
    href: 'most-popular'
  },
  {
    name: 'Most Favorite',
    href: 'most-favorite'
  },
  {
    name: 'Subbed Anime',
    href: 'subbed-anime'
  },
  {
    name: 'Dubbed Anime',
    href: 'dubbed-anime'
  },
  {
    name: 'Movies',
    href: 'movie'
  },
  {
    name: 'TV Series',
    href: 'tv'
  },
  {
    name: 'OVAs',
    href: 'ova'
  },
  {
    name: 'ONAs',
    href: 'ona'
  },
  {
    name: 'Recently Updated',
    href: 'recently-updated'
  },
  {
    name: 'Recently Added',
    href: 'recently-added'
  },
  {
    name: 'Top Upcoming',
    href: 'top-upcoming'
  },
  {
    name: 'Top Airing',
    href: 'top-airing'
  },
  {
    name: 'Completed',
    href: 'completed'
  },
  {
    name: 'Specials',
    href: 'special'
  },

]


</script>



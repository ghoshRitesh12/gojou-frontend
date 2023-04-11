<template>

  <div 
    data-explore-deck
    class="
    flex flex-wrap gap-2 sm:gap-3
    max-h-[12rem] overflow-y-auto md:h-fit
    "
  >

    <ExploreCard
      v-for="category in exploreCategories"
      v-show="activeCard ? (activeCard === category.href ? true : false) : true"
      :key="category.href"
      :name="category.name"
      :href="category.href"
      :is-active="(activeCard === category.href ? true : false)"
      class="flex-shrink-0"
      @card-click="handleCardChange"
      @cancel-card="deselectCard"
    />
  
  </div>

</template>


<script setup>
import { ref } from 'vue';
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

const activeCard = ref('');



const emits = defineEmits(['card-change', 'deselect-card']);

const handleCardChange = eventData => {
  emits('card-change', eventData)
  activeCard.value = eventData.href;
}

const deselectCard = () => {
  emits('deselect-card')
  activeCard.value = '';
}

</script>


<style scoped>

  [data-explore-deck]::-webkit-scrollbar {
    display: none;
  }
  [data-explore-deck] {
    scrollbar-width: none;
  }

</style>


<template>
  <div
    data-most-viewed-deck
    class=""
  >

    <div class="text-accent-200 text-2xl mb-4">
      Most Viewed
    </div>

    <div class="bg-zinc-900 rounded-xl">

      <div class="flex items-center w-full mb-6">
        <div 
          data-period
          @click="changePeriod('today')"
          :class="`${
            activePeriod === 'today' ? 'text-accent-200 bg-zinc-800' : '' 
          }`"
        >
          Today
        </div>

        <div 
          data-period
          @click="changePeriod('week')"
          :class="`${
            activePeriod === 'week' ? 'text-accent-200 bg-zinc-800' : '' 
          }`"
          
        >
          Week
        </div>

        <div 
          data-period
          @click="changePeriod('month')"
          :class="`${
            activePeriod === 'month' ? 'text-accent-200 bg-zinc-800' : '' 
          }`"
        >
          Month
        </div>
      </div>
    
      <MostViewedCard
        v-for="anime, index in mostViewed"
        :key="index"
        :id="anime.id" :rank="anime.rank"
        :name="anime.name" :poster="anime.poster"
        :hearts="anime.hearts" :views="anime.views"
      />

    </div>

  </div>
</template>


<script setup>
import { computed, ref } from 'vue';
import MostViewedCard from './MostViewedCard.vue';

const activePeriod = ref('today')

const props = defineProps({
  allAnimes: {
    type: Object,
    required: true
  }
});


const mostViewed = computed(() => props.allAnimes[activePeriod.value])

const changePeriod = period => (activePeriod.value = period);

</script>


<style>
  [data-period] {
    @apply px-4 py-2 cursor-pointer rounded-lg
    hover:text-accent-200 flex-grow text-center
    transition ease-in duration-100
  }
</style>

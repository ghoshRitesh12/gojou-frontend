<template>

  <section 
    data-search-suggestions 
    class="
    rounded-xl overflow-hidden bg-zinc-900
    shadow-lg shadow-primary-glass/40
    "
  >
    <QuickSearchCard
      v-for="anime, index in props.results"
      :key="index"
      :id="anime.id" :more-info="anime.moreInfo"
      :poster="anime.poster" :name="anime.name"
    />

    <RouterLink 
      v-if="props.results.length > 0"
      :to="`/search?q=${props.href}`"
      class="
      flex items-center justify-center
      bg-accent-300 w-full text-center py-2
      rounded-xl text-primary-900 hover:bg-accent-200
      transition ease-in duration-100
      " 
      type="button"
    >
      View all results
      <Icon icon="material-symbols:chevron-right-rounded"/>
    </RouterLink>
  </section>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import QuickSearchCard from './QuickSearchCard.vue';

const props = defineProps({
  results: {
    type: Array,
    required: true
  },
  href: {
    type: String
  }
})
</script>


<style>

</style>

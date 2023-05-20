<template>

  <section 
    v-if="props?.seasons?.length > 0"
    data-seasons
    class="
    relative z-40 isolate inline-block w-full
    transition ease-in duration-100
    "
    >
    <div 
      class="mb-6 text-accent-200 font-semibold"
      style="font-size: clamp(1.2rem, 3vmin, 1.58rem);"
    >
      More Seasons
    </div>


    <div
      class="
      flex gap-4 flex-wrap relative z-50"
    >
      <SeasonsCard
        v-for="season, index in props.seasons"
        :key="index"
        :id="season.id" :is-current="season.isCurrent"
        :name="season.name" :poster="season.poster"
        :title="season.title"
        class="z-50"
      />
    </div>

  </section>

</template>


<script setup>
import SeasonsCard from './SeasonsCard.vue';

const props = defineProps({
  seasons: {
    type: Array,
  }
});


</script>


<style>

</style>

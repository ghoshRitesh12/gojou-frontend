<template>

  <section 
    data-seasons
    class="
    relative z-50 isolate inline-block w-full
    after:content-[' '] after:absolute after:isolate after:z-[-1]
    after:top-[-1rem] after:right-[-2rem] 
    after:left-[-2rem] after:bottom-[-2rem]
    after:bg-gradient-to-b from-primary-900/50 to-transparent
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
    required: true
  }
});


</script>


<style>

</style>

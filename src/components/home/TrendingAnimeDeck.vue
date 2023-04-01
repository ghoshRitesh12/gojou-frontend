<template>

  <section 
    data-trending 
    class="relative
    bg-zinc-900 p-4 rounded-2xl
    "
  >

    <p
      class="
      text-accent-200 text-xl w-fit font-semibold
      "
    >
      Trending Animes
    </p>


    <div
      class="
      flex gap-4 overflow-auto py-4
      "
    >

      <TrendingAnimeCard
        class="flex-shrink-0"
        v-for="anime, index in props.animes" 
        :key="index"
        :rank="anime.rank"
        :name="anime.name"
        :id="anime.id"
        :poster="anime.poster"
      />

    </div>

  </section>

</template>


<script setup>
import TrendingAnimeCard from './TrendingAnimeCard.vue';

const props = defineProps({
  animes: {
    type: Array,
    required: true
  }
})


</script>


<style scoped>

.overflow-auto::-webkit-scrollbar-track {
  @apply bg-zinc-900
}
.overflow-auto::-webkit-scrollbar-thumb {
  @apply border-zinc-900
}

</style>


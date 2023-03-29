<template>

  <section data-feat-deck
    class="bg-zinc-900 rounded-xl overflow-hidden"
  >

    <p
      class="
      text-accent-200 w-full py-3 pl-5
      font-semibold
      "
      style="font-size: clamp(1.2rem, 3vmin, 1.4rem);"
    >
      {{ props.name }}
    </p>

    <div class="">
      <FeatAnimeCard
        v-for="anime in slicedAnimes"
        class="even:bg-zinc-800/60 px-8"
        :id="anime.id" 
        :name="anime.name" :jname="anime.jname"
        :poster="anime.poster" :other-info="anime.otherInfo"
      />
    </div>

    <RouterLink 
      v-if="props.href"
      :to="`/anime/${props.href}`"
      class="
      flex items-center justify-center bg-zinc-900
      text-neutral-500 hover:bg-zinc-800
      w-full mx-auto py-3 cursor-pointer text-base 
      rounded-xl mt-4 gap-1
      transition ease-in duration-200 
      "
    >
      <span class="pointer-events-none">View more</span>
      <span class="pointer-events-none grid place-items-center text-xl">
        <Icon icon="ic:round-keyboard-arrow-right"/>
      </span>
    </RouterLink>

  </section>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import FeatAnimeCard from './FeatAnimeCard.vue';


const props = defineProps({
  name: {
    type: String,
    required: true
  },
  animes: {
    type: Array,
    required: true
  },
  href: {
    type: String,
  }
})

const slicedAnimes = computed(() => props.animes.slice(0, 7));

</script>


<style>

</style>

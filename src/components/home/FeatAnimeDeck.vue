<template>

  <section data-feat-deck
    class="bg-zinc-900 rounded-xl overflow-hidden"
  >

    <p
      class="text-xl text-accent-200 w-fit py-4 pl-4"
    >
      {{ props.name }}
    </p>

    <div class="">
      <FeatAnimeCard
        v-for="anime in slicedAnimes"
        class="even:bg-zinc-800"
        :id="anime.id" 
        :name="anime.name" :jname="anime.jname"
        :poster="anime.poster" :other-info="anime.otherInfo"
      />
    </div>

    <div 
      class="
      flex items-cente justify-center bg-zinc-900
      text-neutral-500 hover:bg-zinc-800
      w-full mx-auto py-3 cursor-pointer text-base 
      rounded-xl mt-4
      transition ease-in duration-100 gap-1
      "
      @click="goToCategory(props.footerHref)"
    >
      <span class="pointer-events-none">View more</span>
      <span class="pointer-events-none grid place-items-center text-xl">
        <Icon icon="ic:round-keyboard-arrow-right"/>
      </span>
    </div>

  </section>

</template>


<script setup>
import goToRoute from '@/composables/goToRoute';
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import FeatAnimeCard from './FeatAnimeCard.vue';

const { goToCategory } = goToRoute();

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
    required: true
  }
})

const slicedAnimes = computed(() => props.animes.slice(0, 7));

</script>


<style>

</style>

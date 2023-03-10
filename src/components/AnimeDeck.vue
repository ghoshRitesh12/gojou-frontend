<template>

  <section data-deck>

    <div 
      v-if="props.name"
      class="flex items-center pb-6"
    >
      <p class="text-accent-200 text-2xl">
        {{ props.name }}
      </p>
      <div 
        class="
        flex items-center
        text-neutral-500 hover:text-accent-200
        w-fit ml-auto cursor-pointer text-base
        transition ease-in duration-100 
        "
        @click="goToCategory(props.href)"
      >
        <span class="pointer-events-none">View more</span>
        <Icon class="pointer-events-none text-xl" icon="ic:round-keyboard-arrow-right"/>
      </div>
    </div>


    <div 
      class="grid gap-3 md:gap-4 transition ease-in duration-100" 
      style="grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));"
      >
      <!-- style="grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));" -->
      <AnimeCard 
        v-for="anime in props.animes"
        :info="anime"
        class="mx-auto"
      />
    </div>

  </section>

</template>


<script setup>
import goToRoute from '@/composables/goToRoute';
import { Icon } from '@iconify/vue';
import AnimeCard from './AnimeCard.vue';

const { goToCategory } = goToRoute();

const props = defineProps({
  animes: {
    type: Array,
    required: true
  },
  name: {
    type: String,
  },
  href: {
    type: String,
  },
})


const testObj = {
  "id": "one-punch-man-63",
  "name": "One Punch Man",
  "poster": "https://img.zorores.com/_r/300x400/100/f5/d1/f5d173f8317f592c6c70d594829b89e4/f5d173f8317f592c6c70d594829b89e4.jpg",
  "duration": "24m",
  "type": "TV",
  "aboutPage": "https://zoro.to/one-punch-man-63",
  "rating": "18+",
  "episodes": "12/12"
}

</script>


<style></style>

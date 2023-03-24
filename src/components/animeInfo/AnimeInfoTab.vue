<template>

  <div 
    class="flex items-start gap-12 flex-wrap flex-grow-0
    md:flex-nowrap justify-center
    "
  >

    <div 
      class="
      flex-shrink-0 flex-grow-0 max-w-[12rem] 
      overflow-hidden shadow-xl rounded-xl relative h-fit
      mt-3
      "
    >
      <img class="w-full rounded-xl" :src="poster" :alt="name">
    </div>


    <div data-info class="text-center md:text-left">

      <div>

        <div
          class="text-white"
          style="font-size: clamp(1.7rem, 4vmin, 2.2rem)"
        >
          {{ name }}
        </div>

        <div class="text-neutral-200 text-[.88rem] md:text-base mt-2">
          <template v-for="info, index in stats">
            <span class="whitespace-nowrap inline-block"> {{ info }} </span>
            <Icon
              v-if="index !== stats.length - 1"
              :icon="'bi:dot'" 
              class="text-lg inline-block"
            />
          </template>
        </div>

      </div>

      <div 
        class="flex items-center gap-3 md:gap-4 my-8 w-fit mx-auto md:w-full" 
        style="font-size: clamp(.85rem, 2.5vmin, 1rem)"
      >
        <button 
          class="
          flex items-center gap-1
          py-2 px-4 shadow-lg bg-accent-300
          hover:bg-accent-200 rounded-2xl text-primary-900
          transition ease-in duration-100"
          type="button"
        >
          <Icon icon="material-symbols:play-arrow-rounded" class="text-lg" />
          Watch
        </button>

        <button 
          class="
          flex items-center gap-1 text-primary-900
          py-2 px-3 rounded-2xl shadow-lg
          bg-zinc-100 hover:bg-zinc-300
          transition ease-in duration-100"
          type="button"
          @click="goToAnime(id)"
        >
          <Icon icon="ic:round-add" class="text-lg"/>
          Add to Favorites
        </button>

      </div>

      <div 
        class="text-[.95rem] text-left 
        max-h-[7rem] xl:max-h-fit overflow-auto
        leading-[1.2] xl:leading-[1.4] font-thin
        max-w-[70ch] xl:overflow-hidden
        anime-description pr-2

        "
        :style="`
          display: -webkit-box;
          -webkit-line-clamp: 14; 
          -webkit-box-orient: vertical;
        `"
      >
        {{ description }}
      </div>

    </div>

  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { inject } from 'vue';

const { 
  id, description, stats,
  poster, name 
} = inject('anime-content').value;


const props = defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  poster: {
    type: String,
  },
  description: {
    type: String,
  },
  stats: {
    type: Array,
  }
});



</script>


<style scoped>

  .anime-description::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .anime-description::-webkit-scrollbar { 
    width: .8rem; 
  }
  .anime-description::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, .7);
    border-color: transparent;
  }

</style>

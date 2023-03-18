<template>
  
  <div data-card
    class="shadow-lg max-w-[17rem] w-full
    relative rounded-xl overflow-hidden
    bg-zinc-900 break-words
    "
  >

    <div data-poster
      class="
      relative isolate overflow-hidden
      after:absolute after:content-[' ']
      after:h-[45%] after:bottom-0 after:top-auto
      after:w-full after:pointer-events-none
      after:bg-gradient-to-b from-transparent to-zinc-900
      pb-[130%] transition ease-in duration-100
      "
    >
      <span v-if="info.rating"
        class="
        absolute left-[.7rem] top-[.7rem]
        px-2 py-[.15rem] shadow-md z-10
        bg-accent-400 rounded-lg text-center text-[.9rem]
        "
      >
        {{ info.rating }}
      </span>
      <span v-if="info.episodes"
        class="
        absolute bottom-[1rem] right-[.7rem]
        bg-[hsla(0,0%,0%,.7)] py-[.2rem] px-2
        rounded-lg text-sm shadow-md z-10
        "
      >
        Ep {{ info.episodes }}
      </span>

      <img 
        class="
        absolute inset-0 cursor-pointer w-full h-full
        transition ease-in duration-100
        "
        :src="info.poster" 
        :alt="info.name"
        @click="goToAnime(info.id)"
        :title="info.name"
      />
    </div>

    <div data-info class="py-3 px-3 w-full">
      <p 
        class="
        text-[1.07rem] leading-[1.06] w-fit text-ellipsis
        cursor-pointer hover:text-accent-200 pb-4
        transition ease-in duration-100 h-[37px]
        "
        :title="info.name"
        style="
        display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
        overflow: hidden;"
        @click="goToAnime(info.id)"
      >
        {{ info.name }}
      </p>

      <div 
        class="
        mt-2 w-full text-sm select-none
        "
        style="
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        "
      >
        <span 
          v-if="info.type" 
          class="inline-block
          text-neutral-400 whitespace-nowrap
          "
        >
          {{ info.type }}
        </span>

        <span class="inline-block align-middle">
          <Icon :icon="'bi:dot'" class="text-neutral-400 text-lg"/>
        </span>

        <span 
          v-if="info.duration" 
          class="inline-block
          text-neutral-400 whitespace-nowrap
          "
        >
          {{ info.duration }}
        </span>
      </div>
    </div>


  </div>

</template>


<script setup>
import goToRoute from '@/composables/goToRoute';
import { Icon } from '@iconify/vue';

const { goToAnime } = goToRoute();

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
})


</script>


<style></style>

<!-- {
  "id": "fullmetal-alchemist-brotherhood-1",
  "name": "Fullmetal Alchemist: Brotherhood",
  "poster": "https://img.zorores.com/_r/300x400/100/0d/2d/0d2d0a1d4276e7e2595702dc4cebbda9/0d2d0a1d4276e7e2595702dc4cebbda9.jpeg",
  "duration": "24m",
  "type": "TV",
  "aboutPage": "https://zoro.to/fullmetal-alchemist-brotherhood-1",
  "rating": "18+",
  "episodes": "64/64"
} -->

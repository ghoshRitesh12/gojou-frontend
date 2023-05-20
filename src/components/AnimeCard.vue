<template>
  
  <div data-card
    class=" 
    min-w-[9rem] w-full
    relative rounded-xl overflow-hidden
    bg-zinc-900 break-words shadow-lg
    transition ease-in duration-100 anime_card
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
        px-2 py-[.15rem] shadow-md z-50
        bg-accent-400 rounded-lg text-center text-[.9rem]
        "
      >
        {{ info.rating }}
      </span>
      <span v-if="info.episodes"
        class="
        absolute bottom-[.5rem] right-[.7rem]
        bg-[hsla(0,0%,0%,.7)] py-[.2rem] px-2
        rounded-lg text-sm shadow-md z-50
        "
      >
        Ep {{ info.episodes }}
      </span>

      <RouterLink 
        :to="`/anime/info/${info.id}`"
        class="absolute inset-0 w-full h-full overflow-hidden"
        :title="info.name"
      >
        <img 
          class="
          absolute pointer-events-none w-full h-full
          object-top inset-0
          transition ease-in duration-100
          "
          :src="info.poster" 
          :alt="info.name"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          
        />
      </RouterLink>
    </div>

    <div data-info class="py-3 px-3 w-full">
      <RouterLink 
        class="
        leading-[1.1] w-fit text-ellipsis overflow-hidden
        cursor-pointer hover:text-accent-200 pb-4
        md:text-[1.02rem] lg:text-[1.07rem] lg:leading-[1.05]
        transition ease-in duration-100 h-[37px]
        "
        :title="info.name"
        :style="`
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        `"
        :to="`/anime/info/${info.id}`"
      >
        {{ info.name }}
      </RouterLink>

      <div 
        class="
        mt-2 w-full text-sm select-none text-neutral-400 font-semibold
        "
        :style="`
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        `"
      >
        <span 
          v-if="info.type" 
          class="inline"
        >
          {{ info.type }}
        </span>

        <span class="inline-block align-middle">
          <Icon :icon="'bi:dot'" class="text-lg"/>
        </span>

        <span 
          v-if="info.duration" 
          class="inline"
        >
          {{ info.duration }}
        </span>
      </div>
    </div>

  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
})


</script>


<style scoped>

  @media (min-width: 382px) {
    .anime_card[data-card] {
      max-width: 13.5rem;
    }
  }

</style>


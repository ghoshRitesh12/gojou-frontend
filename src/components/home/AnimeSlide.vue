<template>

  <section class="overflow-hidden">
    <div class="
      relative h-full w-full isolate
      before:absolute before:content-['']
      before:top-auto before:bottom-0 before:h-full
      before:w-full before:pointer-events-none
      before:bg-gradient-to-l from-transparent to-primary-900
      after:absolute after:content-[' '] bg-primary-900
      after:top-auto after:bottom-0 after:h-full
      after:w-full after:pointer-events-none
      after:bg-gradient-to-b overflow-hidden
      ">
      <img 
      class="w-full h-full object-center" 
        :src="props.poster" 
        :alt="props.name" 
        decoding="async"
        fetchpriority="high"
        role="presentation"
      />
    </div>

    <div
      class="
      flex flex-col gap-4 max-w-full w-fit
      absolute bottom-4 md:bottom-8
      pl-5 md:pl-8 pr-32"
    >
      <div 
        class="text-accent-200 md:font-semibold mb-[-.5rem] md:mb-0" 
        style="font-size: clamp(.9rem, 4vmin, 1.15rem);"
      >
        #{{ props.rank }} {{ props.category }}
      </div>

      <p 
        class="
        break-words max-w-[30ch] md:mb-2 leading-[1.1]
        font-semibold overflow-hidden
        " 
        :style="`
          display: -webkit-box; -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical;
          font-size: clamp(1.15rem, 4vmin, 2.5rem);
        `"
      >
        {{ props.name }}
      </p>

      <div 
        class="max-w-[95ch] leading-4 md:leading-normal overflow-hidden" 
        :style="`
          display: -webkit-box; 
          -webkit-line-clamp: 3; 
          -webkit-box-orient: vertical;
          font-size: clamp(.8rem, 2.5vmin, 1rem)
        `"
      >
        {{ props.description }}
      </div>


      <div 
        class="flex items-center gap-4 mt-1 md:mt-2 font-semibold" 
        style="font-size: clamp(.85rem, 2.5vmin, 1rem)"
      >
        <button 
          class="
          flex items-center gap-1
          py-2 px-3 md:px-4 shadow-lg bg-accent-300
          hover:bg-accent-200 rounded-2xl text-primary-900
          transition ease-in duration-100"
          type="button"
        >
          <Icon icon="material-symbols:play-arrow-rounded" class="text-lg" />
          Watch
        </button>
        
        <RouterLink 
          class="
          flex items-center gap-1
          py-2 px-3 rounded-2xl shadow-lg
          bg-zinc-700 hover:bg-zinc-600
          transition ease-in duration-100"
          type="button"
          :to="`/anime/info/${props.id}`"
        >
          Details
        </RouterLink>

      </div>
    </div>

  </section>

</template>


<script setup>
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';

const props = defineProps({
  rank: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }

})


</script>


<style></style>

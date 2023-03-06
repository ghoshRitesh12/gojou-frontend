<template>

  <section>
    <div class="
      relative h-full w-full isolate
      before:absolute before:content-['']
      before:top-auto before:bottom-0 before:h-full
      before:w-full before:pointer-events-none
      before:bg-gradient-to-l from-transparent to-zinc-900
      after:absolute after:content-[' ']
      after:top-auto after:bottom-0 after:h-full
      after:w-full after:pointer-events-none
      after:bg-gradient-to-b overflow-hidden
      ">
      <img class="w-full h-full " :src="props.poster" :alt="props.name" />
    </div>

    <div
      class="
      flex flex-col gap-4 max-w-full w-fit
      absolute bottom-5 md:bottom-8
      pl-5 md:pl-8 pr-32"
    >
      <div 
        class="text-accent-200" 
        style="font-size: clamp(.9rem, 4vmin, 1.15rem);"
      >
        #{{ props.rank }} Spotlight
      </div>

      <p 
        class=" break-words max-w-[30ch] md:mb-2" 
        style="font-size: clamp(1.15rem, 4.7vmin, 2.5rem);
        line-height: 1.05;"
      >
        {{ props.name }}
      </p>

      <p 
        class="max-w-[95ch]" 
        style="
        display: -webkit-box; -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical; overflow: hidden;
        font-size: clamp(.8rem, 2.5vmin, 1rem)"
      >
        {{ props.description }}
      </p>


      <div 
        class="flex items-center gap-3 md:gap-4 md:mt-2" 
        style="font-size: clamp(.78rem, 2.5vmin, 1rem)"
      >
        <button 
          class="
          flex items-center gap-1
          py-2 px-4 shadow-lg bg-accent-300
          hover:bg-accent-200 rounded-2xl text-primary-900
          transition ease-in duration-100"
          type="button"
        >
          <Icon icon="material-symbols:play-arrow-rounded" />
          Watch
        </button>

        <button 
          class="shadow-lg
          py-2 px-3 rounded-2xl
          bg-zinc-700 hover:bg-zinc-600
          transition ease-in duration-100"
          type="button"
          @click="goToAnime"
        >
          Details
        </button>

      </div>
    </div>

  </section>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
const router = useRouter();

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
})

const goToAnime = () => router.push(`/anime/info/${props.id}`);

</script>


<style></style>

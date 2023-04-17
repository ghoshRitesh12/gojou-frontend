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
      "
    >
      <img class="w-full rounded-xl" :src="info.poster" :alt="info.name">
    </div>


    <div data-info class="text-center md:text-left">

      <div class="font-semibold">

        <div
          class="text-white leading-[1.2] max-w-[30ch]"
          style="font-size: clamp(1.7rem, 4vmin, 2.2rem)"
        >
          {{ info.name }}
        </div>

        <div class="text-neutral-300 text-[.88rem] md:text-base mt-2">
          <template v-for="stat, index in info.stats">
            <span class="whitespace-nowrap inline-block"> {{ stat }} </span>
            <Icon
              v-if="index !== info.stats.length - 1"
              :icon="'bi:dot'" 
              class="text-lg inline-block"
            />
          </template>
        </div>

      </div>

      <div 
        class="
        flex items-center gap-4 my-8 w-fit 
        mx-auto md:w-full font-semibold
        " 
        style="font-size: clamp(.85rem, 2.5vmin, 1rem)"
      >
        <button 
          class="
          flex items-center gap-1 text-primary-900
          py-2 px-3 rounded-2xl shadow-lg
          bg-zinc-100 hover:bg-zinc-300
          transition ease-in duration-100"
          type="button"
        >
          <Icon icon="ic:round-add" class="text-lg"/>
          Add to Favorites
        </button>

        <button 
          class="
          flex items-center gap-1
          py-2 px-4 shadow-lg bg-accent-300
          hover:bg-accent-200 rounded-2xl text-primary-900
          transition ease-in duration-100"
          type="button"
          @click="router.push('/room/6234181754377342')"
        >
          <Icon icon="material-symbols:play-arrow-rounded" class="text-lg" />
          Watch
        </button>

      </div>

      <div 
        class="
        text-[.95rem] text-left
        max-h-[7rem] sm:max-h-[9rem] xl:max-h-fit overflow-auto
        leading-[1.2] xl:leading-[1.4]
        max-w-[75ch] xl:overflow-hidden
        anime-description pr-2
        "
      >
        <span class="xl:inline hidden">{{ description }}</span>
        <span class="xl:hidden inline">{{ info.description }}</span>
        <span 
          class="
          hidden xl:inline ml-[.1rem] text-zinc-300/90
          font-semibold cursor-pointer select-none
          "
          @click="showMoreDescription"
          v-if="info.description?.length > minCharNum"
        >
          ...<span>{{ showDescText }}</span>
        </span>
      </div>

    </div>

  </div>

</template>


<script setup>
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import { inject, computed, ref } from 'vue';

const router = useRouter();

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


const animeInfo = inject('animeInfo');
const info = computed(() => animeInfo.value)

const minCharNum = 550;
const maxChar = ref(minCharNum);

const description = computed(() => info.value.description?.slice(0, maxChar.value));
const descriptionLength = computed(() => info.value.description?.length)

const showDescText = ref('Read more');

const showMoreDescription = () => {
  if(showDescText.value.includes('more')) {
    showDescText.value = 'Show less'
    maxChar.value = descriptionLength.value;
    return;
  }
  showDescText.value = 'Read more'
  maxChar.value = minCharNum;
}


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

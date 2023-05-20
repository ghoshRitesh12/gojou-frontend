<template>

  <div 
    class="flex items-start gap-5 md:gap-10 flex-grow-0
    flex-nowrap md:flex-nowrap
    "
  >

    <div 
      class="
      flex-shrink-0 flex-grow-0 shadow-xl 
      max-w-[5rem] sm:max-w-[6rem] md:max-w-[8rem] 
      overflow-hidden relative h-fit rounded-xl
      "
      style="transition: .3s ease max-width;"
    >
      <img class="w-full rounded-xl" :src="props.poster" :alt="props.name">
    </div>


    <div data-info class="text-left md:text-left">

      <div class="font-semibold">

        <div
          class="text-white leading-[1.2] max-w-[30ch]"
          style="font-size: clamp(1.7rem, 4vmin, 2rem)"
        >
          {{ props.name }}
        </div>

        <div 
          class="
          text-neutral-300 text-[.88rem]
          md:text-base mt-2 mb-4"
        >
          <template v-for="stat, index in props.stats">
            <span class="whitespace-nowrap inline-block"> 
              {{ index !== 1 ? stat : `Ep ${stat}` }} 
            </span>
            <Icon
              v-if="index !== props.stats.length - 1"
              :icon="'bi:dot'" 
              class="text-lg inline-block"
            />
          </template>
        </div>

      </div>


      <div 
        class="
        text-[.95rem] text-left
        max-h-[9rem] xl:max-h-fit
        leading-[1.2] xl:leading-[1.4]
        max-w-[100%] md:max-w-[90%] xl:overflow-hidden
        anime-description pr-2 overflow-auto
        "
      >
        <span class="xl:inline hidden">{{ desc }}</span>
        <span class="xl:hidden inline">{{ props.description }}</span>
        <span 
          class="
          hidden xl:inline ml-[.1rem] text-zinc-300/90
          font-semibold cursor-pointer
          "
          @click="showMoreDescription"
          v-if="props.description.length > minCharNum"
        >
          ...<span>{{ showDescText }}</span>
        </span>
      </div>

    </div>

  </div>

</template>


<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';


const props = defineProps({
  id: String,
  name: String,
  poster: String,
  description: String,
  stats: Array,
})


const minCharNum = 550;
const maxChar = ref(minCharNum);

const desc = computed(() => props.description?.slice(0, maxChar.value));
const descriptionLength = computed(() => props.description?.length)

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

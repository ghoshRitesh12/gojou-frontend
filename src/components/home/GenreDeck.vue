<template>
  <div data-genres-deck
    class="
    bg-zinc-900 rounded-xl overflow-hidden py-3
    "
  >

    <div 
      class="
      text-2xl text-accent-200 rounded-xl
      pl-4 pb-3 shadow-zinc-800 shadow-sm
      font-semibold
      "
    >
      Genres
    </div>

    <div class="flex gap-2 items-center flex-wrap p-4">
      <GenreCard
        v-for="genre, index in slicedGenres" 
        :key="index"
        :name="genre"
      />
    </div>

    <div
      class="
      bg-zinc-800 text-center py-2 rounded-xl cursor-pointer
      hover:bg-zinc-700 transition ease-in duration-100 mx-4 
      text-zinc-400
      " 
      role="button"
      tabindex="-1"
      @click="showGenres"
    >
      {{ showText }}
    </div>

  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { computed } from 'vue';
import GenreCard from './GenreCard.vue';

const props = defineProps({
  genres: {
    type: Array,
    required: true
  },
  length: {
    type: Number,
    required: true
  }
})

const showText = ref('Show more')

const maxLimit = 21;
const min = ref(0);
const max = ref(maxLimit);


const slicedGenres = computed(() => props.genres.slice(min.value, max.value))


const showGenres = () => {
  if(showText.value.includes('more')) {
    max.value = props.length;
    showText.value = 'Show less'
    return;
  }
  max.value = maxLimit;
  showText.value = 'Show more'
}


</script>


<style>
  [data-genres-deck] [data-genre]:nth-of-type(8n) {
    color: #00c2c2;
  }
  [data-genres-deck] [data-genre]:nth-of-type(8n+1) {
    color: #4ec7ff;
  }
  [data-genres-deck] [data-genre]:nth-of-type(8n+2) {
    color: #fff172ea;
  }
  [data-genres-deck] [data-genre]:nth-of-type(8n+3) {
    color: #06d485;
  }
  [data-genres-deck] [data-genre]:nth-of-type(8n+4) {
    color: #db80ff;
  }
  [data-genres-deck] [data-genre]:nth-of-type(8n+5) {
    color: #ff629e;
  }
  [data-genres-deck] [data-genre]:nth-of-type(8n+6) {
    color: #ffa742;
  }
  [data-genres-deck] [data-genre]:nth-of-type(8n+7) {
    color: #ffafa1;
  }
</style>

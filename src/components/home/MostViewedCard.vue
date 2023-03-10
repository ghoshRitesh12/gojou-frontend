<template>

  <div data-most-viewed-card
    class="
    group flex items-center px-4 pb-5

    "
  >

    <div 
      :class="`${
        ['01','02','03'].includes(props.rank) 
          ? 
        'text-accent-200 group-hover:text-accent-200' : 'text-zinc-500'
      }`"
      class="
      group-hover:text-zinc-50 text-2xl pr-6 pl-1
      "
    >
      {{ props.rank }}
    </div>

    <div class="flex items-start" data-img-txt-wrap>

      <div class="max-w-[3rem] rounded-lg flex-shrink-0 overflow-hidden">
        <img 
          :src="props.poster" 
          :alt="props.name"
        />
      </div>

      <div data-text class="pl-4">
        <p
          class="
          text-[1.05rem] hover:text-accent-200
          cursor-pointer leading-[1.1] mb-1
          transition ease-in duration-100
          "
          style="
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          "
          :title="props.name"
          @click="goToAnime(props.id)"
        >
          {{ props.name }}
        </p>

        <div class="flex text-zinc-500 text-sm">
          <span class="flex items-center gap-1">
            <Icon icon="ic:round-favorite"/>
            {{ props.hearts }}
          </span>
          <span class="flex items-center gap-1 ml-3">
            <Icon icon="ic:baseline-remove-red-eye"/>
            {{ props.views }}
          </span>
        </div>

      </div>

    </div>
    
  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import goToRoute from '@/composables/goToRoute';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  rank: {
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
  hearts: {
    type: String,
    required: true
  },
  views: {
    type: String,
    required: true
  },
})

const { goToAnime } = goToRoute();
 
// {
//   "id": "one-piece-100",
//   "rank": 1,
//   "name": "One Piece",
//   "poster": "https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg",
//   "views": "289,738",
//   "hearts": "318,874"
// }

</script>


<style>

</style>

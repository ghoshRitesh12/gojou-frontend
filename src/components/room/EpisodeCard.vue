<template>

  <div 
    data-episode
    :title="props.name"
    class="
    relative isolate bg-zinc-900 text-zinc-100
    cursor-pointer align-middle w-full max-w-full
    px-4 py-3 overflow-hidden rounded-xl
    after:absolute after:left-0 after:top-0
    after:h-full after:w-[75%] xl:after:w-[100%] after:z-[-1]
    after:bg-gradient-to-r from-accent-400/40 to-transparent
    transition ease-in duration-100
    "
    :class="props.activeEp ? `group after:content-[' ']` : `after:content-[] hover:bg-zinc-800`"
    @click="changeEpisode"
  >

    <div class="flex items-center w-full">
      <span
        class="whitespace-nowrap"
      >
        Ep {{ props.number }}
      </span>

      <span
        class="
        ml-3 overflow-hidden
        "
        :style="`
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        `"
      >
        {{ props.name }}
      </span>

      <span
        v-if="props.activeEp"
        class="
        align-middle text-lg 
        ml-auto pl-3 flex-shrink-0
        "
      >
        <Icon 
          icon="material-symbols:play-circle-rounded" 
          class="inline-block text-zinc-100"
        />
      </span>
    </div>

  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { useRoomAnimeStore } from '@/stores/roomAnimeStore.js';

const roomAnimeStore = useRoomAnimeStore();

const props = defineProps({
  id: {
    type: String
  },
  number: {
    type: Number
  },
  name: {
    type: String
  },
  isFiller: {
    type: Boolean,
    default: false
  },
  activeEp: {
    type: Boolean,
    default: false
  }
})


const changeEpisode = () => {
  roomAnimeStore.setRoomAnimeConfig('epId', props.id)
  roomAnimeStore.setRoomAnimeConfig('epNo', props.number)
}


</script>


<style>

</style>

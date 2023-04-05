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
        ml-3 xl:max-w-[12rem] w-full 2xl:max-w-[16rem]
        whitespace-nowrap text-ellipsis overflow-hidden
        "
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
          class="inline-block text-accent-100"
        />
      </span>
    </div>

  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { useRoomStore } from '@/stores/roomStore';

const roomStore = useRoomStore();

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
  roomStore.changeEpisode(props.id, props.number)

}


</script>


<style>

</style>

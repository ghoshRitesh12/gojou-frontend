<template>

  <div 
    class="
    py-2 px-3 rounded-xl
    transition ease-in duration-100 font-semibold
    cursor-pointer md:px-4 select-none server
    "
    :class="props.isActive ? 'bg-accent-200 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'"
    @click="changeServer"
    style="text-transform: capitalize;"
  >

    {{ props.name }}

  </div>

</template>


<script setup>
import { useRoomStore } from '@/stores/roomStore';

const roomStore = useRoomStore();

const props = defineProps({
  name: String,  
  isActive: Boolean,
  serverId: String,
  serverType: String
})


const changeServer = () => {
  roomStore.changeEpisodeServer(props.name, props.serverType);
}

</script>

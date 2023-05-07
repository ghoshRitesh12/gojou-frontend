<template>

  <div 
    class="
    flex items-center gap-4 sm:gap-8
    flex-wrap md:flex-nowrap
    justify-center lg:justify-start 
    px-4 py-3 md:py-5 bg-primary-900 
    server-deck
    "
  >

    <div data-server-type
      class="flex items-center whitespace-nowrap"
    >
      <Icon 
        :icon="serverTypeIcon"
        class="text-lg text-accent-200 flex-shrink-0"
      />

      <div class="ml-2 text-zinc-300">
        {{ serverType?.toUpperCase() }}
      </div>
    </div>

    <div class="flex gap-x-3 gap-y-3 flex-wrap md:gap-4">
      <VideoServerCard
        v-for="server in servers" 
        :key="serverType + server.serverName"
        :server-id="serverType + server.serverName"
        :name="server.serverName" 
        :server-type="serverType"
        :is-active="(serverType + server.serverName) === activeServerId"
      />
    </div>

    <div>{{ roomAnimeStore.iframeSrc }}</div>

  </div>

</template>


<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import VideoServerCard from './VideoServerCard.vue';

import { useRoomAnimeStore } from '@/stores/roomAnimeStore';

const roomAnimeStore = useRoomAnimeStore();

defineProps({
  servers: {
    type: Array
  },
  serverType: {
    type: String
  },
  serverTypeIcon: {
    type: String,
  }
})

const activeServerId = computed(() => (
  roomAnimeStore.anime.epCategory + roomAnimeStore.anime.epServer
))


</script>


<style>

</style>

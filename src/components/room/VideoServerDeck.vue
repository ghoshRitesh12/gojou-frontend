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
        {{ serverType?.toUpperCase() }}:
      </div>
    </div>

    <div class="flex gap-x-3 gap-y-3 flex-wrap md:gap-4">
      <VideoServerCard
        v-for="server, index in servers" 
        :key="server.serverName"
        :name="server.serverName" 
        :is-active="index === 0 ? true : false"
      />
    </div>

  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import VideoServerCard from './VideoServerCard.vue';

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

</script>


<style>

</style>

<template>

  <div>

    <div 
      class="text-accent-200 font-semibold mb-4"
      style="font-size: clamp(1.35rem, 3vmin, 1.7rem);"
    >
      {{ name }}
    </div>
        

    <div 
      data-room-deck
      class="
      grid gap-x-6 gap-y-8
      "
      :style="`
        grid-template-columns: repeat(auto-fit, minmax(var(--min-width, 18rem), 1fr))
      `"
    >

      <RoomCard
        v-for="room in rooms"
        :key="room.roomId"
        :name="room.name" :room-id="room.roomId"
        :avatar="room.avatar" :members="room.members"
        :creator="room.admin.name" :time="useTimeAgo(room.createdAt).value"
        :creator-dp="room.admin.profilePicture"
      />

    </div>

  </div>

</template>


<script setup>
import { useTimeAgo } from '@vueuse/core';
import RoomCard from './RoomCard.vue';

defineProps({
  name: String,
  rooms: Array
})



</script>


<style scoped>

  @media (min-width: 768px) {
    [data-room-deck] {
      --min-width: 20rem;
    }
  }


</style>

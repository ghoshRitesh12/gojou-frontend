<template>

  <div data-room-deck-wrap>

    <div 
      class="text-accent-200 font-semibold mb-4"
      style="font-size: clamp(1.35rem, 3vmin, 1.7rem);"
    >
      {{ props.name }}
    </div>
        

    <div 
      data-room-deck
      class="
      grid gap-x-6 gap-y-8
      "
    >

      <RoomCard
        v-for="room in props.rooms"
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
import { ref } from 'vue';
import { useTimeAgo } from '@vueuse/core';
import RoomCard from './RoomCard.vue';

const props = defineProps({
  name: String,
  rooms: Array
})

const maxSize = ref('1fr');

if(props.rooms.length <= 4) {
  maxSize.value = '22.5rem';
}


</script>


<style scoped>

  [data-room-deck] {
    --max: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(var(--min-width, 18rem), var(--max)))
  }

  @media (min-width: 648px) {
    [data-room-deck] {
      --max: v-bind(maxSize);
    }
  }

  @media (min-width: 768px) {
    [data-room-deck] {
      --min-width: 20rem;
    }
  }

</style>

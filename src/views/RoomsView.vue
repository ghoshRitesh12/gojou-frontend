<template>
  <Suspense>

    <template #default>

      <div 
        class="
        relative
        px-4 pt-6 pb-[5rem] md:pb-14 lg:px-6
        "
      >

        <div 
          :class="(
            Object.keys(roomStore.eachRoomInfo).length > 0 ? 
            'rooms-container' : ''
          )"
        >

          <template v-for="roomDeck in roomStore.roomDecks">
            <RoomDeck
              v-if="roomDeck.rooms.length > 0"
              :key="roomDeck.name"
              :name="roomDeck.name"
              :rooms="roomDeck.rooms"
              :class="roomDeck.style || ''"
            />
          </template>

        </div>

        <RoomInfo
          v-if="Object.keys(roomStore.eachRoomInfo).length > 0"
        />

      </div>

    </template>

    <template #fallback>
      <p>...loading</p>
    </template>

  </Suspense>
</template>


<script setup>
import { ref } from 'vue';
import UserAPI from '@/services/userAPI';
import RoomDeck from '@/components/rooms/RoomDeck.vue';
import RoomInfo from '@/components/rooms/RoomInfo.vue';
import useRoomStore from '@/stores/roomStore';

const roomStore = useRoomStore();

roomStore.getBrowseRooms();





</script>


<style scoped>


  /* md */
  @media (min-width: 768px) {
    .rooms-container {
      padding-right: 20rem;
    } 
  }
  
  /* xl */
  @media (min-width: 1280px) {
    .rooms-container {
      padding-right: 22rem;
    } 
  }

  /* 2xl */
  @media (min-width: 1536px) {
    .rooms-container {
      padding-right: 27rem;
    } 
  }


</style>

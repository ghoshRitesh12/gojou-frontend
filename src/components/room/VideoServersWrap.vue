<template>
  <Suspense>

    <template #default>

      <div 
        v-if="Object.keys(roomAnimeStore.allServers).length > 1"
        class="
        flex flex-wrap select-none
        relative z-20 overflow-hidden rounded-2xl my-6
        border-x-0 border-y-[1px] md:border-[1px] 
        border-zinc-600 bg-zinc-900
        "
      >

        <div 
          class="
          flex-grow 2xl:flex-grow-0 grid place-items-center
          px-4 py-3 bg-zinc-900 text-zinc-200 text-center
          "
        >
          <div class="inline-block text-[.95rem]">

            <div class="mt-auto">You are watching</div>
            <div class="font-semibold mb-3 text-accent-200">
              Episode <span> {{ roomAnimeStore.anime.epNo }} </span>
            </div>
      
            <div class="text-[.9rem] max-w-full md:max-w-[25ch] mt-auto leading-[1.1]">
              In case current server doesn't work, switch to other servers.
            </div>

          </div>

        </div>

        <div 
          class="
          flex justify-center flex-col
          flex-grow rounded-2xl overflow-hidden bg-primary-900
          "
        >
          
          <VideoServerDeck
            v-if="roomAnimeStore.allServers.sub.length > 0"
            :servers="roomAnimeStore.allServers.sub"
            :server-type="'sub'"
            :server-type-icon="'fluent:closed-caption-32-regular'"
          />
          
          <VideoServerDeck
            v-if="roomAnimeStore.allServers.dub.length > 0"
            :servers="roomAnimeStore.allServers.dub"
            :server-type="'dub'"
            :server-type-icon="'tabler:microphone'"
            class="
            border-accent-100/50 border-t-[1px] border-dashed
            "
            :style="`
              border-top-width: ${roomAnimeStore.allServers.sub.length < 1 ? '0px' : '' };
            `"
          />
        </div>

        
      </div>

    </template>

    <template #fallback>
      <p>loading</p>
    </template>

  </Suspense>
</template>


<script setup>
import { ref } from 'vue';
import VideoServerDeck from './VideoServerDeck.vue';
import AnimeAPI from '@/services/animeAPI';
import { useRoomAnimeStore } from '@/stores/roomAnimeStore';

const roomAnimeStore = useRoomAnimeStore();


</script>


<style></style>

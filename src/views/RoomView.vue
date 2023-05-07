<template>
  <Suspense>

    <template #default>
       
      <div
        data-room
        class="
        xl:flex justify-center items-start
        relative px-0 pb-[5rem] md:pb-14 md:px-2 lg:p-6
        "
      >

        <div 
          class="
          flex-[75%] 2xl:flex-[75%] 2xl:px-2
          relative col-1
          "
        >

          <div video-wrapper class="2xl:mt-3 relative isolate">
            <VideoPlayer/>

            <div data-cover-poster
              v-if="Object.keys(roomAnimeData).length > 0"
              class="
              absolute top-0 bg-white/50 isolate
              bg-cover bg-center bg-no-repeat z-[-1]
              w-full h-full opacity-[.4] scale-[1.2]
              "
              style="filter: blur(4rem)"
              :style="`
                background-image: url('${roomAnimeData?.info?.poster}');
              `"
            >
            </div>
          </div>

          <Teleport 
            v-if="portalChatToMobile" 
            v-show="viewInnerWidth < 1280"
            :to="portalChatToDesktop" 
            :disabled="viewInnerWidth < 1280"
          >
            <div id="chat-wrap-mobile" class="relative my-4 lg:my-6"></div>
          </Teleport>

          <VideoServersWrap/>

          <Teleport 
            v-if="portalEpisodeWrapToMobile" 
            v-show="viewInnerWidth < 1280"
            :to="portalEpisodeWrapToDesktop" 
            :disabled="viewInnerWidth < 1280"
          >
            <div id="episodes-wrap-mobile" class="relative my-4 lg:my-6"></div>
          </Teleport>

          <SeasonsDeck
            v-if="roomAnimeData.seasons"
            :seasons="roomAnimeData.seasons"
            class="px-4 lg:px-0 my-2 overflow-hidden"
          />

          <RoomAnimeInfo
            v-if="Object.keys(roomAnimeData).length > 0"
            :id="roomAnimeData.info.id"
            :name="roomAnimeData.info.name"
            :poster="roomAnimeData.info.poster"
            :description="roomAnimeData.info.description"
            :stats="roomAnimeData.info.stats"
            class="z-50 mt-12 px-4 lg:px-0"
          />

        </div>


        <div 
          class="
          flex-[32%] 2xl:flex-[30%] xl:pl-6
          relative z-50 col-2
          "
        >
          <div id="chat-wrap-desktop" class="relative z-50">
            <Teleport 
              v-if="portalChatToDesktop"
              v-show="viewInnerWidth >= 1280"
              :to="portalChatToMobile" 
              :disabled="viewInnerWidth >= 1280"
            >
              <ChatFrame class="xl:mt-0 2xl:mt-2"/>
            </Teleport>
          </div>

          <div id="episodes-wrap-desktop">
            <Teleport 
              v-if="portalEpisodeWrapToDesktop"
              v-show="viewInnerWidth >= 1280"
              :to="portalEpisodeWrapToMobile" 
              :disabled="viewInnerWidth >= 1280"
            >
              <EpisodesWrapper/>
            </Teleport>
          </div>

        </div>

      </div>

    </template>

    <template #fallback>
      <p>...loading</p>
    </template>

  </Suspense>
</template>


<script setup>
import { onUnmounted, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRoomAnimeStore } from '@/stores/roomAnimeStore.js';
import { storeToRefs } from 'pinia';

import VideoPlayer from '@/components/room/VideoPlayer.vue';
import VideoServersWrap from '@/components/room/VideoServersWrap.vue';
import ChatFrame from '@/components/room/ChatFrame.vue';
import EpisodesWrapper from '@/components/room/EpisodesWrapper.vue';
import SeasonsDeck from '@/components/animeInfo/SeasonsDeck.vue';
import RoomAnimeInfo from '@/components/room/RoomAnimeInfo.vue';

import AnimeAPI from '@/services/animeAPI';


const route = useRoute();

const roomAnimeStore = useRoomAnimeStore();

const { roomAnimeData } = storeToRefs(roomAnimeStore);

// roomAnimeStore.getRoomAnimeInfo()

// initing room & sse
roomAnimeStore.roomInit(route.params.roomId)


const portalChatToMobile = ref(null);
const portalChatToDesktop = ref(null);

const portalEpisodeWrapToMobile = ref(null);
const portalEpisodeWrapToDesktop = ref(null);

const viewInnerWidth = ref(0);

onMounted(() => {
  portalChatToMobile.value = '#chat-wrap-mobile'
  portalChatToDesktop.value = '#chat-wrap-desktop'

  portalEpisodeWrapToMobile.value = '#episodes-wrap-mobile'
  portalEpisodeWrapToDesktop.value = '#episodes-wrap-desktop'

  viewInnerWidth.value = window.innerWidth
})

const handleResize = e => viewInnerWidth.value = window.innerWidth

window.addEventListener('resize', handleResize)

onUnmounted(() => window.removeEventListener('resize', handleResize))

</script>


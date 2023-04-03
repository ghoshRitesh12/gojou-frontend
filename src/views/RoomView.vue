<template>
  
  <div
    data-room
    class="
    xl:flex justify-center items-start
    relative
    px-0 pb-4 md:px-2 lg:p-6
    "
  >

    <div 
      class="
      flex-[73%] 2xl:flex-[75%] 2xl:px-2
      relative col-1
      "
    >

      <div video-wrapper class="2xl:mt-3 relative isolate">
        <Video/>

        <div data-cover-poster
          class="
          absolute top-0 bg-white/50 isolate
          bg-cover bg-center bg-no-repeat z-[-1]
          w-full h-full opacity-[.4] scale-[1.2]
          "
          style="filter: blur(4rem)"
          :style="`
            background-image: url('${animeInfo.poster}');
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

      <VideoServersWrap
        :servers-info="serversInfo"
      />

      <Teleport 
        v-if="portalEpisodeWrapToMobile" 
        v-show="viewInnerWidth < 1280"
        :to="portalEpisodeWrapToDesktop" 
        :disabled="viewInnerWidth < 1280"
      >
        <div id="episodes-wrap-mobile" class="relative my-4 lg:my-6"></div>
      </Teleport>

      <!-- <Seasons/>-->
      <div data-anime-info></div>

    </div>


    
    <div 
      class="
      flex-[37%] 2xl:flex-[30%] xl:pl-6
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
          <EpisodesWrapper class="relative z-20"/>
        </Teleport>
      </div>

    </div>

  </div>

</template>


<script setup>
import { onUnmounted, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Video from '@/components/room/Video.vue';
import VideoServersWrap from '@/components/room/VideoServersWrap.vue';
import ChatFrame from '@/components/room/ChatFrame.vue';
import EpisodesWrapper from '@/components/room/EpisodesWrapper.vue';
import AnimeAPI from '@/services/animeAPI';

const route = useRoute();


const portalChatToMobile = ref(null);
const portalChatToDesktop = ref(null);

const portalEpisodeWrapToMobile = ref(null);
const portalEpisodeWrapToDesktop = ref(null);

const animeInfo = {
  "id": "naruto-677",
  "name": "Naruto",
  "description": "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.\n\nNow, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.",
  "poster": "https://img.zorores.com/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg",
  "stats": [
    "TV",
    "Ep 220 / 220",
    "23m"
  ]
}

const serversInfo = {
  "sub": [
    {
      "serverName": "Vidstreaming",
      "serverId": 4
    },
    {
      "serverName": "Vidcloud",
      "serverId": 1
    },
    {
      "serverName": "StreamSB",
      "serverId": 5
    },
    {
      "serverName": "Streamtape",
      "serverId": 3
    }
  ],
  "dub": [
    {
      "serverName": "Vidstreaming",
      "serverId": 4
    },
    {
      "serverName": "Vidcloud",
      "serverId": 1
    },
    {
      "serverName": "StreamSB",
      "serverId": 5
    },
    {
      "serverName": "Streamtape",
      "serverId": 3
    }
  ],
  "episodeId": "attack-on-titan-final-season-part-1-15548?ep=51474"
}


 
const viewInnerWidth = ref(0);

onMounted(() => {
  portalChatToMobile.value = '#chat-wrap-mobile'
  portalChatToDesktop.value = '#chat-wrap-desktop'

  portalEpisodeWrapToMobile.value = '#episodes-wrap-mobile'
  portalEpisodeWrapToDesktop.value = '#episodes-wrap-desktop'

  viewInnerWidth.value = window.innerWidth
})

const handleResize = (e) => {
  viewInnerWidth.value = window.innerWidth
}

window.addEventListener('resize', handleResize)

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)  
})



</script>


<style>

</style>

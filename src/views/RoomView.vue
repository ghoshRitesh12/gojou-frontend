<template>
  
  <div
    data-room
    class="
    xl:flex justify-center items-start
    relative
    px-0 pt-1 pb-4 md:px-2 lg:p-6
    "
  >

    <div 
      class="
      flex-[70%] 2xl:flex-[75%]
      relative col-1
      "
    >

      <div video-wrapper class="2xl:mt-3 2xl:px-2 relative isolate">
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
        v-if="portalToMobile" 
        v-show="viewInnerWidth < 1280"
        :to="portalToDesktop" 
        :disabled="viewInnerWidth < 1280"
      >
        <div id="chat-wrap-mobile" class="relative my-4 lg:my-6"></div>
      </Teleport>

      <!-- <PlayerServers/> -->
      <EpisodesWrapper class="relative z-20"/>
      <!-- <Seasons/> -->
      <div data-anime-info></div>

    </div>


    
    <div 
      class="
      flex-[37%] 2xl:flex-[30%] pl-6
      relative z-50 col-2
      "
    >
      <div id="chat-wrap-desktop" class="relative z-50">
        <Teleport 
          v-if="portalToDesktop"
          v-show="viewInnerWidth >= 1280"
          :to="portalToMobile" 
          :disabled="viewInnerWidth >= 1280"
        >
          <ChatFrame class="xl:mt-0 2xl:mt-2"/>
        </Teleport>
      </div>

    </div>

  </div>

</template>


<script setup>
import { onUnmounted, onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import AnimeAPI from '@/services/animeAPI';
import Video from '@/components/room/Video.vue';
import ChatFrame from '@/components/room/ChatFrame.vue';
import EpisodesWrapper from '@/components/room/EpisodesWrapper.vue';

const route = useRoute();


const portalToMobile = ref(null);
const portalToDesktop = ref(null);

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

 
const viewInnerWidth = ref(0);

onMounted(() => {
  portalToMobile.value = '#chat-wrap-mobile'
  portalToDesktop.value = '#chat-wrap-desktop'
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

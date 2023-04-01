<template>

  <div 
    data-video
    class="
    max-w-[60rem] aspect-video
    rounded-lg overflow-hidden
    bg-transparent
    "
    style="font-family: sans-serif;"
    ref="videoWrapper"
  >

    <video 
      v-if="!props.iframe"
      id="video" controls
      crossorigin="anonymous"
      :style="videoInlineStyles"
      class="
      
      max-w-full w-full aspect-video rounded-lg
      video-js
      "
    >
    </video>

    <iframe
      v-if="props.iframe"
      frameborder="0" referrerpolicy="strict-origin" 
      allow="autoplay; picture-in-picture; fullscreen"
      allowfullscreen mozallowfullscreen webkitallowfullscreen
      :src="props.iframeSrc || 'https://www.youtube-nocookie.com/embed/uuZE_IRwLNI'"
      class="
      max-w-full w-full rounded-lg
      plyr__video-embed
      "
      >
    </iframe>

    


  </div>


</template>


<script setup>
import { ref, onMounted } from 'vue';
import AnimeAPI from '@/services/animeAPI';
import { initVideoPlayer } from '@/helpers/videoPlayerInit.js';

const props = defineProps({
  iframe: {
    type: Boolean,
    default: false
  },
  iframeSrc: {
    type: String
  },
  videoSrc: {
    type: String
  },
  closedCaptions: {
    type: Array,
    default: []
  }
})



onMounted(async () => {
  const autoSrc = 'https://tc-1.dayimage.net/_v6/1ee9ea68e2568f86e51d18fdc2318e396c722121ef80d08b888715273c529a29069caec322204eb14889cdf9f55f30f3948c0fd0819ff2fa2b358227d5f7a2acf723f45bf3d83e765c9abec9bddea693becd07c8ff053c0491aef7406c3ebd46ce22422c871992349035e28ff75be894827596c0b1cf616499f2bbb8ead062af/master.m3u8';
  const closedCaptions = [
    {
      "url": "https://cc.zorores.com/c8/3f/c83f26f45874839e088c94dfe976aca1/c83f26f45874839e088c94dfe976aca1.vtt",
      "lang": "Arabic"
    },
    {
      "url": "https://cc.zorores.com/2a/af/2aafa9c0154daf7b4e2d517b91f0899a/eng-2.vtt",
      "lang": "English"
    },
    {
      "url": "https://cc.zorores.com/0d/9c/0d9c2219cd03879238d4380bb03660de/0d9c2219cd03879238d4380bb03660de.vtt",
      "lang": "English - English"
    },
    {
      "url": "https://cc.zorores.com/00/26/00266b9969337c816d516ea2ecf32ddb/00266b9969337c816d516ea2ecf32ddb.vtt",
      "lang": "French"
    },
    {
      "url": "https://cc.zorores.com/ef/4b/ef4be78d41d36e5cdd8f4f8b1123d0f5/ef4be78d41d36e5cdd8f4f8b1123d0f5.vtt",
      "lang": "German"
    },
    {
      "url": "https://cc.zorores.com/44/12/4412d1617a2d7b8723dff48e066a8669/4412d1617a2d7b8723dff48e066a8669.vtt",
      "lang": "Italian"
    },
    {
      "url": "https://cc.zorores.com/12/be/12be76cd552f031138813bea679fbe09/12be76cd552f031138813bea679fbe09.vtt",
      "lang": "Portuguese - Portugues"
    },
    {
      "url": "https://cc.zorores.com/05/17/051774be6c59c8cec1876fbb0f160711/051774be6c59c8cec1876fbb0f160711.vtt",
      "lang": "Russian"
    },
    {
      "url": "https://cc.zorores.com/98/a6/98a66850017b0ce01c01440b5487c4ea/98a66850017b0ce01c01440b5487c4ea.vtt",
      "lang": "Spanish - Espanol"
    },
    {
      "url": "https://cc.zorores.com/66/fd/66fd30124ac27ab605b724680276c7d5/66fd30124ac27ab605b724680276c7d5.vtt",
      "lang": "Spanish - Spanish (LA)"
    },
    {
      "url": "https://prev.zorores.com/_a_preview/ce/cea6aef711a4ce48dcbbb1ffa45428ee/thumbnails/sprite.vtt",
      "lang": "Thumbnails"
    }
  ]
  const videoElement = document.querySelector('#video');
  const videoWrapper = document.querySelector('[data-video]');

  const playerInit = initVideoPlayer({
    autoSrc, closedCaptions, 
    videoElement, videoWrapper
  });

  if(!playerInit) {
    
  }

})


const videoInlineStyles = `
  --plyr-color-main: #b963ff;
  --plyr-menu-background: hsla(180, 4%, 11%, .9);
  --plyr-menu-color: #fff;
  --plyr-menu-back-border-color: #000;
  --plyr-menu-arrow-color: #fff;
  --plyr-badge-text-color: #000;
  --plyr-badge-background: #fff;
  --plyr-control-radius: .5rem;
  --plyr-menu-radius: .75rem;
  --plyr-video-control-background-hover: #b963ff;
`;

</script>


<style></style>

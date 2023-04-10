<template>
  <Suspense>

    <template #default>

      <div 
        data-video-container
        class="
        w-full aspect-video bg-primary-900
        rounded-sm overflow-hidden
        bg-transparent relative
        "
        :style="`
          font-family: sans-serif;
          transition: .3s ease-in all;
        `"
      >


        <video 
          controls
          crossorigin="anonymous"
          :style="videoInlineStyles"
          class="
          rounded-sm h-full
          max-w-full w-full aspect-video
          video-js
          "
          ref="videoElement"

        >

          <track
            v-if="roomStore.videoSubtitles.length > 0"
            v-for="caption, index in roomStore.videoSubtitles"
            :key="index"
            :default="caption.lang.toLowerCase().includes('english')"
            kind="captions"
            :label="caption.lang"
            :src="caption.url"
            :srclang="caption.lang.substring(0, 3).toLowerCase()"
          />

        </video>



        <iframe
          frameborder="0" referrerpolicy="strict-origin" 
          allow="autoplay; picture-in-picture; fullscreen"
          mozallowfullscreen webkitallowfullscreen
          :src="iframeSrc"
          class="
          rounded-sm h-full
          max-w-full w-full aspect-video
          "
          ref="iframe"
          >
        </iframe>
        
      </div>


    </template>

    <template #fallback>
      <p>
        ...loading video
      </p>
    </template>

  </Suspense>
</template>


<script setup>
import { ref, onMounted, onUnmounted, computed, watchEffect, watch } from 'vue';
import { storeToRefs } from 'pinia';
import Plyr from 'plyr';
import Hls from 'hls.js';
import { initVideoPlayer, getPlyrOptions } from '@/helpers/videoPlayerInit.js';
import { useRoomStore } from '@/stores/roomStore';



const roomStore = useRoomStore();

const { iframeSrc, videoSources } = storeToRefs(roomStore);


// const autoSrc = 'https://tc-1.dayimage.net/_v6/1ee9ea68e2568f86e51d18fdc2318e396c722121ef80d08b888715273c529a29069caec322204eb14889cdf9f55f30f3948c0fd0819ff2fa2b358227d5f7a2acf723f45bf3d83e765c9abec9bddea693becd07c8ff053c0491aef7406c3ebd46ce22422c871992349035e28ff75be894827596c0b1cf616499f2bbb8ead062af/master.m3u8';


const videoElement = ref(null);
const hlsInstance = ref(null);

const iframe = ref(null);
const plyrElement = ref(null);



const addVideoPlayer = () => {
  if(iframe.value && plyrElement.value) {
    console.log('adding player');
    iframe.value.style.display = 'none';
    plyrElement.value.style.display = 'block';
  }
}

const removeVideoPlayer = () => {
  if(iframe.value && plyrElement.value) {
    console.log('UNINITING PLAYERRRRRRRRRRRRRRRRRRRRRRRRR');
    plyrElement.value.style.display = 'none';
    iframe.value.style.display = 'block'; 
  }
}

roomStore.fetchEpSource;



roomStore.$subscribe((mutation, state) => {
  console.log('vid: ', state.videoSources);
  console.log('iF: ', iframeSrc.value);

  if(state.iframeSrc !== null) {
    removeVideoPlayer();
    return;
  }
    
  addVideoPlayer();
  
})




const computedSrcLoad = computed(() => {
  hlsInstance.value.loadSource('')
  hlsInstance.value.loadSource(roomStore.videoSources)
})

onMounted(() => {

  // init player
  const initHls = () => {
    console.log('hls init() call');
      
    const videoEl = videoElement.value;

    if(Hls.isSupported()) {

      const hls = new Hls();

      // if(roomStore.videoSources)
      //   loadSource(roomStore.videoSources)
      hls.attachMedia(videoEl);
      
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        const plyrOptions = getPlyrOptions(hls);
        const player = new Plyr(videoEl, plyrOptions);
        plyrElement.value = videoElement.value.closest('.plyr.plyr--video');

        videoElement.value = player;
      })
      

      hlsInstance.value = hls;
    }

    return true;
  
  }

  initHls()


  watch(
    () => roomStore.loading, 
    () => {
      if(!roomStore.loading && roomStore.videoSources) {
        computedSrcLoad.value
      }
    }
  )


})

onUnmounted(() => {
  // uninit player
  (() => {
    const videoEl = videoElement.value;
    const hls = hlsInstance.value;
    
    if (hls && videoEl) {
      hls.detachMedia();
      hlsInstance.value = null;

      videoEl.destroy();
      videoElement.value = null;
    }
  })()

})



// const closedCaptions = [
//   {
//     "url": "https://cc.zorores.com/c8/3f/c83f26f45874839e088c94dfe976aca1/c83f26f45874839e088c94dfe976aca1.vtt",
//     "lang": "Arabic"
//   },
//   {
//     "url": "https://cc.zorores.com/2a/af/2aafa9c0154daf7b4e2d517b91f0899a/eng-2.vtt",
//     "lang": "English"
//   },
//   {
//     "url": "https://cc.zorores.com/0d/9c/0d9c2219cd03879238d4380bb03660de/0d9c2219cd03879238d4380bb03660de.vtt",
//     "lang": "English - English"
//   },
//   {
//     "url": "https://cc.zorores.com/00/26/00266b9969337c816d516ea2ecf32ddb/00266b9969337c816d516ea2ecf32ddb.vtt",
//     "lang": "French"
//   },
//   {
//     "url": "https://cc.zorores.com/ef/4b/ef4be78d41d36e5cdd8f4f8b1123d0f5/ef4be78d41d36e5cdd8f4f8b1123d0f5.vtt",
//     "lang": "German"
//   },
//   {
//     "url": "https://cc.zorores.com/44/12/4412d1617a2d7b8723dff48e066a8669/4412d1617a2d7b8723dff48e066a8669.vtt",
//     "lang": "Italian"
//   },
//   {
//     "url": "https://cc.zorores.com/12/be/12be76cd552f031138813bea679fbe09/12be76cd552f031138813bea679fbe09.vtt",
//     "lang": "Portuguese - Portugues"
//   },
//   {
//     "url": "https://cc.zorores.com/05/17/051774be6c59c8cec1876fbb0f160711/051774be6c59c8cec1876fbb0f160711.vtt",
//     "lang": "Russian"
//   },
//   {
//     "url": "https://cc.zorores.com/98/a6/98a66850017b0ce01c01440b5487c4ea/98a66850017b0ce01c01440b5487c4ea.vtt",
//     "lang": "Spanish - Espanol"
//   },
//   {
//     "url": "https://cc.zorores.com/66/fd/66fd30124ac27ab605b724680276c7d5/66fd30124ac27ab605b724680276c7d5.vtt",
//     "lang": "Spanish - Spanish (LA)"
//   },
//   {
//     "url": "https://prev.zorores.com/_a_preview/ce/cea6aef711a4ce48dcbbb1ffa45428ee/thumbnails/sprite.vtt",
//     "lang": "Thumbnails"
//   }
// ].filter(i => !i.lang.toLowerCase().includes('thumbnail'))

// const handleVideoKeyBinding = e => {
//   if(e.key === " " && !document.fullscreenElement) {
//     e.preventDefault();
//     // plyr.togglePlay();
//   }
// }





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
  --plyr-tooltip-radius: .5rem;
  --plyr-video-control-background-hover: #b963ff;
  --plyr-tooltip-background: hsla(180, 4%, 11%, .9);
  --plyr-tooltip-color: #fff;
`;


</script>


<style scoped>
.video-js .plyr__menu__container {
  max-height: 7rem !important;
  overflow-y: auto !important;

}

</style>

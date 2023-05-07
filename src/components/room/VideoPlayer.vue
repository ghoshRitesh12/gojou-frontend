<template>
  <Suspense>

    <template #default>

      <div 
        data-video-container
        class="
        w-full aspect-video bg-primary-900
        md:rounded-lg overflow-hidden
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
          h-full max-w-full w-full aspect-video
          video-js md:rounded-lg
          "
          ref="videoElement"

        >

          <track
            v-if="roomAnimeStore.videoSubtitles.length > 0"
            v-for="caption, index in roomAnimeStore.videoSubtitles"
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
          md:rounded-lg h-full max-w-full w-full 
          aspect-video
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
import Plyr from 'plyr';
import Hls from 'hls.js';
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { getPlyrOptions } from '@/composables/useVideoPlayerInit';
import { useRoomAnimeStore } from '@/stores/roomAnimeStore.js';



const roomAnimeStore = useRoomAnimeStore();

const { iframeSrc } = storeToRefs(roomAnimeStore);


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

roomAnimeStore.fetchEpSource;



roomAnimeStore.$subscribe((mutation, state) => {
  console.log('vid: ', state.videoSources);
  console.log('iF: ', state.iframeSrc);

  if(state.iframeSrc !== null) {
    removeVideoPlayer();
    return;
  }
    
  addVideoPlayer();
  
})




const computedSrcLoad = computed(() => {
  hlsInstance.value.loadSource('')
  hlsInstance.value.loadSource(roomAnimeStore.videoSources)
})

onMounted(() => {

  // init player
  const initHls = () => {
    console.log('hls init() call');
      
    const videoEl = videoElement.value;

    if(Hls.isSupported()) {

      const hls = new Hls();

      // if(roomAnimeStore.videoSources)
      //   loadSource(roomAnimeStore.videoSources)
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
    () => roomAnimeStore.loading, 
    () => {
      if(!roomAnimeStore.loading && roomAnimeStore.videoSources) {
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

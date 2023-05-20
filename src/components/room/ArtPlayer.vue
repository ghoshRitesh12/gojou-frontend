<template>

  <div 
    ref="artRef" 
    class="max-w-full w-full"
  >
  </div>

</template>


<script setup>
import Artplayer from 'artplayer';
import { onMounted, onBeforeUnmount, ref, nextTick, watch } from 'vue';
import { useRoomAnimeStore } from '@/stores/roomAnimeStore';

const roomAnimeStore = useRoomAnimeStore();

const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
  url: String,
  subtitles: {
    type: Array,
    default: []
  }
})
const emit = defineEmits(['get-instance']);


const instance = ref(null);
const artRef = ref(null);

const defaultOptions = {
  volume: 0.5, 
	isLive: false,
	muted: false,
	autoplay: false,
	pip: true,
	autoSize: true,
	setting: true,
	loop: true,
	playbackRate: true,
	fullscreen: true,
	miniProgressBar: true,
  mutex: true,
	backdrop: true,
	playsInline: true,
	autoPlayback: true,
	airplay: true,
	theme: '#b963ff',
  autoOrientation: true,
  fastForward: true,
  setting: true,
}


watch(
  () => roomAnimeStore.videoSources,
  () => {
    if(roomAnimeStore.videoSources !== null) {
      instance.value.url = roomAnimeStore.videoSources;
    }
  }
)

onMounted(() => {
  // instantiation
  instance.value = new Artplayer({
    container: artRef.value,
    ...props.option,
    ...defaultOptions,
  })

  instance.value.url = roomAnimeStore.videoSources;

  instance.value.on("ready", e => {
    instance.value.subtitle.url = "https://cc.zorores.com/8a/40/8a4022b46e21f8e90825d15a80febfed/eng-2.vtt";
    // {
    //   "url": "https://cc.zorores.com/8a/40/8a4022b46e21f8e90825d15a80febfed/eng-2.vtt",
    //   "lang": "English"
    // }
  })


  const ccs = props.subtitles.map(cc => {
    let engCcCount = 0, defaultCc = false;
    if(cc.lang.toLowerCase() === 'english' && engCcCount === 0) {
      defaultCc = true;
      engCcCount++;
    }
    
    return {
      default: defaultCc,
      html: cc.lang,
      url: cc.url
    }
  });
  const selector = [
    {
      html: 'Display',
      tooltip: 'Show',
      switch: true,
      onSwitch: function (item) {
        item.tooltip = item.switch ? 'Hide' : 'Show';
        instance.value.subtitle.show = !item.switch;
        return !item.switch;
      },
    },
    ...ccs
  ]

  const settings = [{
    html: 'Subtitle',
    selector,
    onSelect: function (item) {
      instance.value.subtitle.switch(item.url, {
        name: item.html,
      });
      return item.html;
    },
  }]

  // console.log(instance.value);

  // instance.value.settings = settings;

  // const ap = new Artplayer();
  // ap.subtitle

  nextTick(() => emit('get-instance', instance.value))
})

onBeforeUnmount(() => {
  if(instance.value && instance.value.destroy)
    instance.value.destroy()
})

</script>


<style>

</style>

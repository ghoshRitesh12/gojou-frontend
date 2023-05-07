import { ref, computed, watch } from 'vue';
import { computedEager } from '@vueuse/core'
import { defineStore } from "pinia";
import { useEventSource } from '@/composables/useEventSource';
import AnimeAPI from '@/services/animeAPI';


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
].filter(i => !i.lang.toLowerCase().includes('thumbnail'))

const srcs = [
  {
    "url": "https://tc-1.dayimage.net/_v6/a684043aa044e8107434617d8cdd6e0015d1a951b5021410d9f8c4ed9f6bc9a310f88a7887b090f86f0d88fcc3a2853dbddf91a5c7c60a06eea6972cb2007ccc81fabd8919c67a7ac66a949ca89520854378a574810efb51ffbe6bde827ebf1aeec2d5175d0725b486c803aa24cad0cc668c52dab8667f31a5ea86230ad427fb/index-f1-v1-a1.m3u8",
    "quality": "1080p",
    "isM3U8": true
  },
  {
    "url": "https://tc-1.dayimage.net/_v6/a684043aa044e8107434617d8cdd6e0015d1a951b5021410d9f8c4ed9f6bc9a310f88a7887b090f86f0d88fcc3a2853dbddf91a5c7c60a06eea6972cb2007ccc81fabd8919c67a7ac66a949ca89520854378a574810efb51ffbe6bde827ebf1aeec2d5175d0725b486c803aa24cad0cc668c52dab8667f31a5ea86230ad427fb/index-f2-v1-a1.m3u8",
    "quality": "720p",
    "isM3U8": true
  },
  {
    "url": "https://tc-1.dayimage.net/_v6/a684043aa044e8107434617d8cdd6e0015d1a951b5021410d9f8c4ed9f6bc9a310f88a7887b090f86f0d88fcc3a2853dbddf91a5c7c60a06eea6972cb2007ccc81fabd8919c67a7ac66a949ca89520854378a574810efb51ffbe6bde827ebf1aeec2d5175d0725b486c803aa24cad0cc668c52dab8667f31a5ea86230ad427fb/index-f3-v1-a1.m3u8",
    "quality": "360p",
    "isM3U8": true
  },
  {
    "url": "https://tc-1.dayimage.net/_v6/a684043aa044e8107434617d8cdd6e0015d1a951b5021410d9f8c4ed9f6bc9a310f88a7887b090f86f0d88fcc3a2853dbddf91a5c7c60a06eea6972cb2007ccc81fabd8919c67a7ac66a949ca89520854378a574810efb51ffbe6bde827ebf1aeec2d5175d0725b486c803aa24cad0cc668c52dab8667f31a5ea86230ad427fb/master.m3u8",
    "isM3U8": true,
    "quality": "auto"
  }
]

export const useRoomAnimeStore = defineStore('roomAnime', () => {
  // const animeId = ref('naruto-677');
  // const animeEpId = ref('naruto-677?ep=12354');
  const sseInstance = ref(null);
  const setSSEInstance = (instance) => {
    sseInstance.value = instance;
  }

  const loading = ref(false);
  
  const anime = ref({
    id: 'naruto-shippuden-355',
    epId: 'naruto-shippuden-355?ep=7882',
    epNo: 0,
    epCategory: 'sub',
    epServer: 'vidstreaming'
  })

  // const animeId = ref('naruto-shippuden-355');
  // const animeEpId = ref('naruto-shippuden-355?ep=7882');
  // const animeEpNo = ref(0);
  // const animeEpCategory = ref('sub');
  // const animeEpServer = ref('vidstreaming')

  const allServers = ref({});
  const roomAnimeData = ref({})
  const episodes = ref([]); //array
  const epLength = ref(0);
  
  const iframeSrc = ref(null);
  const videoSources = ref(null);
  const videoSubtitles = ref([]);

  const getAnimeEp = async (epId, epServer, epCategory) => {
    try {
      console.log('getAnimeEp() fired')
      loading.value = true;

      const { data } = await AnimeAPI.getEpisodeSource(
        epId, epServer, epCategory
      )

      loading.value = false;

      const headers = data?.episode?.headers;
      if(headers) {
        videoSources.value = null;
        videoSubtitles.value = [];
        iframeSrc.value = headers?.Referer;
        return;
      }

      iframeSrc.value = null;
      videoSubtitles.value = data?.episode?.subtitles;
      videoSources.value = data?.episode?.sources.find(i => i.quality === 'auto')?.url;

    } catch (err) {
      throw new Error(err.message);
    }
  }
  const fetchEpSource = computedEager(() => {
    console.log('room anime computed running');    
    getAnimeEp(
      anime.value.epId,
      anime.value.epServer,
      anime.value.epCategory
    )
    return true
  })
  
  watch(fetchEpSource.value, () => {
    fetchEpSource.value
  })

  const setRoomAnimeConfig = (key, val) => {
    anime.value[key] = val;
  }

  // const changeEpisodeServer = (name, category) => {
  //   console.log('change episode fired');
  //   anime.value.epServer = name;
  //   anime.value.epCategory = category
  // }
  // const changeEpisode = (epId, epNo) => {
  //   animeEpId.value = epId;
  //   animeEpNo.value = epNo
  // }


  
  const getRoomAnimeInfo = async () => {
    try {
      const { data } = await AnimeAPI.getRoomAnimeInfo(anime.value.id);
      roomAnimeData.value = data;
  
    } catch (err) {
      console.log(err);
    }
  }

  const getEpServers = async () => {
    try {
      const { data } = await AnimeAPI.getEpisodeServers(anime.value.epId);
  
      allServers.value = data;
      anime.value.epNo = data.episodeNo
  
    } catch (err) {
      console.log(err);
    }
  }

  const getAllEpisodes = async () => {
    try {
      const { data } = await AnimeAPI.getAnimeEpisodes(anime.value.id);
  
      episodes.value = data.episodes;
      epLength.value = data.totalEpisodes;
  
  
    } catch (err) {
      console.log(err);
    }
  }




  const roomInit = async (roomId) => {
    try {
      const es = await useEventSource(
        `${process.env.VUE_APP_API_BASE_URL}/room/${roomId}/sse`,
      )

      // await Promise.all(
      //   getEpServers(),
      //   getRoomAnimeInfo(),
      //   getAllEpisodes()
      // )

      
    } catch (err) {
      console.log(err)
    }
  }


  return {
    anime, fetchEpSource, iframeSrc, videoSources, 
    videoSubtitles, loading, setRoomAnimeConfig,
    
    episodes, epLength, getAllEpisodes,
    getRoomAnimeInfo, roomAnimeData, getEpServers, allServers,
    roomInit, sseInstance, setSSEInstance
  }

});

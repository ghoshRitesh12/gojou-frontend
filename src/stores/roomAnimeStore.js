import { ref, computed, watch } from 'vue';
import { breakpointsTailwind, computedEager } from '@vueuse/core'
import { defineStore } from "pinia";
import { useSocketIO, socket } from '@/composables/useSocketIO';
import { decryptState } from '@/composables/useCipherState';
import { cryptoSerialize, cryptoDeserialize } from './userStore';
import AnimeAPI from '@/services/animeAPI';
import UserAPI from '@/services/userAPI';


const schemaStoreMap = {
  animeId: 'id',
  animeEpisodeId: 'epId',
  animeEpisodeNo: 'epNo',
}


export const useRoomAnimeStore = defineStore('roomAnime', () => {
    // const animeId = ref('naruto-677');
    // const animeEpId = ref('naruto-677?ep=12354');

    const loading = ref(false);
    const anime = ref({
      id: '',
      epId: '',
      epNo: 0,
      epCategory: 'sub',
      epServer: 'vidstreaming'
    })

    const allServers = ref({});
    const roomAnimeData = ref({})
    const episodes = ref([]); //array
    const epLength = ref(0);
    
    const iframeSrc = ref(null);
    const videoSources = ref(null);
    const videoSubtitles = ref([]);

    const setAnimeSrc = (data) => {
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
      
    }

    const getAnimeEp = async () => {
      try {
        console.log('getAnimeEp() fired')

        const { data } = await AnimeAPI.getEpisodeSource(
          anime.value.epId, 
          anime.value.epServer, 
          anime.value.epCategory
        )

        return data;

      } catch (err) {
        throw new Error(err.message);
      }
    }


    watch(
      [
        () => anime.value.epCategory,
        () => anime.value.epServer,
      ],
      async () => {
        setAnimeSrc(await getAnimeEp())
      }
    )



    const setRoomAnimeConfig = (key, val) => {
      anime.value[key] = val;
    }

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



    const initData = ref({});


    const roomInit = async (roomId) => {
      try {
        const { data } = await UserAPI.roomInit(roomId);
        initData.value = await decryptState(
          data.initData,
          import.meta.env.VITE_AUTH_DATA_SECRET
        )

        setRoomAnimeConfig('id', initData.value.room.animeId)
        setRoomAnimeConfig('epId', initData.value.room.animeEpisodeId)
        setRoomAnimeConfig('epNo', initData.value.room.animeEpisodeNo)

        getRoomAnimeInfo()
        getEpServers()
        setAnimeSrc(await getAnimeEp())
        if(['admin', 'mod'].includes(initData.value.role)) {
          getAllEpisodes()
        }

        await useSocketIO();

        
      } catch (err) {
        console.log(err)
      }
    }




    return {
      anime, iframeSrc, videoSources, 
      videoSubtitles, loading, setRoomAnimeConfig,
      
      episodes, epLength, getAllEpisodes, getAnimeEp,
      getRoomAnimeInfo, roomAnimeData, getEpServers, allServers,
      roomInit, initData, setAnimeSrc
    }

  },
);

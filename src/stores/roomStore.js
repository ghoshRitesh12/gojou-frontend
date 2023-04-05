import { ref, computed, watchEffect } from 'vue';
import { defineStore } from "pinia";
import AnimeAPI from '@/services/animeAPI';

export const useRoomStore = defineStore('room', () => {

  // const animeId = ref('naruto-677');
  // const animeEpId = ref('naruto-677?ep=12354');
  const animeId = ref('naruto-shippuden-355');
  const animeEpId = ref('naruto-shippuden-355?ep=7882');
  const animeEpCategory = ref('sub');
  const animeEpServer = ref('streamsb')
  const animeEpNo = ref(0);

  const changeEpisode = (epId, epNo) => {
    animeEpId.value = epId;
    animeEpNo.value = epNo
  }

  
  const iframeSrc = ref(null);
  const videoSource = ref(null);
  const videoSubtitles = ref([]);

  const getAnimeEp = async (epId, epServer, epCategory) => {
    try {
      const { data } = await AnimeAPI.getEpisodeSource(
        epId, epServer, epCategory
      )

      const headers = data?.episode?.headers;

      
      if(headers) {
        iframeSrc.value = headers?.Referer
        return;
      }

      videoSubtitles.value = data?.episode?.subtitles;
      videoSource.value = data?.episode?.sources?.url;

      return data;

    } catch (err) {
      throw new Error(err.message);
    }
  }

  const fetchEpSource = computed(() => {
    getAnimeEp(
      animeEpId?.value,
      animeEpServer?.value,
      animeEpCategory?.value
    )
    return true
  })

  watchEffect(() => {
    fetchEpSource.value
  })

  const changeEpisodeServer = (name, category) => {
    console.log('change episode fired');
    animeEpServer.value = name;
    animeEpCategory.value = category
  }

  return {
    animeId, animeEpId, animeEpNo, animeEpCategory, animeEpServer,
    fetchEpSource, iframeSrc, videoSource, videoSubtitles,
    changeEpisode, changeEpisodeServer
  }

});

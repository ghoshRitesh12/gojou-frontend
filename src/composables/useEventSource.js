import { ref } from "vue";
import useRoomStore from "@/stores/roomStore";
import { useRoomAnimeStore } from "@/stores/roomAnimeStore";
import { decryptState } from "./useCipherState";

const sseInstance = ref(null);

const schemaStoreMap = {
  animeId: 'id',
  animeEpisodeId: 'epId',
  animeEpisodeNo: 'epNo',
}


export const useEventSource = (sseEndpoint) => {
  const roomAnimeStore = useRoomAnimeStore();


  return new Promise((resolve, reject) => {
    if(!sseEndpoint) return reject();

    const es = new EventSource(sseEndpoint, { 
      withCredentials: true 
    })

    es.addEventListener('open', (e) => {
      sseInstance.value = es;
      resolve(es);
    })
    es.addEventListener('error', (err) => {
      console.log(err);
      reject(err);
    })


    es.addEventListener('message', e => {
      console.log(e);
    })

    es.addEventListener('room:join', async (e) => {
      const info = await decryptState(
        e.data, process.env.VUE_APP_AUTH_DATA_SECRET
      )

      if(['admin', 'mod'].includes(info.role)) {
        roomAnimeStore.getEpServers()
        roomAnimeStore.getRoomAnimeInfo()
        roomAnimeStore.getAllEpisodes()
      } else {
        roomAnimeStore.getEpServers()
        roomAnimeStore.getRoomAnimeInfo()
      }

      console.log(info);

    })


    es.addEventListener('anime:alter', e => {
      console.log(e);
    })

  })
}




import { ref } from "vue";
import { io } from "socket.io-client";
import useRoomStore from "@/stores/roomStore";
import { useRoomAnimeStore } from "@/stores/roomAnimeStore";
import { useUserStore } from "@/stores/userStore";
import { useRoomChatStore } from "@/stores/roomChatStore";
import { decryptState } from "./useCipherState";
import { setPopupMessage } from "@/stores/popup";


const schemaStoreMap = {
  animeId: 'id',
  animeEpisodeId: 'epId',
  animeEpisodeNo: 'epNo',
}

export const socket = ref(null);



export const useSocketIO = () => {
  const userStore = useUserStore();
  const roomAnimeStore = useRoomAnimeStore();
  const roomChatStore = useRoomChatStore();
  
  return new Promise((resolve, reject) => {
    const skt = io(`${import.meta.env.VITE_API_BASE_URL}`);
    socket.value = skt;
    
    skt.on('connect', (s) => {
      console.log('CONNECTED TO WS id: ', socket.value.id);

      skt.emit(
        "room:join", 
        userStore.userName,
        roomAnimeStore.initData.room.roomId,
      );

      resolve(socket.value);
    })

    skt.on('anime:alter', (data, decSrc) => {
      console.log("ANIME ALTER EVENT RECEIVED FROM SERVER");

      for (const key in data) {
        if(schemaStoreMap[key]) {

          roomAnimeStore.setRoomAnimeConfig(
            schemaStoreMap[key], 
            data[key]
          );
        }
      }

      roomAnimeStore.setAnimeSrc(decSrc);

      roomAnimeStore.getEpServers() 
      if('animeId' in data)
        roomAnimeStore.getRoomAnimeInfo()

      if(['admin', 'mod'].includes(roomAnimeStore.initData.role)) {
        if('animeId' in data)
          roomAnimeStore.getAllEpisodes()
      }

    })



    skt.on("room:enter", (greet) => {
      setPopupMessage(greet);
    })


    skt.on("room:member-alter", members => {
      roomChatStore.setActiveMembers(members);
    })

    skt.on("room:leave", msg => {
      setPopupMessage(msg)
    })



    skt.on("message:send", (chatData) => {
      roomChatStore.chats.push(chatData);

    })


    skt.on("member:remove", rmEmailId => {
      if(userStore.emailId === rmEmailId) {
        console.log('inside member:remove');
        
        skt.emit(
          "room:exit-permanently", 
          roomAnimeStore.initData.room.roomId,
        )

        setPopupMessage('Admin removed you from the room');
        const t = setTimeout(() => {
          location.href = '/';
          clearTimeout(t);
        }, 500)
      }
    })

  })
}


export function disconnectSocket(roomId) {
  const userStore = useUserStore();
  socket.value.emit("room:exit", roomId, userStore.userName);
}




// join
// enter 
// exit
// leave
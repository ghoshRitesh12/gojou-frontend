import { ref, computed, watch } from 'vue';
import { defineStore } from "pinia";
import { useRoomAnimeStore } from './roomAnimeStore';
import { useUserStore } from './userStore';
import { socket } from '@/composables/useSocketIO';
import UserAPI from '@/services/userAPI';


const storeName = 'room-chat';

export const useRoomChatStore = defineStore(storeName, () => {
  const roomAnimeStore = useRoomAnimeStore();
  const userStore = useUserStore();  

  const activeMembers = ref(0);
  const setActiveMembers = (number) => {
    activeMembers.value = number;
  }



  const chats = ref([]);
  const getChats = async () => {
    try {
      const { data } = await UserAPI.getRoomChats(roomAnimeStore.initData.room.roomId)
      chats.value = data.roomChat.messages;

    } catch (err) {
      console.log(err);      
    }
  }
  watch(
    () => roomAnimeStore.initData,
    () => {
      if(roomAnimeStore.initData.room.roomId) {
        getChats()
      }
    }
  )

  const sendChat = async (chatText) => {
    try {
      const payload = {
        chatData: {
          text: chatText,
          sender: userStore.userId,
          timestamp: `${Date.now()}`
        },
        extraData: {
          name: userStore.userName,
          pfp: userStore.profilePicture
        }
      }

      await UserAPI.sendRoomChat(
        roomAnimeStore.initData.room.roomId,
        payload
      )

    } catch (err) {
      console.log(err);
    }
  }


  const chatsContainer = ref(null);
  const setChatContainer = (container) => {
    chatsContainer.value = container;
  }

  watch(
    () => chats.value,
    () => {
      if(chats.value.length > 0) {
        // chatsContainer.value.scrollTo({
        //   top: chatsContainer.value.scrollHeight,
        //   behavior: 'smooth'
        // })

      }
    }
  )


  return {
    activeMembers, setActiveMembers,
    sendChat, getChats, chats,
    setChatContainer
  }

});

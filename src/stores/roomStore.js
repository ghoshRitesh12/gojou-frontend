import { ref, computed } from "vue";
import { defineStore } from "pinia";
import UserAPI from "@/services/userAPI";
import AnimeAPI from "@/services/animeAPI";
import { setPopupMessage } from "./popup";
import { useRouter } from "vue-router";


export const roomModalVisible = ref(false);
// export const roomModalVisible = ref(true);

export const openRoomModal = async () => {
  roomModalVisible.value = true;
  document.body.style.overflowY = 'hidden';
}

export const closeRoomModal = () => {
  roomModalVisible.value = false;
  document.body.removeAttribute('style');
}



const useRoomStore = defineStore('room', () => {
  const errorMsg = ref(null);
  const setErrorMsg = (errMsg) => {
    errorMsg.value = errMsg
  }

  const inviteLink = ref(null);
  const removeInviteLink = () => {
    inviteLink.value = null
  }

  const roomData = ref({
    name: '',
    private: true,
  })

  const setRoomData = (key, val) => {
    roomData.value[key] = val
  }


  const createdRooms = ref(null);
  const getRooms = async () => {
    try {
      const { data } = await UserAPI.getUserRooms();
      createdRooms.value = data.createdRooms;

    } catch (err) {
      console.log(err)
    }
  }


  const eachRoomInfo = ref({});
  const newRoomInviteLink = ref(null);
  const getRoomInfo = async (roomId) => {
    try {
      const { data } = await UserAPI.getRoomInfo(roomId);

      eachRoomInfo.value.role = data.role;
      eachRoomInfo.value.room = data.room;
      
      document.body.classList.add('media-scroll');

    } catch (err) {
      document.body.removeAttribute('class');
      console.log(err)
    }
  }
  const closeRoomInfo = () => {
    eachRoomInfo.value = {};
    newRoomInviteLink.value = null;
    document.body.removeAttribute('class');
  }

  const getRoomInviteLink = async () => {
    try {
      const { data } = await UserAPI.getRoomInviteToken(eachRoomInfo.value.room.roomId)

      newRoomInviteLink.value = data.inviteLink;
      setPopupMessage(data.message);
      forceUpdate();

    } catch (err) {
      console.log(err)      
    }
  }

  const updateRoomConfig = async (roomId, qParam, roomData) => {
    try {
      const { data } = await UserAPI.updateRoomConfig(
        roomId, qParam, roomData
      );

      setPopupMessage(data.message);
      // location.reload();


    } catch (err) {
      console.log(err);      
    }
  }



  const createNewRoom = async () => {
    try {
      const { data } = await UserAPI.createRoom(roomData.value);
      inviteLink.value = data.inviteLink;
      console.log(data);
  
    } catch (err) {
      const { message } = err.response.data.error;
      setErrorMsg(message);
      console.log(err);
    }
  }

  const updateAnimeConfig = async (roomId, animeData) => {
    try {
      const { data } = await UserAPI.updateRoomAnime(
        roomId, animeData
      );

      console.log(data);

    } catch (err) {
      console.log(err);
    }
  }


  return {
    errorMsg, inviteLink, roomData, createdRooms,
    setErrorMsg, removeInviteLink, getRooms,
    createNewRoom, setRoomData, updateAnimeConfig,
    getRoomInfo, closeRoomInfo, getRoomInviteLink, eachRoomInfo,
    newRoomInviteLink, getRoomInviteLink, updateRoomConfig
  }

});

export default useRoomStore

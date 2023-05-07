import { ref, computed } from "vue";
import { defineStore } from "pinia";
import UserAPI from "@/services/userAPI";
import { useUserStore } from "./userStore";
import { openAuthModal } from "./auth";
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
  const router = useRouter();
  const userStore = useUserStore();

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


  // <RoomsView> 
  const roomDecks = ref([
    {
      name: 'Your rooms',
      rooms: [],
      style: 'mb-16'
    },
    {
      name: 'Rooms you are associated with',
      rooms: [],
      style: 'mb-16'
    },
    {
      name: 'Browse other rooms',
      rooms: [],
    },
  ])
  const getBrowseRooms = async () => {
    try {
      const { data } = await UserAPI.browseRooms();
  
      roomDecks.value[0].rooms = data.createdRooms;
      roomDecks.value[1].rooms = data.relatedRooms;
      roomDecks.value[2].rooms = data.publicRooms;
  
    } catch (err) {
      console.log(err);
    }
  }
  // </RoomsView> 
  



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
    if(!userStore.isAuth) return openAuthModal();

    try {
      const { data } = await UserAPI.getRoomInfo(roomId);

      eachRoomInfo.value.role = data.role;
      eachRoomInfo.value.room = data.room;
      
      document.body.removeAttribute('class');
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

      await getRoomInfo(roomId)
      setPopupMessage(data.message);
      getBrowseRooms()

    } catch (err) {
      console.log(err);      
    }
  }
  const joinRoom = async () => {
    try {
      const { data } = await UserAPI.joinRoom(
        eachRoomInfo.value.room.roomId
      );
      setPopupMessage(data.message);
      closeRoomInfo()
      router.push(data.redirectTo)

    } catch (err) {
      console.log(err);
      router.push('/explore') 
    }
  }
  const leaveRoom = async () => {
    try {
      const { data } = await UserAPI.leaveRoom(
        eachRoomInfo.value.room.roomId
      );

      await getBrowseRooms();
      setPopupMessage(data.message);

    } catch (err) {
      console.log(err);      
    }
  }
  const deleteRoom = async () => {
    try {
      const { data } = await UserAPI.deleteRoom(
        eachRoomInfo.value.room.roomId
      );

      await getBrowseRooms();
      setPopupMessage(data.message);

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
    getBrowseRooms, roomDecks,
    errorMsg, inviteLink, roomData, createdRooms,
    setErrorMsg, removeInviteLink, getRooms,
    createNewRoom, setRoomData, updateAnimeConfig,
    getRoomInfo, closeRoomInfo, getRoomInviteLink, eachRoomInfo,
    newRoomInviteLink, getRoomInviteLink, updateRoomConfig,
    joinRoom, leaveRoom, deleteRoom,
  }

});

export default useRoomStore

<template>

  <div 
    v-if="userStore.isAuth"
    v-show="roomModalVisible"
    data-room-model-wrapper
    class="fixed inset-0 z-[300] bg-primary-900/90"
    :style="`
      backdrop-filter: blur(.2rem);
      transition: .3s ease all;
    `"
  >

    <div data-room-modal
      class="
      fixed isolate z-[250] block 
      top-[50%] left-[50%] rounded-2xl
      translate-y-[-50%] translate-x-[-50%]
      bg-primary-900 border-[1px] border-zinc-700
      min-w-[21rem] px-6 pt-10 pb-6 md:px-8
      "
      ref="roomModal"
      style="transition: .2s ease all;"
    >

      <div data-existing-rooms v-if="!createRoomVisible">

        <div class="text-lg leading-[1.4]">

          <div v-if="roomStore.createdRooms?.length > 0" class="md:max-w-[45ch]">
            Select any of the available rooms to watch anime
          </div>
          <div v-else class="md:max-w-[45ch] mb-4">
            No rooms created, you can only watch anime in a room.
          </div>

          <div class="rooms mt-6 max-h-[15rem] overflow-y-auto">

            <div 
              v-for="room in roomStore.createdRooms" :key="room.roomId"
              @click="gotoExistingRoom(room.roomId)"
              class="
              border-[1px] border-zinc-600 py-2 px-4 text-base
              bg-transparent hover:bg-zinc-600 mb-3 cursor-pointer
              max-w-full w-full overflow-hidden rounded-xl
              "
              :style="`
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                transition: .2s ease background-color
              `"
            >
              {{ room.name }}
            </div>

          </div>

        </div>

        <p 
          v-if="roomStore.createdRooms?.length > 0"
          class="text-sm my-6 text-center w-full select-none text-zinc-400"
        >
          -------- OR --------
        </p>

        <button
          type="button"
          class="
          flex items-center justify-center gap-2 rounded-2xl w-full
          px-4 py-[.65rem] bg-zinc-800 hover:bg-zinc-700
          "
          @click="toggleCreateRoom"
        >
          Create new room
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            class="text-sm text-white"
          />
        </button>

      </div>

      <div data-create-room v-else>

        <div v-if="!roomStore.inviteLink">
          <div class="text-2xl text-center w-full mb-4 font-semibold">
            Create new room
          </div>
  
          <form @submit.prevent="roomStore.createNewRoom">
  
            <label for="name" class="block">
              Room name
              <input 
                type="text"
                id="name"
                class="
                block mt-2 py-[0.65rem] px-4 
                rounded-2xl w-full bg-zinc-800
                focus:outline-0 border-[1px] border-transparent
                focus:border-accent-200
                "
                maxlength="20"
                minlength="3"
                placeholder="gear5, rasengan, bankai"
                v-model.lazy="roomStore.roomData.name"
                required
              >
            </label>
  
            <label 
              for="private" 
              class="
              flex items-center mt-6
              "
            >
              <input 
                type="checkbox" 
                id="private"
                class="
                inline-block mr-3 h-[.95rem] w-[.95rem] aspect-square
                accent-accent-200 align-middle 
                "
                v-model="roomStore.roomData.private"
              />
              Room set to private
            </label>
  
            <p class="mt-4 leading-[1.2] text-sm text-zinc-400">
              Note: Initially, the selected anime's 1st episode will 
              be played in the newly created room.
            </p>
            
            <ErrorMessage  
              v-if="roomStore.errorMsg"
              :message="roomStore.errorMsg"
            />
  
  
            <div 
              class="
              flex items-center gap-3 mt-8
              "
            >
    
              <button
                type="button"
                class="
                rounded-2xl bg-zinc-700 text-primary-900
                hover:bg-zinc-600 py-3 text-base font-semibold
                transition ease-in duration-100 select-none 
                flex-grow-0 pl-[1.1rem] px-3 flex-shrink-0
                "
                title="go back"
                @click="toggleCreateRoom"
              >
                <Icon 
                  icon="material-symbols:arrow-back-ios-rounded"
                  class="text-xl text-white"
                />
              </button>
    
              <button
                type="submit"
                class="
                w-full rounded-2xl bg-accent-200 text-primary-900
                hover:bg-accent-300 py-[0.65rem] text-base font-semibold
                transition ease-in duration-100 select-none flex-[90%]
                "
              >
                Create room
              </button>
    
            </div>
  
          </form>
        </div>

        <div v-else>
          <div class="text-xl text-center w-full font-semibold">
            New room created 🎉
          </div>

          <p class="mt-6 mb-8 px-1 md:max-w-[45ch] text-base leading-[1.2]">
            People can join your newly created room through this invitation link.
          </p>

          <div class="relative bg-zinc-900 rounded-2xl">

            <div 
              class="
              max-w-[30ch] md:max-w-[45ch] py-3 pl-3 
              pr-8 md:pr-[5rem]
              overflow-x-auto whitespace-nowrap
              "
              id="invite-link"
            >
              <span ref="inviteLinkWrap">
                {{ roomStore.inviteLink || 'http://localhost:5000/rooms/invite/e8c0755e1a53' }}
              </span>
              
            </div>
            
            <div 
              class="
              absolute top-[50%] right-0 translate-y-[-50%]
              border-[1px] border-zinc-700 rounded-xl
              px-4 py-2 w-fit bg-primary-900 cursor-pointer
              "
              @click="copyLink"
              ref="copyBtn"
            >
              COPY
            </div>

          </div>

          <RouterLink
            :to="`/room/${roomStore.inviteLink?.split('/').pop()}`"
            class="
            inline-block bg-accent-200 text-black w-full
            py-[.65rem] text-center rounded-2xl text-base
            mt-6 hover:bg-accent-300 font-semibold
            transition ease-in duration-100
            "
            @click="closeRoomModalComponent"
          >
            Continue to room
          </RouterLink>

        </div>

      </div>


      <div
        class="
        absolute right-[-.5rem] top-[-.5rem] w-fit p-[0.5rem]
        cursor-pointer bg-zinc-700 hover:bg-zinc-600 
        transition ease-in duration-100 rounded-[50%]
        "
        @click="closeRoomModalComponent"
      >
        <Icon 
          icon="ic:round-close"
          class="text-2xl pointer-events-none"
        />
      </div>


      <div 
        v-if="isLoading"
        class="
        absolute top-0 left-0 grid place-items-center
        bg-black/50 w-full h-full rounded-2xl
        "
      >
  
        <div class="lds-roller">
          <div></div> <div></div> <div></div> 
          <div></div> <div></div> <div></div>
          <div></div> <div></div>
        </div>
  
      </div>
  
    </div>


  </div>


</template>


<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from "vue-router";
import useRoomStore, { closeRoomModal, roomModalVisible } from '@/stores/roomStore';
import { onClickOutside } from '@vueuse/core';
import AnimeAPI from '@/services/animeAPI';
import { Icon } from '@iconify/vue';
import ErrorMessage from '../auth/ErrorMessage.vue';

const router = useRouter();

const userStore = useUserStore();
const roomStore = useRoomStore();

const props = defineProps({
  avatar: String,
  animeId: String,
})

const isLoading = ref(false);
const createRoomVisible = ref(false);  
// const createRoomVisible = ref(true);  

const roomModal = ref(null);

onClickOutside(roomModal, () => closeRoomModalComponent());

const toggleCreateRoom = () => {
  createRoomVisible.value = !createRoomVisible.value
}

(() => {
  if(!userStore.isAuth) return;
  roomStore.setRoomData('avatar', props.avatar)
  roomStore.setRoomData('animeId', props.animeId)
})()


function closeRoomModalComponent() {
  createRoomVisible.value = false;
  roomStore.setRoomData('name', '')
  roomStore.removeInviteLink();
  closeRoomModal()
}


const gotoExistingRoom = async (roomID) => {
  try {
    isLoading.value = true;

    const { data: ep1Id } = await AnimeAPI.getAnime1stEpisodeId(props.animeId);
      
    const animeData = {
      animeId: props.animeId,
      avatar: props.avatar,
      animeEpisodeId: ep1Id,
      animeEpisodeNo: 1
    }

    await roomStore.updateAnimeConfig('absent', roomID, animeData);
    
    isLoading.value = false;
    closeRoomModalComponent()

    router.push(`/room/${roomID}`)

  } catch (err) {
    console.log(err);
  }
}


//
const inviteLinkWrap = ref(null);
const copyBtn = ref(null);
const copyLink = () => {
  navigator.clipboard.writeText(inviteLinkWrap.value.innerText)
    .then(() => {
      copyBtn.value.innerText = 'COPIED!';
      const t = setTimeout(() => {
        copyBtn.value.innerText = 'COPY';
        clearTimeout(t);
      }, 1500)
    })
    .catch(() => {
      copyBtn.value.innerText = ':(';
      const t = setTimeout(() => {
        copyBtn.value.innerText = 'COPY';
        clearTimeout(t);
      }, 1500)
    })
}


watch(
  () => roomModalVisible.value,
  () => {
    if(roomModalVisible.value && !createRoomVisible.value) {
      roomStore.getRooms()
    }
  }
)

</script>


<style scoped>

  #invite-link {
    scrollbar-width: none;
  }
  #invite-link::-webkit-scrollbar {
    display: none;
  }


  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>

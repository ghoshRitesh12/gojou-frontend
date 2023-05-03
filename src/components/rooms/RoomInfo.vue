<template>

  <div 
    id="room-info"
    class="
    fixed right-0 left-0 bottom-[2.8rem] 
    md:bottom-0 md:right-[1rem] md:left-auto
    min-h-[60vh] max-h-[60vh] md:min-h-[85.5vh] md:max-h-[80vh]
    md:max-w-[18rem] xl:max-w-[20rem] 2xl:max-w-[25rem] w-full
    flex-[35%] 2xl:flex-[25%] mt-14 z-[70]
    border-[0px] border-zinc-600 isolate bg-zinc-900
    overflow-x-hidden overflow-y-auto
    rounded-tl-2xl rounded-tr-2xl
    "
  >

    <div 
      class="room-info-backdrop" 
      @click="roomStore.closeRoomInfo"
    >
    </div>

  
    <div data-room-info-wrap class="relative isolate z-[100] bg-zinc-900 pb-16">

      <div data-room-info>

        <div data-room-info-overlay-wrap 
          class="grid place-items-center relative p-6"
        >

          <div
            class="
            absolute isolate z-[-1] top-0 left-0 
            w-full overflow-hidden after:z-[1]
            pointer-events-none select-none bg-zinc-900
            after:content-[' '] after:absolute after:bottom-0 after:left-0
            after:w-full after:h-full after:isolate
            after:bg-gradient-to-t after:from-zinc-900 after:to-transparent
            "
            style="--height: 23rem; height: var(--height)"
          >
            <img 
              data-room-info-overlay
              :src="eachRoomInfo.room.avatar" 
              alt=""
              class="
              absolute top-0 left-0 w-full
              "
              :style="`
                filter: blur(3rem);
                height: calc(var(--height) - 2rem)
              `"
            />
          </div>

          <div data-room-avatar
            class="
            max-w-[10rem] rounded-xl overflow-hidden
            shadow-lg shadow-zinc-900/50
            "
          >
            <img 
              :src="eachRoomInfo.room.avatar" 
              alt="room avatar"
            />
          </div>

        </div>


        <div class="py-4 px-4 xl:px-4">

          <div data-room-config class="mb-6">

            <div data-room-name
              class="
              text-2xl mb-8 font-semibold 
              leading-[1.4] overflow-hidden
              "
              :style="`
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              `"
            >
              {{ eachRoomInfo.room.name }}
            </div>

            <div data-room-visibility 
              v-if="eachRoomInfo.role !== 'viewer'"
              class="bg-zinc-800 py-3 px-4 rounded-2xl"
              :class="eachRoomInfo.role !== 'admin' ? 'pointer-events-none' : ''"
            >

              <label 
                class="flex items-center text-base w-full" 
                for="room-privacy"
              >

                <div class="mr-auto">
                  Room private
                </div>

                <div class="switch">
                  <input 
                    type="checkbox" 
                    id="room-privacy"
                    class="
                    inline-block ml-3 h-[.98rem] w-[.98rem] 
                    aspect-square accent-accent-200 align-middle
                    "
                    v-model="eachRoomInfo.room.private"
                    @change="roomStore.updateRoomConfig(
                      eachRoomInfo.room.roomId,
                      `?visibility=${eachRoomInfo.room.private}`,
                      { privacy: eachRoomInfo.room.private }
                    )"
                  >
                  <span class="slider round"></span>
                </div>

              </label>

            </div>

            <div data-room-invite v-if="eachRoomInfo.role !== 'viewer'" 
              class="my-4"
            >

              <div v-if="roomStore.newRoomInviteLink" 
                class="
                relative border-[1px] border-zinc-700 mb-2
                py-[.65rem] pl-4 pr-14 rounded-xl max-w-full
                "
              >
  
                <div data-room-invite-link
                  class="whitespace-nowrap overflow-auto"
                  ref="roomInviteLink"
                >
                  {{ roomStore.newRoomInviteLink }}
                </div>
  
                <div 
                  class="
                  absolute right-0 top-[50%] translate-y-[-50%] p-[.65rem]
                  bg-zinc-700 rounded-xl w-fit cursor-pointer
                  "
                  @click="copyLink"
                >
                  <Icon 
                    :icon="copyLinkIcon" 
                    class="text-xl pointer-events-none"
                  />
                </div>
              </div>

              <button
                v-else
                class="
                w-fit py-[.65rem] px-4 rounded-2xl bg-zinc-800
                hover:bg-zinc-700/70 cursor-pointer
                transition ease-in duration-100
                "
                type="button"
                @click="roomStore.getRoomInviteLink"
              >
                Get room invite link
              </button>

            </div>

            <div data-room-anime class="mt-4 overflow-hidden">
              <div class="text-lg">
                Current anime
              </div>

              <div 
                class="
                py-3 px-4 bg-zinc-800/80 leading-[1.2]
                mt-2 rounded-2xl overflow-hidden
                "
              > 
                <div class="anime-name overflow-hidden">
                  {{ toPascalCase(eachRoomInfo.room.animeId) }}
                </div>
              </div>

            </div>

          </div>


          <div data-members>

            <div class="text-lg">
              Members
            </div>
  
            <div class="mt-2">
  
              <Member
                :name="eachRoomInfo.room.admin.name"
                :pfp="eachRoomInfo.room.admin.profilePicture"
                :role="'admin'"
                class="mt-2"
              />

              <Member
                v-for="mod in eachRoomInfo.room.mods"
                :name="mod.name"
                :pfp="mod.profilePicture"
                :id="mod._id"
                class="mt-2"
              />

              <Member
                v-for="member in eachRoomInfo.room.members"
                :name="member.name"
                :pfp="member.profilePicture"
                :id="member._id"
                class="mt-2"
              />
  
            </div>

          </div>

        </div>


      </div>


      <div data-danger-zone class="p-4">

        <div v-if="eachRoomInfo.role === 'admin'" class="text-right">

          <button 
            class="
            bg-red-400 px-5 py-2 rounded-xl 
            text-black hover:bg-red-500 font-semibold
            transition ease-in duration-100
            "
            type="button"
            @click="dangerPopupVisible = !dangerPopupVisible"
          >
            Delete room
          </button>
  
          <div 
            v-if="dangerPopupVisible"
            class="
            pb-4 pt-4 px-5 border-[1px] bg-zinc-800/30
            rounded-2xl mt-4 text-left border-red-300
            "
          >
            <div class="text-[1.05rem]">
              Are you sure you want to delete this room?
            </div>

            <div
              class="
              flex items-center gap-2 mt-4
              w-fit ml-auto
              "
            >
              <button
                class="
                px-4 py-2 rounded-xl font-semibold
                text-white hover:bg-zinc-700 
                transition ease-in duration-100
                "
                type="button"
                @click="dangerPopupVisible = !dangerPopupVisible"
              >
                Cancel
              </button>
              <button
                class="
                bg-red-400 px-4 py-2 rounded-xl 
                text-black hover:bg-red-500 font-semibold
                transition ease-in duration-100
                "
                type="button"
              >
                Delete
              </button>
            </div>

          </div>

        </div>

        <div v-if="!['viewer', 'admin'].includes(eachRoomInfo.role)" class="text-right">
          
          <button 
            class="
            bg-red-400 px-5 py-2 rounded-xl
            text-black hover:bg-red-500 font-semibold
            transition ease-in duration-100 ml-auto
            "
            type="button"
            @click="dangerPopupVisible = !dangerPopupVisible"
          >
            Leave room
          </button>
  
          <div 
            v-if="dangerPopupVisible"
            class="
            pb-4 pt-4 px-5 border-[1px] bg-zinc-800/30
            rounded-2xl mt-4 text-left border-red-300
            "
          >
            <div class="text-[1.05rem]">
              Are you sure you want to leave this room?
            </div>

            <div
              class="
              flex items-center gap-2 mt-6
              w-fit ml-auto
              "
            >
              <button
                class="
                px-4 py-2 rounded-xl font-semibold
                text-white hover:bg-zinc-700 
                transition ease-in duration-100
                "
                type="button"
                @click="dangerPopupVisible = !dangerPopupVisible"
              >
                Cancel
              </button>
              <button
                class="
                bg-red-400 px-4 py-2 rounded-xl 
                text-black hover:bg-red-500 font-semibold
                transition ease-in duration-100
                "
                type="button"
              >
                Leave
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>


    <div 
      class="
      absolute top-[.5rem] right-[.4rem] w-fit p-[0.5rem]
      cursor-pointer bg-zinc-700/60 hover:bg-zinc-700
      transition ease-in duration-100 rounded-[50%] z-[101]
      "
      @click="roomStore.closeRoomInfo"
    >
      <Icon 
        icon="ic:round-close" 
        class="text-2xl pointer-events-none"
      />
    </div>

  </div>

</template>


<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import useRoomStore from '@/stores/roomStore';
import UserAPI from '@/services/userAPI';
import { Icon } from '@iconify/vue';
import Member from './Member.vue';

const roomStore = useRoomStore();

const { eachRoomInfo } = storeToRefs(roomStore);

defineProps({
  role: String,
  roomData: Object
})


const toPascalCase = (str) => {
  return str.split('-').map(word => (
    word.charAt(0).toUpperCase() + word.slice(1)
  )).slice(0, -1).join(' ')
}

const roomInviteLink = ref(null);
const copyLinkIcon = ref('basil:copy-outline');

const copyLink = () => {
  navigator.clipboard.writeText(roomInviteLink.value.innerText)
    .then(() => {
      copyLinkIcon.value = 'basil:copy-solid';
      const t = setTimeout(() => {
        copyLinkIcon.value = 'basil:copy-outline';
        clearTimeout(t);
      }, 1500)
    })
}


const dangerPopupVisible = ref(false);



</script>


<style scoped>

  [data-room-info] [data-room-invite-link] {
    scrollbar-width: none;
  }

  [data-room-info] [data-room-invite-link]::-webkit-scrollbar {
    display: none;
  }

  .room-info-backdrop {
    @apply fixed inset-0 z-[60] bg-primary-900/90;
    backdrop-filter: blur(.2rem);
  }

  @media (min-width: 768px) {
    .room-info-backdrop {
      @apply relative inset-auto min-w-[0];
    }
  }

  .anime-name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-spacing: .1rem
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.65rem;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    background-color: #777;
    position: absolute;
    cursor: pointer;
    inset: 0;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    top: 50%;
    margin-inline: .4rem;
    transform: translate(0, -50%);
    background-color: white;
    -webkit-transition: .22s ease;
    transition: .22s ease;
  }

  input:checked + .slider {
    background-color: hsl(267, 89%, 72%);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px hsl(267, 89%, 72%);
  }

  input:checked + .slider:before {
    top: 50%;
    transform: translate(1.2rem, -50%);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }


</style>


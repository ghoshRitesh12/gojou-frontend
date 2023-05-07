<template>

  <div data-member>

    <div 
      class="
      flex items-center w-full
      bg-zinc-800 px-4 py-3 rounded-2xl
      cursor-pointer hover:bg-zinc-700/60
      transition ease-in duration-100
      "
      @click="toggleMemberOptions"
    >
  
      <div 
        class="
        max-w-[2rem] max-h-[2rem] flex-shrink-0 select-none
        overflow-hidden rounded-[50%] pointer-events-none
        "
      >
        <img 
          :src="pfp"
          alt="member-pfp"
        />
      </div>
  
      <div 
        class="mx-4 overflow-hidden w-full select-none pointer-events-none"
        :style="`
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        `"
      >
        {{ name }}
      </div>
  
      <div v-if="role"
        class="ml-auto text-sm"
        :class="role === 'admin' ? 'text-yellow-400' : 'text-zinc-300'"
      >
        {{ role.toUpperCase() }}
      </div>
  
    </div>

    <div 
      v-if="roomStore.eachRoomInfo.role === 'admin' && role !== 'admin'"
      v-show="memberOptionsVisible"
      class="
      w-[90%] mx-auto px-2 py-2 text-[.92rem]
      border-[1px] border-zinc-800 border-t-0
      rounded-bl-xl rounded-br-xl
      "
    >

      <button
        v-if="role !== 'mod'"
        class="
        bg-zinc-800 w-full py-2 px-4 text-emerald-200
        rounded-xl hover:bg-zinc-700/70
        transition ease-in duration-100
        "
        @click="roomStore.updateRoomConfig(
          roomStore.eachRoomInfo.room.roomId,
          '?member=promote',
          { uid: id }
        )"
      >
        Promote to mod
      </button>

      <button
        v-else
        class="
        bg-zinc-800 w-full py-2 px-4 text-red-300
        rounded-xl hover:bg-zinc-700/70
        transition ease-in duration-100 mt-2
        "
        type="button"
        @click="roomStore.updateRoomConfig(
          roomStore.eachRoomInfo.room.roomId,
          '?member=demote',
          { uid: id }
        )"
      >
        Demote to member 
      </button>

      <button
        class="
        bg-zinc-800 w-full py-2 px-4 text-red-300
        rounded-xl hover:bg-zinc-700/70
        transition ease-in duration-100 mt-2
        "
        type="button"
        @click="roomStore.updateRoomConfig(
          roomStore.eachRoomInfo.room.roomId,
          `?drop=${role || 'member'}`,
          { uid: id }
        )"
      >
        Remove member
      </button>

    </div>

  </div>


</template>


<script setup>
import { ref } from 'vue';
import useRoomStore from '@/stores/roomStore';

const roomStore = useRoomStore();

defineProps({
  id: String,
  pfp: String,
  name: String,
  role: String
})

const memberOptionsVisible = ref(false);

const toggleMemberOptions = () => {
  if(roomStore.eachRoomInfo.role === 'admin') {
    memberOptionsVisible.value = !memberOptionsVisible.value;
  }
}


</script>


<style>

</style>

<template>

  <div data-room-card class="relative">

    <RouterLink 
      class="
      relative isolate rounded-2xl overflow-hidden 
      grid place-items-center h-[13rem] z-10
      "
      :to="`/room/${roomId}`"
    >

      <img
        data-room-avatar-overlay
        :src="avatar" alt=""
        decoding="async"  
        fetchpriority="high"
        class="
        absolute h-full w-full select-none pointer-events-none
        "
        style="filter: blur(3rem);"
        role="overlay"
      />

      <div data-room-avatar class="relative isolate z-10 rounded-xl overflow-hidden">
        <img
          :src="avatar" 
          alt="room-avatar"
          decoding="async"  
          fetchpriority="high"
          class="
          isolate z-20 max-w-[8rem] max-h-[11rem]
          "
        />
      </div>
      
    </RouterLink>

    <div
      class="
      flex items-start gap-3 mt-4
      "
    >

      <div data-creator-pfp 
        class="overflow-hidden flex-shrink-0 rounded-[50%]"
      >
        <img
          :src="creatorDp" 
          alt="creator-pfp"
          decoding="async"  
          loading="lazy"
          class="
          max-w-[2rem] max-h-[2rem]
          "
        />
      </div>

      <div class="pr-2">

        <RouterLink
          class="overflow-hidden leading-[1.2] text-[1.05rem]"
          :style="`
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          `"
          :to="`/rooms/info/${roomId}`"
        >
          {{ name }}
        </RouterLink>

        <div 
          class="
          mt-2 w-full text-[.95rem] text-zinc-400
          overflow-hidden leading-[1.1] hover:text-zinc-200
          transition ease-in duration-100
          "
          :style="`
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          `"
          :title="creator"
        >
          {{ creator }} 
        </div>

        <div
          class="text-[.95rem] text-zinc-400"
          :style="`
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          `"
        >
          <span class="inline">
            {{ time }}
          </span>

          <span class="inline-block align-middle">
            <Icon :icon="'bi:dot'" class="text-lg"/>
          </span>

          <span class="inline">
            {{ members }} member(s)
          </span>

        </div>


      </div>

    </div>

    <button
      class="
      absolute top-[.8rem] right-[.8rem] z-10
      bg-zinc-800/50 w-fit p-[.8rem] rounded-2xl
      cursor-pointer hover:bg-zinc-800/80
      transition ease-in duration-100 inline-block
      "
      type="button"
      @click="roomStore.getRoomInfo(roomId)"
    >
      <Icon 
        icon="majesticons:external-link-line"
        class="text-xl pointer-events-none text-zinc-100"
      />
    </button>

  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import useRoomStore from '@/stores/roomStore';


const roomStore = useRoomStore();


defineProps({
  name: String,
  creatorDp: String,
  creator: String,
  avatar: String,
  time: String,
  members: Number,
  roomId: String
})



</script>


<style></style>

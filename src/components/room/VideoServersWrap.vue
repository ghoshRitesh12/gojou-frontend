<template>

  <div 
    v-if="serversInfo"
    class="
    flex flex-wrap select-none
    relative z-20 overflow-hidden rounded-2xl my-6
    border-x-0 border-y-[1px] md:border-[1px] 
    border-zinc-600 bg-zinc-900
    "
  >

    <div 
      class="
      flex-grow 2xl:flex-grow-0 grid place-items-center
      px-4 py-2 bg-zinc-900 text-zinc-200 text-center
      "
    >
      <div class="inline-block text-[.95rem]">

        <div class="mt-auto">You are watching</div>
        <div class="font-semibold mb-3 text-accent-200">
          Episode <span> {{ '10' }} </span>
        </div>
  
        <div class="text-[.9rem] max-w-full md:max-w-[25ch] mt-auto leading-[1.1]">
          If current servers don't work, try other servers.
        </div>

      </div>

    </div>

    <div 
      class="
      flex justify-center flex-col
      flex-grow rounded-2xl overflow-hidden bg-primary-900
      "
    >
      
      <VideoServerDeck
        v-if="serversInfo.sub"
        :servers="serversInfo.sub"
        :server-type="'sub'"
        :server-type-icon="'fluent:closed-caption-32-regular'"
      />
      
      <VideoServerDeck
        v-if="serversInfo.dub"
        :servers="serversInfo.dub"
        :server-type="'dub'"
        :server-type-icon="'tabler:microphone'"
        class="
        border-accent-100/50
          border-t-[1px] border-dashed
        "
        :style="`
          border-top-width: ${!serversInfo.sub ? '0px' : '' };
        `"
      />
    </div>



  </div>

</template>


<script setup>
import VideoServerDeck from './VideoServerDeck.vue';

defineProps({
  serversInfo: {
    type: Object
  }
})


</script>


<style></style>

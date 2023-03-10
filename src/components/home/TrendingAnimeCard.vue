<template>

  <div 
    class="
    max-w-[10rem] w-full
    rounded-xl overflow-hidden
    "
  >

    <div
      class="
        relative z-10 pb-[150%]
        bg-cover bg-center bg-no-repeat 
        bg-primary-900/5 cursor-pointer
        after:content-[' '] after:absolute 
        after:h-[50%] after:w-full after:top-auto after:bottom-0
        after:bg-gradient-to-b from-transparent to-primary-900
      "
      :style="`background-image: url('${props.poster}')`"
      :title="props.name"
      @click="goToAnime(props.id)"
    >
    
      <div 
        class="
        absolute bottom-2 min-w-fit z-50 pb-1
        pointer-events-none isolate
        "
      >
      
        <span 
          class="
          relative bg-zinc-900/90 text-xl
          pl-3 pr-3 shadow-lg text-accent-200
          rounded-tl-none rounded-bl-none rounded-lg
          "
        >
          #{{ props.rank }}
        </span>


        <p 
          class="
          text-[1.05rem] pl-3 w-full pr-4 max-w-[19ch]
          whitespace-nowrap text-ellipsis overflow-hidden 
          "
        >
          {{ props.name }}
        </p>

      </div>
  
    </div>

  </div>

</template>


<script setup>
import goToRoute from '@/composables/goToRoute';
const { goToAnime } = goToRoute()


const props = defineProps({
  rank: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
})


</script>

<!-- {
  "rank": 1,
  "name": "One Piece",
  "id": "one-piece-100",
  "poster": "https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg"
}, -->
<style></style>

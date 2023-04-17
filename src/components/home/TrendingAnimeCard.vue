<template>

  <RouterLink 
    class="
    inline-block max-w-[10rem] w-full relative
    "
    :to="`/anime/info/${props.id}`"
  >

    <div
      :title="props.name"
    >
    
      <div 
        class="rounded-xl overflow-hidden"
      >
        <img 
          :src="props.poster" 
          :alt="props.name"
          decoding="async"
          fetchpriority="high"
          role="presentation"
          class="text-sm"
        >
      </div>

      <div 
        class="
        absolute bottom-0 min-w-fit z-50
        pointer-events-none isolate mb-1
        "
      >
      
        <span 
          class="
          relative bg-zinc-900/90 text-xl pb-2 pt-1
          pl-3 pr-3 shadow-lg text-accent-200
          rounded-tl-none rounded-bl-none rounded-xl
          "
        >
          #{{ props.rank }}
        </span>

      </div>
  
    </div>

  </RouterLink>

</template>


<script setup>


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

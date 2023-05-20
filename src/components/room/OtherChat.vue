<template>

  <div 
    v-if="props.content"
    class="my-6 w-fit"
  >
          
    <div
      class="
      max-w-[20ch] sm:max-w-[30ch] ml-6
      pb-1 text-zinc-400 text-[.85rem]
      overflow-hidden whitespace-nowrap text-ellipsis
      "
      :title="props.name"
    > 
      {{ props.name }}
    </div>

    <div data-chat-content
      class="
      flex items-end gap-2
      "
    >

      <div 
        class="
        w-full rounded-[50%] overflow-hidden 
        max-w-[1.3rem] max-h-[1.3rem] flex-shrink-0
        "
      >
        <img 
          :src="props.pfp || 'https://api.dicebear.com/6.x/bottts/png?seed=1681829467992&eyes=shade01&scale=120&mouth=smile01&texture=circuits'" 
          alt=""
          decoding="async"
          fetchpriority="high"
        />
      </div>      
      
      <div 
        class="
        border-[1px] border-zinc-700 w-fit
        px-4 py-[.65rem] break-words text-white 
        rounded-3xl ml-auto leading-[1.4] mb-2
        max-w-[27ch] sm:max-w-[40ch]
        "
      >
        {{ props.content }}
      </div>

    </div>


  </div>

</template>


<script setup>

const props = defineProps({
  content: String,
  name: String,
  pfp: String
})

</script>


<style>

</style>

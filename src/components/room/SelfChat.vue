<template>

  <div 
    v-if="props.content"
    class="
    bg-zinc-800 w-fit text-white 
    px-4 py-[.65rem] break-words
    rounded-3xl ml-auto leading-[1.4] mb-2
    max-w-[27ch] sm:max-w-[40ch]
    "
  >
    {{ props.content }}
  </div>

</template>


<script setup>

const props = defineProps({
  content: {
    type: String,
  }
})

</script>


<style>

</style>

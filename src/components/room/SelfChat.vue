<template>

  <div 
    v-if="props.content"
    class="
    bg-[#9441fa] w-fit text-white
    px-3 py-2 rounded-2xl ml-auto leading-[1.1] mb-1
    max-w-[30ch] sm:max-w-[40ch]
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

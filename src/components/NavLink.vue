<template>

  <RouterLink 
    :to="props.to" 
    active-class="active-nav"
    class="
    relative px-11 py-2 rounded-xl text-lg
    text-gray-400 transition ease-in duration-100
    hover:bg-neutral-800 overflow-hidden
    before:content-[' '] before:opacity-0
    before:top-[50%] before:translate-y-[-50%]
    "
  >
    <slot></slot>
  </RouterLink>

</template>


<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

</script>


<style scoped>
  
  .active-nav {
    @apply text-gray-200 bg-neutral-800
    before:absolute font-semibold
    before:left-0 before:h-7
    before:bg-accent-400 before:w-2
    before:rounded-xl before:opacity-100
  }

</style>

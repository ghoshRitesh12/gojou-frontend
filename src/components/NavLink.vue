<template>

  <RouterLink 
    :to="props.to" 
    active-class="active-nav"
    class="
    relative rounded-xl text-lg
    text-gray-400 transition ease-in duration-100
    hover:bg-neutral-800 overflow-hidden
    px-4 lg:px-11 lg:py-2
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
    @apply 
    bg-neutral-800 text-gray-200 
    before:absolute lg:font-semibold
    before:left-0 before:h-7
    before:bg-accent-400 before:w-2
    before:rounded-xl lg:before:opacity-100
  }

</style>

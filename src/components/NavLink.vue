<template>

  <RouterLink 
    :to="props.to" 
    active-class="active-nav"
    class="
    relative
    px-10 py-2
    rounded-xl text-lg
    text-gray-500
    transition ease-in delay-100
    hover:bg-neutral-200
    overflow-hidden
    before:content-[' '] before:opacity-0
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
    @apply text-primary-900 bg-neutral-200
    before:left-0
    before:h-7 before:absolute
    before:bg-accent-400 before:w-2
    before:rounded-xl before:opacity-100
  }

  .active-nav svg {
    @apply text-accent-300
  }

  a > * { pointer-events: none; }

</style>

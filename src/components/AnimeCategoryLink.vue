<template>

  <RouterLink 
    :to="`/anime/${props.href}`" 
    class="
    text-gray-400 inline-block
    mb-1 px-11 py-2 w-full
    rounded-xl text-lg
    cursor-pointer hover:text-accent-200
    transition ease-in duration-100
    " 
    active-class="active"
  >
    {{ props.name }}
  </RouterLink>

</template>


<script setup>


const props = defineProps({
  href: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})


</script>


<style scoped>

  .active {
    @apply text-accent-200
  }

</style>

<template>
  <RouterLink 
    :to="props.to" 
    active-class="active-nav"
  >
    {{ props.name }}
  </RouterLink>
</template>


<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})


</script>


<style scoped>
  .active-nav {
    @apply text-accent-400;
  }
</style>

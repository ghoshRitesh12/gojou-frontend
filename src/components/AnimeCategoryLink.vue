<template>

  <div 
    class="
    text-gray-400
    px-11 py-2
    mb-1
    rounded-xl text-lg
    cursor-pointer
    transition ease-in duration-100
    hover:text-accent-200
    "
    @click="goToCategory(props.href)"
    :title="props.name"
  >
    {{ props.name }}

  </div>

</template>


<script setup>
import goToRoute from '@/composables/goToRoute';
const { goToCategory } = goToRoute()


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


<style>

</style>

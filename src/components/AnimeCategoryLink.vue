<template>

  <div 
    class="
    text-gray-400
    px-10 py-2
    mb-1
    rounded-xl text-lg
    cursor-pointer
    transition ease-in delay-50
    hover:text-accent-200
    "
    @click="goToCategory"
    :title="props.name"
  >
    {{ props.name }}

  </div>

</template>


<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

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

const goToCategory = () => router.push(props.href)

</script>


<style>

</style>

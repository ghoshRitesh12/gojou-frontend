<template>
  <p 
    class="
    text-gray-200
    whitespace-nowrap
    overflow-hidden
    text-ellipsis
    "
  >
    {{ name }}
  </p>
</template>


<script setup>
const props = defineProps({
  name: {
    type: String,
  }
})

const name = 'Ritesh Ghosh'

</script>


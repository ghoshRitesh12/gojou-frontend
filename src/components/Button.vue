<template>

  <button 
    :type="props.type"
  >
    {{ props.name }}
  </button>

</template>


<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

</script>


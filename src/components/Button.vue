<template>

  <button 
    :type="props.type"
  >
    <slot></slot>
  </button>

</template>


<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true
  }
});

</script>


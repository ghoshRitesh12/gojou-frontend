<template>

  <p
    class="
    text-red-400 text-sm w-fit mx-auto mt-2
    "
  >
    {{ message }}
  </p>

</template>


<script setup>

defineProps({
  message: {
    type: String,
  }
})

</script>

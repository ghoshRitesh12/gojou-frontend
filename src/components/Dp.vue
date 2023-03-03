<template>
  <figure 
    class="
    overflow-hidden rounded-[50%]
    grid place-items-center w-fit
    "
  >
    <img :src="props.url" alt="" class="object-center">
  </figure>
</template>


<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  }
})

</script>


<style></style>

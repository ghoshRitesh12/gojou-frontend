<template>

  <div class="mb-2 text-[.95rem]">

    <span class="inline-block mr-2">
      {{ props.keyname }} :
    </span>

    <span class="inline-block" style="word-spacing: .2rem;">

      <template v-if="props.value">
        {{ props.value }}
      </template>
      <slot v-if="!props.value" name="more-info"></slot>

    </span>

  </div>


</template>


<script setup>

const props = defineProps({
  keyname: {
    type: String,
    required: true
  },
  value: {
    type: String,
  }
})

</script>


<style>

</style>

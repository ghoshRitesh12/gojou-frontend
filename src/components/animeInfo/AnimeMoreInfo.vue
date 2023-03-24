<template>

  <div class="flex items-start mb-2 text-[.92rem]">

    <span class="inline-block mr-2 flex-shrink-0">
      {{ props.keyname }}:
    </span>

    <span 
      class="leading-[1.2] overflow-hidden mt-1" 
      style="word-spacing: .2rem;"
      :style="`
        display: -webkit-box; 
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      `"
      :title="props.value"
    >

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

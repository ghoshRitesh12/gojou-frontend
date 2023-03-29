<template>

  <div class="mb-2">

    <span class="inline-block mr-2 text-[.92rem] font-extrabold">
      {{ props.keyname }}:
    </span>

    <span 
      class="inline-block leading-[1.2] break-words text-[.92rem] text-zinc-200" 
      style="word-spacing: .1rem;"
      :title="props.value"
    >

      <template v-if="props.value">
        {{ props.value }}
      </template>
      <slot v-if="!props.value" name="extra"></slot>

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

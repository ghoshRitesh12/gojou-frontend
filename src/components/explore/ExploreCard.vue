<template>

  <div 
    data-explore-card
    class="
    flex items-center cursor-pointer
    bg-zinc-900 rounded-2xl
    border-[1px] border-zinc-700
    hover:bg-zinc-700
    "
    :class="(
      isActive ? 
      'pl-4 pr-1 py-1' : 
      'px-4 py-2 md:py-3'
    )"
    :style="`
      transition: .25s ease all;
      word-spacing: .1rem;
    `"
  >
    <div>
      {{ name }}
    </div>

    <div 
      v-if="isActive"
      class="
      p-2 cursor-pointer ml-6
      rounded-[50%] bg-zinc-700
      transition ease-in duration-100
      "
    >
      <Icon 
        icon="ic:round-close"
        class="text-lg text-white pointer-events-none"
      />
    </div>

  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  name: String,
  href: String,
  isActive: {
    type: Boolean,
    default: false
  }
})

</script>


<style>

</style>

<template>

  <div 
    class="
    py-2 px-3 rounded-xl text-zinc-300 
    bg-zinc-800 hover:bg-zinc-700
    transition ease-in duration-100
    cursor-pointer md:px-4 select-none server
    "
    :class="'bg-accent-200 text-primary-900' "
  >

    {{ name }}

  </div>

</template>


<script setup>

defineProps({
  name: {
    type: String,
  },
  isActive: {
    type: Boolean,
  }
})

</script>

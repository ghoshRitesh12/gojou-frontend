<template>

  <div 
    class="
    flex items-center w-full
    bg-zinc-800 px-4 py-3 rounded-2xl

    "
  >

    <div 
      class="
      max-w-[2rem] max-h-[2rem] flex-shrink-0
      overflow-hidden rounded-[50%]
      "
    >
      <img 
        :src="pfp"
        alt="member-pfp"
      />
    </div>

    <div 
      class="mx-4 overflow-hidden w-full"
      :style="`
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      `"
    >
      {{ name }}
    </div>

    <div v-if="role"
      class="ml-auto text-sm"
      :class="role === 'admin' ? 'text-yellow-400' : 'text-zinc-300'"
    >
      {{ role.toUpperCase() }}
    </div>

  </div>

</template>


<script setup>

defineProps({
  id: String,
  pfp: String,
  name: String,
  role: String
})

</script>


<style>

</style>

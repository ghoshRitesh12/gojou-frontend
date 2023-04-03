<template>

  <div data-episode-list-option
    class="
    relative py-3 pl-4 pr-14 w-full
    after:absolute isolate 
    after:top-[50%] after:right-[1rem]
    after:h-[.8rem] after:w-[.8rem] after:bg-accent-200
    after:rounded-full after:translate-y-[-50%] 
    bg-zinc-800 cursor-pointer
    transition ease-in duration-100
    "
    :class="
      isActive ? `after:content-[' '] bg-zinc-900/80` 
        : 'after:content-[] hover:bg-zinc-900'
    "
    @click="emitRangeChange(startingRange, endingRange)"
  >
    <div
      class="w-fit mr-auto pointer-events-none"
    >
      Eps: 
      <span class="ml-2">
        {{ startingRange }}-{{ endingRange }}
      </span>
    </div>

  </div>
  
</template>


<script setup>

defineProps({
  startingRange: Number,
  endingRange: Number,
  isActive: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['range-change'])

const emitRangeChange = (start, end) => {
  emits('range-change', { start, end });
}

</script>


<style>

</style>

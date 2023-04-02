<template>

  <div 
    data-episode
    :title="props.name"
    class="
    relative isolate bg-zinc-900 text-zinc-100
    cursor-pointer align-middle w-full
    px-4 py-3 overflow-hidden rounded-lg
    after:absolute after:left-0 after:top-0
    after:h-full after:w-[75%] xl:after:w-[100%] after:z-[-1]
    after:bg-gradient-to-r from-accent-400/40 to-transparent
    transition ease-in duration-100
    "
    :class="props.activeEp ? `group after:content-[' ']` : `after:content-[] hover:bg-zinc-800`"
  >

    <div class="flex items-center w-full">
      <span
        class="whitespace-nowrap"
      >
        Ep {{ props.number }}
      </span>

      <span
        class="
        ml-3 w-fit
        whitespace-nowrap text-ellipsis overflow-hidden
        "
      >
        {{ props.name }}
      </span>

      <span
        v-if="props.activeEp"
        class="
        align-middle text-lg 
        ml-auto pl-6 
        "
      >
        <Icon 
          icon="material-symbols:play-circle-rounded" 
          class="inline-block text-accent-100"
        />
      </span>
    </div>

  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  id: {
    type: String
  },
  number: {
    type: Number
  },
  name: {
    type: String
  },
  isFiller: {
    type: Boolean,
    default: false
  },
  activeEp: {
    type: Boolean,
    default: false
  }
})

</script>


<style>

</style>

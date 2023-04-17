<template>

  <div 
    data-explore-card
    class="
    flex bg-zinc-900 rounded-2xl
    border-[1px] border-zinc-700 select-none
    "
    :class="(
      props.isActive ? 
      '' : 
      'hover:bg-zinc-700'
    )"
    :style="`
      transition: .25s ease all;
      word-spacing: .1rem;
    `"
  >
    <div 
      class="grid place-items-center px-4 cursor-pointer"
      @click="handleCardClick"
      :class="(
        props.isActive ? 
        'py-3' : 
        'py-2 md:py-3'
      )"
    >
      <div class="pointer-events-none">
        {{ props.name }}
      </div>
    </div>

    <div 
      v-if="props.isActive"
      class="
      cursor-pointer mx-2 rounded-[50%] 
      w-[2.3rem] h-[2.3rem] bg-zinc-700 
      grid place-items-center my-auto
      transition ease-in duration-100
      "
      @click="cancleCardClick"
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

const props = defineProps({
  name: String,
  href: String,
  isActive: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['card-click', 'cancel-card']);

const emitData = {
  name: props.name,
  href: props.href
}

const handleCardClick = () => emits('card-click', emitData)

const cancleCardClick = () => emits('cancel-card');

</script>


<style>

</style>

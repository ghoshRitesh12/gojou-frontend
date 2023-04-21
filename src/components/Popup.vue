<template>

  <div 
    v-if="isPopupOpen"
    data-popup
    class="
    fixed isolate z-[350] bottom-[3rem] right-[2rem]
    sm:bottom-[4rem] sm:right-[4rem]
    flex items-center gap-1 md:gap-3 py-[.35rem] pl-4 pr-1
    bg-white rounded-2xl overflow-hidden
    shadow-lg shadow-black/40
    "
    style="transition: .2s ease all"
  >

    <div 
      class="
      text-black font-semibold leading-[1.15]
      max-w-[20ch] sm:max-w-[30ch] select-none
      "
      style="transition: .2s ease max-width"
    >
      {{ popupMessage }}
    </div>

    <div 
      class="
      py-2 px-2 cursor-pointer
      rounded-[50%] hover:bg-zinc-400/70
      "
      style="transition: .2s ease background"
      @click="closePopup"
    >
      <Icon 
        icon="ic:round-close"
        class="text-2xl text-black pointer-events-none"
      />
    </div>

  </div>

</template>


<script setup>
import { watch } from 'vue';
import { Icon } from '@iconify/vue';
import { popupMessage, isPopupOpen, closePopup  } from '@/stores/popup.js';

watch(
  () => isPopupOpen.value,
  () => {
    if(isPopupOpen.value) {
      const t = setTimeout(() => {
        closePopup()
        clearTimeout(t);
      }, 3000)
    }
  }
)

</script>


<style>

</style>

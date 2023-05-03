<template>

  <div 
    v-if="isPopupOpen"
    data-popup
    class="
    fixed isolate z-[350] bottom-[4rem] left-[1.5rem]
    sm:bottom-[4rem] sm:left-[3rem]
    flex items-center gap-1 md:gap-3
    bg-white rounded-2xl overflow-hidden
    shadow-lg shadow-black/40 px-4 py-3 sm:px-6
    "
    style="transition: .2s ease all"
  >

    <div 
      class="
      text-black font-semibold leading-[1.4]
      sm:max-w-[35ch] select-none
      "
      :style="`
        transition: .2s ease max-width;
        word-spacing: .1rem;
      `"
    >
      {{ popupMessage }}
    </div>

    <div
      v-if="false"
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
      const timeout = setTimeout(() => {
        closePopup()
        clearTimeout(timeout);
      }, 2500)
    }
  }
)

</script>


<style>

</style>

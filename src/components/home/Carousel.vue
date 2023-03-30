<template>

  <div data-carousel
    class="
    min-h-[19rem] max-h-[20rem]
    md:min-h-[30rem] md:max-h-[30rem] rounded-3xl
    overflow-hidden
    "
    >
    <slot :currentSlide="currentSlide"></slot>
    
    <div
      class="
      absolute z-50 
      right-2 bottom-2
      md:right-8 md:bottom-8
      "
    >

      <div 
        data-navigate-left
        @click="prevSlide"
      >
        <Icon icon="ic:round-keyboard-arrow-left"/>
      </div>
      <div 
        data-navigate-right
        @click="nextSlide"
      >
        <Icon icon="ic:round-keyboard-arrow-right"/>
      </div>

    </div>

  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { ref, onMounted, onBeforeMount } from 'vue';

const currentSlide = ref(0);
const slideCount = ref(0);
const interval = ref(null);
const intervalTime = ref(3500);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value === slideCount.value - 1) ? 0 : currentSlide.value + 1;
  clearInterval(interval.value)
  autoPlay()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value === 0) ? slideCount.value - 1 : currentSlide.value - 1;
  clearInterval(interval.value)
  autoPlay()
}

function autoPlay() {
  interval.value = setInterval(() => {
    nextSlide()
  }, intervalTime.value)
}

onMounted(() => {
  slideCount.value = document.querySelectorAll("[data-slide]").length
  autoPlay()
})

onBeforeMount(() => clearInterval(interval));

</script>


<style>

  div[data-navigate-left],
  div[data-navigate-right] {
    @apply text-xl md:text-2xl p-2 bg-zinc-900 w-fit rounded-xl m-2
    hover:text-black hover:bg-accent-300
    transition ease-in duration-100 cursor-pointer
  }

</style>

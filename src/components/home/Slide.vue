<template>
  
  <div data-slide>
    <Transition name="slide">
      <slot></slot>

    </Transition>
  </div>

</template>


<script setup>

</script>


<style>

  .slide-enter-active,
  .slide-leave-active {
    transition: opacity .7s ease-in-out;
  }

  .slide-enter-active,
  .slide-leave-to {
    opacity: 0
  }

  .slide-enter-to,
  .slide-leave-from {
    opacity: 1
  }

</style>

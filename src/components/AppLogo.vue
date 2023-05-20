<template>

  <RouterLink
    id="app-logo" 
    class="
    flex items-center justify-center 
    cursor-pointer select-none
    min-w-[2rem] max-w-[5.3rem] lg:max-w-[7.5rem]
    " 
    to="/"
    v-once
  >

    <img 
      class="pointer-events-none flex-shrink-0" 
      src="/img/icons/gojou-logo2.svg" 
      alt="logo"
    />

  </RouterLink>

</template>


<script setup>
import { RouterLink } from 'vue-router';

</script>



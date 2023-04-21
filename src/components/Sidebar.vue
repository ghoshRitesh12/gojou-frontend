<template>

  <aside id="sidebar" 
    class="
    sticky top-0 left-0 bottom-0
    bg-primary-900 min-w-[3.2rem] max-w-[5.2rem]
    lg:min-w-[15rem] lg:max-w-[17rem]     
    flex-[30%] border-r-0 border-neutral-900 
    pb-6 pt-2 px-2 lg:px-4 min-h-[100vh] max-h-[100vh]
    overflow-y-auto hidden md:block
    "
  >

    <AppLogo 
      class="
      mb-6 py-4 px-1
      lg:mx-auto lg:px-0
      "
    />

    <Navbar/>

  </aside>

</template>


<script setup>
import AppLogo from './AppLogo.vue';
import Navbar from './Navbar.vue';

import { ref } from 'vue';


</script>


<style>
/* #sidebar {
  color: hsl(240, 40%, 2%);
} */
</style>

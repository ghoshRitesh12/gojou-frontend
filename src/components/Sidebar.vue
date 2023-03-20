<template>

  <aside id="sidebar" 
  class="
    sticky top-0 left-0 bottom-0
    bg-primary-900 min-w-[15rem] max-w-[18rem]
    flex-[30%] border-r-2 border-neutral-900 
    py-6 px-4 min-h-[100vh] max-h-[100vh]
    overflow-y-auto hidden lg:block
    "
  >

    <AppLogo 
      class="
      ml-3 mb-8
      py-2 px-4"
    />

    <Navbar/>

    <AnimeCategoryNav/>

  </aside>

</template>


<script setup>
import AppLogo from './AppLogo.vue';
import Navbar from './Navbar.vue';
import AnimeCategoryNav from './AnimeCategoryNav.vue';

import { ref } from 'vue';


</script>


<style>
/* #sidebar {
  color: hsl(240, 40%, 2%);
} */
</style>

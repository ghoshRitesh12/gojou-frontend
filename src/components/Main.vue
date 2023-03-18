<template>
  <main class="
    min-h-[200vh]
    flex-[75%] pb-8
    bg-primary-900 text-gray-100
  ">
    <Titlebar/>

    <div id="main" class="px-4 md:px-6 pt-4">
      <RouterView :key="$route.fullPath"/>
    </div>
    
  </main>
</template>


<script setup>
import Titlebar from './Titlebar.vue';

</script>


<style></style>

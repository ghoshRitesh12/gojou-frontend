<template>
  <main class="
    min-h-[200vh]
    flex-[75%] pb-6
    bg-primary-900 text-gray-100
    backdrop-blur
  ">
    <Titlebar/>

    <div id="main" class="px-6">
      <RouterView/>
    </div>
    
  </main>
</template>


<script setup>
import Titlebar from './Titlebar.vue';

</script>


<style></style>

<template>
  <main class="
    min-h-full
    flex-[75%] pb-8 xl:pb-12
    bg-primary-900 text-gray-100
  ">
    <Titlebar/>

    <div id="main" class="w-full overflow-hidden">
      <RouterView :key="$route.fullPath"/>
    </div>
    
  </main>
</template>


<script setup>
import Titlebar from './Titlebar.vue';

</script>


<style></style>
<!-- px-4 lg:px-6 py-4 -->
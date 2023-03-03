<template>
  <main class="flex-[75%] py-8 px-6">
    <Titlebar/>

    <div id="main">
      <RouterView/>
    </div>
    
  </main>
</template>


<script setup>
import Titlebar from './Titlebar.vue';

</script>


<style></style>

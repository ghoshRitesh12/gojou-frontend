<template>
  <div class="flex">

    <Sidebar/>
    <Main/>
    
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import Main from './components/Main.vue';


</script>

<style>
  #__app {
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
  }
</style>

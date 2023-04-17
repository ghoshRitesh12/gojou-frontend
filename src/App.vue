<template>
  <div class="flex relative">

    <Sidebar/>
    <Main/>
    <AuthModal/>
    
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import Main from './components/Main.vue';
import AuthModal from './components/auth/AuthModal.vue';


</script>

<style>
  #__app {
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
  }
</style>

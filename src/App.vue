<template>
  
  <div class="flex relative">

    <Sidebar/>
    <Main/>
    <BottomNav/>
    <AuthModal/>
    <Popup />
    
  </div>

</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import Main from './components/Main.vue';
import AuthModal from './components/auth/AuthModal.vue';
import Popup from './components/Popup.vue';
import BottomNav from './components/BottomNav.vue';

</script>

<style>
  #__app {
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
  }
</style>

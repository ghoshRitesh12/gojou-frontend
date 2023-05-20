<template>

  <RouterLink 
    class="
    grid place-items-center select-none
    overflow-hidden rounded-[50%]
    "
    to="/profile"
  >
    <img 
      :src="userStore.profilePicture || url" 
      alt="dp" 
      decoding="async"
      fetchpriority="high"
      crossorigin="anonymous"
      class="object-center pointer-events-none text-sm"
    >

  </RouterLink>

</template>


<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

const url = 'https://yt3.ggpht.com/pKWFpweWfKOduyYR1zUosjzpMiudCx_rb8AKJdBLVOtYkQi4xSrtkDoQ6v7aQtkscj7mEV6S=s88-c-k-c0x00ffffff-no-rj-mo';


</script>


<style></style>

<template>
  <div 
    id="app-logo" 
    class="
    cursor-pointer w-fit select-none
    " 
    v-once
    @click="toHome"
  >

    <img v-once class="pointer-events-none" src="../../public/img/icons/gojou-logo2.svg" alt="logo">

  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const toHome = () => router.push('/');

</script>



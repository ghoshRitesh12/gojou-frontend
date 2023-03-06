<template>
  <div 
    id="app-logo" 
    class="
    cursor-pointer w-fit
    " 
    v-once
    @click="toHome"
  >

    <img v-once class="pointer-events-none" src="/img/icons/gojou-logo.png" alt="logo">

  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const toHome = () => router.push('/');

</script>



<template>
  <div 
    id="app-logo" 
    class="
    mr-10 ml-7 mb-8
    py-2 px-4
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



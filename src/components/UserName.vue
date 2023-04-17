<template>
  <p 
    class="
    text-gray-200 whitespace-nowrap
    overflow-hidden text-ellipsis
    select-none
    "
  >
    {{ userStore.userName || name }}
  </p>
</template>


<script setup>
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();


const name = 'Ritesh Ghosh'

</script>


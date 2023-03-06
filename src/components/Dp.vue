<template>
  <div 
    class="
    overflow-hidden rounded-[50%]
    grid place-items-center
    "
    @click="goToProfile"
  >
    <img :src="url" alt="profile-pic" class="object-center pointer-events-none">

  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  url: {
    type: String,
  },
})

const url = 'https://yt3.ggpht.com/pKWFpweWfKOduyYR1zUosjzpMiudCx_rb8AKJdBLVOtYkQi4xSrtkDoQ6v7aQtkscj7mEV6S=s88-c-k-c0x00ffffff-no-rj-mo';

const goToProfile = () => router.push('/profile')

</script>


<style></style>

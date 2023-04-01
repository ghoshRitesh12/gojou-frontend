<template>
  
  <div
    data-room
  >
    <Video/>


  </div>

</template>


<script setup>
import { useRoute } from 'vue-router';
import AnimeAPI from '@/services/animeAPI';
import Video from '@/components/room/Video.vue';

const route = useRoute();


</script>


<style>

</style>

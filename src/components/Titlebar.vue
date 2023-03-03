<template>

  <header>
    <Dp :url="imgUrl"/>
    <Search @data-search="searchReq"/>

    <p>
      titlebar ok
    </p>

  </header>

</template>


<script setup>
import Dp from './Dp.vue';
import Search from './Search.vue';

const imgUrl = 'https://yt3.ggpht.com/pKWFpweWfKOduyYR1zUosjzpMiudCx_rb8AKJdBLVOtYkQi4xSrtkDoQ6v7aQtkscj7mEV6S=s88-c-k-c0x00ffffff-no-rj-mo';

const searchReq = (data) => {
  console.log(data);
}

</script>


<style></style>

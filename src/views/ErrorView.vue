<template>

  <div
    v-if="pageErrorMessage || pageErrorStatus"
  >
    {{ pageErrorMessage }} error
    of status {{ pageErrorStatus }}
  </div>

</template>


<script setup>
import { pageErrorMessage, pageErrorStatus } from '@/stores/error';

</script>


<style>

</style>

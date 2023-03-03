<template>
  <form data-search 
    @submit.prevent="emits('data-search', query)"
  >
    <input class="
      border-2 border-gray-500
      rounded-2xl px-4 py-2
      focus:outline-0 
      text-slate-600
      " 
      type="search" 
      v-model="query" 
      :placeholder="placeholder"
    />

  </form>
</template>


<script setup>
import { ref } from 'vue';
const query = ref('');

const placeholder = `Search ${props.placeholder}`.trim();

const props = defineProps({
  placeholder: {
    type: String,
    default: ' '
  }
})

const emits = defineEmits(['data-search']);


</script>


<style></style>

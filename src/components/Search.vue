<template>
  <div class="relative">

    <form data-search
      @submit.prevent="emitQuery"
    >
      <input class="
        border-2 border-slate-600 
        rounded-2xl pl-4 py-2
        text-slate-200 pr-8 max-w-[100%] w-[100%]
        focus:outline-0 bg-primary-900
        focus:border-accent-200
        transition ease-in duration-100
        " 
        type="search" 
        v-model="query" 
        :placeholder="placeholder"
        @input="handleInput"
      />

      <button 
        class="absolute right-0 top-[50%] translate-y-[-50%] mr-4"
        type="submit" 
      > 
        <Icon class="text-slate-400 text-[1.2rem]" :icon="'ri:search-line'"/>
      </button>

    </form>

    <slot name="results"></slot>

  </div>
</template>


<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const query = ref(null);
const interval = ref(null);
const intervalTime = 600;
const placeholder = `Search ${props.placeholder}`.trim();

const props = defineProps({
  placeholder: {
    type: String,
    default: ' '
  }
})

const emits = defineEmits(['data-search', 'input-search']);

function emitQuery() {
  if(!query) return;
  clearInterval(interval.value);
  emits('data-search', query.value);
}

const handleInput = e => {
  clearInterval(interval.value);

  interval.value = setTimeout(() => {
    if(!e.target.value) return;
    emits('input-search', e.target.value)
    
  }, intervalTime)
}


</script>


<style></style>

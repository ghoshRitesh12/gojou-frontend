<template>

  <div data-pagination
    class="
    flex items-center gap-2 flex-wrap
    mt-16 mb-4 mx-auto w-fit
    "
  >
    <RouterLink
      v-if="props.currentPage !== 1"
      :to="`/${props.param}`"
      class="pg sym" title="First"
    > 
      <Icon icon="ic:round-keyboard-double-arrow-left" />
    </RouterLink>
    <RouterLink 
      v-if="props.currentPage !== 1"
      :to="`/${props.param}?page=${props.currentPage - 1}`"
      class="pg sym" title="Previous"
    >
      <Icon icon="ic:round-keyboard-arrow-left" />
    </RouterLink>

    <RouterLink 
      v-if="props.currentPage - 2 > 0" 
      :to="`/${props.param}?page=${props.currentPage - 2}`" 
      class="pg" :title="`Page ${props.currentPage - 2}`"
    >
      {{ props.currentPage - 2 }}
    </RouterLink>
    
    <RouterLink 
      v-if="props.currentPage - 1 > 0" 
      :to="`/${props.param}?page=${props.currentPage - 1}`" 
      class="pg" :title="`Page ${props.currentPage - 1}`"
    >
      {{ props.currentPage - 1 }}
    </RouterLink>


    <div class="pg active">
      {{ props.currentPage }}
    </div>


    <RouterLink
      v-if="(props.currentPage + 1) <= props.totalPages"
      :to="`/${props.param}?page=${props.currentPage + 1}`"
      class="pg" :title="`Page ${props.currentPage + 1}`"
    >
      {{ props.currentPage + 1 }}
    </RouterLink>
    
    <RouterLink
      v-if="(props.currentPage + 2) <= props.totalPages"
      :to="`/${props.param}?page=${props.currentPage + 2}`"
      class="pg" :title="`Page ${props.currentPage + 2}`"
    >
      {{ props.currentPage + 2 }}
    </RouterLink>

    <RouterLink
      v-if="props.currentPage !== props.totalPages"
      :to="`/${props.param}?page=${props.currentPage + 1}`"
      class="pg sym" title="Next"
    > 
      <Icon icon="ic:round-keyboard-arrow-right" />
    </RouterLink>
    
    <RouterLink
      v-if="props.currentPage !== props.totalPages"
      :to="`/${props.param}?page=${props.totalPages}`"
      class="pg sym" title="Last"
    > 
      <Icon icon="ic:round-keyboard-double-arrow-right" />
    </RouterLink>
    
  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  hasNextPage: {
    type: Boolean,
    required: true
  },
  param: {
    type: String,
    required: true
  }
})



</script>


<style scoped>

  [data-pagination] .pg {
    @apply inline-block w-fit text-center
    hover:text-accent-200 cursor-pointer
    bg-zinc-900 py-2 px-4 rounded-xl
    transition ease-in duration-100
    ;
    font-size: 1.05rem;
  }

  [data-pagination] .sym {
    @apply p-3
  }

  [data-pagination] .active {
    @apply bg-accent-200 text-primary-900
    hover:text-primary-900 pointer-events-none
  }

</style>

<template>
  
  <div class="w-[31.33%]" data-genre>
    <RouterLink 
      :to="`/genre/${genreHref}`"
      class="text-[.92rem]"
      :title="props.name"
    >
      {{ props.name }}
    </RouterLink>
  </div>

</template>


<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
});

const genreHref = props.name.toLowerCase().replace(" ", "-");


</script>


<style scoped>
  [data-genres-deck] [data-genre] {
    @apply 
    inline-block py-2 px-4 rounded-xl
    flex-grow-0
    cursor-pointer hover:bg-zinc-700 
    whitespace-nowrap text-ellipsis overflow-hidden
    transition ease-in duration-100 
  }
</style>

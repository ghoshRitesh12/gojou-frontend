<template>
  
  <RouterLink 
    data-genre 
    class="
    bg-zinc-800 md:bg-transparent
    flex-grow-0 md:w-[31.33%]
    "
    :title="props.name"
    :to="`/genre/${genreHref}`"
  >
    <span
      class="
      text-[.92rem] pointer-events-none max-w-full
      "
    >
      {{ props.name }}
    </span>
  </RouterLink>

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
    cursor-pointer hover:bg-zinc-700
    whitespace-nowrap text-ellipsis overflow-hidden
    transition ease-in duration-100
  }
</style>

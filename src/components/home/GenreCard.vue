<template>
  <div data-genre
    class="
    py-2 px-4 rounded-xl
    cursor-pointer hover:bg-zinc-700
    flex-[7.3rem] flex-grow-0 text-[.95rem]
    whitespace-nowrap text-ellipsis overflow-hidden
    transition ease-in duration-100
    "
    @click="goToGenre(genreHref)"
    :title="props.name"
  >
    {{ props.name }}
  </div>
</template>


<script setup>
import goToRoute from '@/composables/goToRoute';

const { goToGenre } = goToRoute();

const props = defineProps({
  name: {
    type: String,
    required: true
  },
});

const genreHref = props.name.toLowerCase().replace(" ", "-");


</script>


<style></style>

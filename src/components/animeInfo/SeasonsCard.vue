<template>

  <RouterLink 
    :to="`/anime/info/${props.id}`"
    :title="props.name"
    class="
    relative max-w-[12.5rem] min-w-[10rem] w-full
    rounded-2xl overflow-hidden group inline-block
    "
    :class="props.isCurrent ? 'border-[1px] border-accent-200' : ''"
  >

    <span
      class="
      absolute z-50 top-[50%] left-[50%] pointer-events-none
      translate-y-[-50%] translate-x-[-50%] text-center
      text-[.95rem] overflow-hidden group-hover:text-accent-200
      transition ease-in duration-100 leading-[1.2]
      "
      :class="props.isCurrent ? 'text-accent-200' : ''"
      :style="`
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      `"
    >
      {{ props.title }}
    </span>

    <div
      class="
      bg-cover bg-center bg-no-repeat
      pb-[40%] h-full w-full
      opacity-30
      "
      :style="`background-image: url('${props.poster}')`"
      style="filter: blur(12px)"
    ></div>

  </RouterLink>

</template>


<script setup>

const props = defineProps({
  isCurrent: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
});

  // {
  //   "isCurrent": true,
  //   "id": "naruto-677",
  //   "name": "Naruto",
  //   "title": "Classic Series",
  //   "poster": "https://img.zorores.com/_r/100x200/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg"
  // }
</script>


<style>

</style>
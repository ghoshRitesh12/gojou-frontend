<template>

  <RouterLink 
    :to="`/anime/info/${props.id}`"
    :title="props.name"
    class="
    relative rounded-xl overflow-hidden group inline-block 
    flex-grow py-2 xl:py-0 shadow-2xl border-[1px] flex-shrink
    min-w-[5.8rem] max-w-[7rem] sm:min-w-[9rem] sm:max-w-[11rem]
    min-h-[4.2rem] max-h-[4.2rem] xl:min-h-[4.5rem] xl:max-h-[4.5rem]
    "
    :class="props.isCurrent ? 'border-accent-200' : 'border-zinc-300/20'"
    >

    <span
      class="
      absolute z-50 top-[50%] left-[50%] pointer-events-none
      translate-y-[-50%] translate-x-[-50%] text-center
      overflow-hidden group-hover:text-accent-200 font-semibold
      transition ease-in duration-100 leading-[1.3] w-full
      px-[.65rem] xl:px-[.7rem]
      "
      :class="props.isCurrent ? 'text-accent-200' : ''"
      :style="`
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: clamp(.85rem, 2vmin, .95rem);
      `"
    >
      {{ props.title }}      
    </span>

    <div
      class="
      bg-cover bg-center bg-no-repeat
      h-full w-full opacity-40
      pb-[40%]
      "
      :style="`
        background-image: url('${props.poster}');
        filter: blur(.5rem);
        `"
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
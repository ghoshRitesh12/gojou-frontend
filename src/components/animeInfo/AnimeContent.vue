<template>

  <section 
    data-anime-content
    class="
    xl:flex gap-8 items-center
    py-5 md:py-12 px-2 md:px-8 relative"
  >

    <div
      class="
      absolute inset-0 bg-white/50 isolate
      bg-cover bg-center bg-no-repeat z-10
      w-full h-full opacity-[.35] scale-[1.2]
      "
      style="filter: blur(2rem)"
      :style="`
        background-image: url('${poster}');
      `"
    >
    </div>
    
    <AnimeInfoTab
      class="flex-[70%] 2xl:flex-[75%] relative z-50 xl:mb-12"
    />

    <AnimeMoreInfoTab
      class="flex-[35%] 2xl:flex-[25%] z-50"
    />

  </section>

</template>


<script setup>
import { inject, computed } from 'vue';
import AnimeInfoTab from './AnimeInfoTab.vue';
import AnimeMoreInfoTab from './AnimeMoreInfoTab.vue';

const animeInfo = inject('animeInfo');

const poster = computed(() => animeInfo.value.poster);

const props = defineProps({
  content: {
    type: Object,
  }
})


</script>


<style>

</style>

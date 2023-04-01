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
      class="flex-[70%] 2xl:flex-[75%] relative z-50 mb-12 xl:mb-0"
    />

    <AnimeMoreInfoTab
      class="flex-[35%] 2xl:flex-[25%] z-50"
    />

  </section>

</template>


<script setup>
import { provide, ref } from 'vue';
import AnimeInfoTab from './AnimeInfoTab.vue';
import AnimeMoreInfoTab from './AnimeMoreInfoTab.vue';

const props = defineProps({
  content: {
    type: Object,
  }
})

const animeInfo = ref({});
const animeMoreInfo = ref({});

const poster = props.content.info.poster;

animeInfo.value = props.content.info;
animeMoreInfo.value = props.content.moreInfo;

provide('animeInfo', animeInfo)
provide('animeMoreInfo', animeMoreInfo)




</script>


<style>

</style>

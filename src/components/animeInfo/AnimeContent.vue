<template>

  <section 
    data-anime-content
    class="
    xl:flex gap-8 items-center
    py-5 md:py-12 px-3 md:px-8 relative"
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
import { inject } from 'vue';
import AnimeInfoTab from './AnimeInfoTab.vue';
import AnimeMoreInfoTab from './AnimeMoreInfoTab.vue';

const { poster } = inject('anime-content').value;

const props = defineProps({
  animeContent: {
    type: Object,
  }
})

const content = {
  "moreInfo": {
    "japanese": "ナルト",
    "synonyms": "NARUTO",
    "aired": "Oct 3, 2002 to Feb 8, 2007",
    "premiered": "Fall 2002",
    "duration": "23m",
    "status": "Finished Airing",
    "malscore": "7.89",
    "genres": "Action, Adventure, Comedy, Martial Arts, Shounen, Super Power",
    "studios": "Studio Pierrot",
    "producers": "TV Tokyo, Aniplex, Shueisha, Studio Pierrot, Viz Media"
  },
  "id": "naruto-677",
  "name": "Naruto",
  "description": "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.\n\nNow, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.",
  "poster": "https://img.zorores.com/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg",
  "stats": [
    "TV",
    "Ep 220 / 220",
    "23m"
  ]
}

// console.log(content)

</script>


<style>

</style>

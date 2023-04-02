<template>

  <div>

    <div 
      data-episode-deck 
      class="
      min-w-[14rem] bg-primary-900
      rounded-lg overflow-hidden
      "
    >

      <div class="max-h-[37rem] overflow-auto w-full">
        <EpisodeCard
          v-for="episode, index in episodes" :key="index"
          :id="episode.id" :name="episode.title"
          :number="episode.number" :is-filler="episode.isFiller"
          :active-ep="index === 9 ? true : false"
          class="even:bg-zinc-800/20"
        />
      </div>

    </div>

  </div>

</template>


<script setup>
import EpisodeCard from './EpisodeCard.vue';

const props = defineProps({
  episodes: {
    type: Array,
  }
})


const episodes = [
  {
    "id": "steinsgate-3?ep=213",
    "number": 1,
    "title": "Turning Point",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=214",
    "number": 2,
    "title": "Time Travel Paranoia",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=215",
    "number": 3,
    "title": "Parallel World Paranoia",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=216",
    "number": 4,
    "title": "Interpreter Rendezvous",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=217",
    "number": 5,
    "title": "Starmine Rendezvous",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=218",
    "number": 6,
    "title": "Butterfly Effect's Divergence",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=219",
    "number": 7,
    "title": "Divergence Singularity",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=220",
    "number": 8,
    "title": "Chaos Theory Homeostasis I",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=221",
    "number": 9,
    "title": "Chaos Theory Homeostasis II",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=222",
    "number": 10,
    "title": "Chaos Theory Homeostasis III",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=223",
    "number": 11,
    "title": "Dogma in Event Horizon",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=224",
    "number": 12,
    "title": "Dogma in Ergosphere",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=225",
    "number": 13,
    "title": "Metaphysics Necrosis",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=226",
    "number": 14,
    "title": "Physically Necrosis",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=227",
    "number": 15,
    "title": "Missing Link Necrosis",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=228",
    "number": 16,
    "title": "Sacrificial Necrosis",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=229",
    "number": 17,
    "title": "Made in Complex",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=230",
    "number": 18,
    "title": "Fractal Androgynous",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=231",
    "number": 19,
    "title": "Endless Apoptosis",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=232",
    "number": 20,
    "title": "Finalize Apoptosis",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=233",
    "number": 21,
    "title": "Paradox Meltdown",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=234",
    "number": 22,
    "title": "Being Meltdown",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=235",
    "number": 23,
    "title": "Open the Steins Gate",
    "isFiller": false
  },
  {
    "id": "steinsgate-3?ep=236",
    "number": 24,
    "title": "Achievement Point",
    "isFiller": false
  }
]


</script>


<style>

</style>

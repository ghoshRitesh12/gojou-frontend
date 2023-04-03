<template>

  <div id="episodes-wrapper" 
    class="
    rounded-2xl
    border-x-0 border-y-[1px] lg:border-[1px] 
    border-zinc-600
    "
  >

    <div 
      class="
      flex items-center bg-zinc-900 px-4 select-none
      border-zinc-700 border-b-[1px] relative
      rounded-tr-2xl rounded-tl-2xl
      "
      :class="ranges.length <= 1 ? 'py-3' : 'py-2' "
    >

      <div class="w-fit text-lg md:text-xl ml-1">
        List of Episodes:
      </div>

      <div v-if="ranges.length > 1"
        class="
        flex items-center ml-auto mr-3
        relative isolate z-50
        bg-zinc-700 py-2 px-4
        rounded-xl cursor-pointer
        "
        @click="isSelectorVisible = !isSelectorVisible"
      >

        <div class="pointer-events-none">Eps:</div>
        
        <div class="ml-2 pointer-events-none">
          {{ defaultStartLimit }}-{{ defaultEndLimit }}
        </div>

        <div class="align-middle">
          <Icon 
            icon="material-symbols:keyboard-arrow-down-rounded"
            class="text-lg ml-1 pointer-events-none"
          />
        </div>

      </div>


      <div data-episode-range-selector
        v-if="ranges.length > 1"
        v-show="isSelectorVisible"
        class="
        absolute isolate z-[50] top-[4.2rem] right-[1.5rem]
        bg-zinc-800 rounded-xl overflow-hidden
        border-[1px] border-zinc-600
        "
        ref="rangeSelector"
      >

        <div class="max-h-[12rem] overflow-auto">

          <EpisodeListOption
            v-for="range, index in ranges"
            :key="index"
            :startingRange="range.starting"
            :endingRange="range.ending"
            :is-active="
              defaultStartLimit === range.starting
            "
            @range-change="handleRangeChange"
          />

        </div>

      </div>

    </div>

    <div 
      data-episode-deck 
      class="
      flex flex-wrap gap-2 py-4 px-2 sm:px-4
      relative z-20 isolate bg-primary-900
      min-w-[14rem] max-h-[30rem] w-full
      rounded-br-2xl rounded-bl-2xl overflow-auto
      "
      ref="episodeDeck"
    >
      <EpisodeCard
        v-for="episode in defaultRangeEps" 
        :key="episode.id"
        :id="episode.id" :name="episode.title"
        :number="episode.number" :is-filler="episode.isFiller"
        :active-ep="episode.number === 10 ? true : false"
        class="flex-[100%]"
      />
    </div>

  </div>

</template>


<script setup>
import { ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { Icon } from '@iconify/vue';
import EpisodeCard from './EpisodeCard.vue';
import EpisodeListOption from './EpisodeListOption.vue';

const props = defineProps({
  episodes: {
    type: Array,
  }
})

const isSelectorVisible = ref(false);

const rangeSelector = ref(null);

// onClickOutside(rangeSelector, () => isSelectorVisible.value = false)

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


const maxEpsLimit = ref(10);
const startingRange = ref(1);
const endingRange = ref(maxEpsLimit.value);

const epLength = episodes.length;
const segments = Math.ceil(epLength / maxEpsLimit.value)

const activeRange = ref(0);

const calcRange = () => {
  const ranges = [];

  let start = startingRange.value
  let end = endingRange.value;

  if(segments <= 1) {
    ranges.push({
      starting: start,
      ending: end > epLength ? epLength : end,
    })
    return ranges;
  }

  for(let i=0; i<segments; i++) {
    ranges.push({
      starting: start,
      ending: end,
    })

    start = end + 1;
    const e = (start + maxEpsLimit.value) - 1;
    end = (e > epLength) ? epLength : e;
  }

  return ranges;
  
}
const ranges = calcRange();

const getRangedEps = (start, end) => episodes.slice(start-1, end);

const defaultStartLimit = ref(startingRange.value);
const defaultEndLimit = ref(endingRange.value);
const defaultRangeEps = computed(
  () => getRangedEps(defaultStartLimit.value, defaultEndLimit.value)
)

const handleRangeChange = (data) => {
  defaultStartLimit.value = data.start;
  defaultEndLimit.value = data.end;
  isSelectorVisible.value = false;
}

console.log(segments, ranges);



</script>


<style scoped>

  #episodes-wrapper [data-episode-deck]::-webkit-scrollbar-track {
    @apply rounded-lg;
  }

  #episodes-wrapper [data-episode-deck]::-webkit-scrollbar {
    display: none;
  }
  #episodes-wrapper [data-episode-deck] {
    scrollbar-width: none;
  }

  @media (min-width: 1024px) {
    #episodes-wrapper [data-episode-deck]::-webkit-scrollbar {
      display: block;
    }
    #episodes-wrapper [data-episode-deck] {
      scrollbar-width: thin;
    }
  }


</style>

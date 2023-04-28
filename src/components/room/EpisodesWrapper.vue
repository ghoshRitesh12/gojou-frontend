<template>
  <Suspense>

    <template #default>

      <div id="episodes-wrapper" 
        v-if="episodes.length > 0"
        class="
        rounded-2xl relative z-20
        border-x-0 border-y-[1px] lg:border-[1px] 
        border-zinc-600 overflow-hidden
        "
      >

        <div 
          class="
          flex items-center bg-zinc-900 select-none
          border-zinc-700 border-b-[1px] relative
          rounded-tr-2xl rounded-tl-2xl px-5 2xl:px-6
          "
          :class="ranges.length <= 1 ? 'py-3' : 'py-2' "
        >

          <div class="w-fit text-lg ml-1">
            List of Episodes:
          </div>

          <div v-if="ranges.length > 1"
            class="
            flex items-center ml-auto mr-1
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
                class="text-xl ml-1 pointer-events-none"
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
          flex flex-wrap gap-2 py-4 px-4
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
            :active-ep="episode.number === roomAnimeStore.animeEpNo ? true : false"
          />
        </div>

      </div>

    </template>

    <template #fallback>
      <p>loading</p>
    </template>

  </Suspense>
</template>


<script setup>
import { ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { Icon } from '@iconify/vue';
import EpisodeCard from './EpisodeCard.vue';
import EpisodeListOption from './EpisodeListOption.vue';

import AnimeAPI from '@/services/animeAPI';
import { useRoomAnimeStore } from '@/stores/roomAnimeStore';

const roomAnimeStore = useRoomAnimeStore();


const isSelectorVisible = ref(false);

const rangeSelector = ref(null);

// onClickOutside(rangeSelector, () => isSelectorVisible.value = false)

const episodes = ref([]);
const epLength = ref(0)
const ranges = ref([]);

const maxEpsLimit = ref(50);
const startingRange = ref(1);
const endingRange = ref(maxEpsLimit.value);

const getAllEpisodes = async () => {
  try {
    const { data } = await AnimeAPI.getAnimeEpisodes(roomAnimeStore.animeId);

    episodes.value = data.episodes;
    epLength.value = data.totalEpisodes;


  } catch (err) {
    console.log(err);
  }
}

getAllEpisodes().then(() => {

  ranges.value = (() => {
    const segments = Math.ceil(epLength?.value / maxEpsLimit.value)

    const ranges = [];

    let start = startingRange.value
    let end = endingRange.value;

    if(segments <= 1) {
      ranges.push({
        starting: start,
        ending: end > epLength?.value ? epLength?.value : end,
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
      end = (e > epLength?.value) ? epLength?.value : e;
    }

    return ranges;
    
  })();

})


const getRangedEps = (start, end) => episodes?.value.slice(start-1, end);

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



</script>


<style scoped>

  #episodes-wrapper [data-episode-deck]::-webkit-scrollbar-track {
    @apply rounded-2xl;
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

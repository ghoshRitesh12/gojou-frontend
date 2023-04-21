<template>

  <Suspense>

    <template #default>

      <div 
        class="px-4 pt-4 pb-16 lg:px-6"
        style="transition: .2s ease all"
      >

        <p 
          class="text-accent-200 font-semibold mt-4 mb-5"
          style="font-size: clamp(1.3rem, 3vmin, 1.7rem);"
        >
          Explore cards
        </p>

        <div>
          <ExploreDeck
            class="w-[98%] mx-auto"
            @card-change="getCardAnimes"
            @deselect-card="deselectCard"
          />
        </div>        

        <AnimeDeck
          v-if="cardName"
          :name="cardName"
          :animes="cardAnimes"
          class="mt-10"
        />

        <div 
          v-else v-once
          class="
          relative w-fit mx-auto my-[3rem] md:my-[5rem]
          max-w-[35rem] select-none pointer-events-none
          "
          aria-label="No cards selected. Choose any card to explore."
        >
          <div 
            class="
            opacity-50 pb-[4.5rem] sm:pb-16
            "
          >
            <img 
              src="../../src/assets/gojo-ok.webp" alt=""
              decoding="async"
              fetchpriority="high"
              class="text-sm pointer-events-none"
            />
          </div>

          <div 
            class="
            absolute bottom-0 left-[50%]
            translate-x-[-50%] text-center
            text-base sm:text-lg text-zinc-400 
            leading-[1.2] min-w-[25ch]
            "
          >
            No cards selected. Choose any card to explore.
          </div>

        </div>

      </div>

    </template>

    <template #fallback>
      <p>...loading explore page</p>
    </template>

  </Suspense>
  
</template>


<script setup>
import { ref } from 'vue';
import AnimeDeck from '@/components/AnimeDeck.vue';
import Pagination from '@/components/Pagination.vue';
import ExploreDeck from '@/components/explore/ExploreDeck.vue';
import AnimeAPI from '@/services/animeAPI';

const cardName = ref('');
const cardAnimes = ref([]);

const getCardAnimes = async (eventData) => {
  try {
    cardName.value = eventData.name;

    const { data } = await AnimeAPI.getAnimeExploreCategory(eventData.href)
    
    cardAnimes.value = data.animes;

  } catch (err) {
    console.log(err);
  }
}

const deselectCard = () => {
  cardName.value = '';
  cardAnimes.value = [];
}


</script>


<style>

</style>

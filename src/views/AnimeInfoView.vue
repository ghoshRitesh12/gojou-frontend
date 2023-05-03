<template>

  <Suspense>

    <template #default>

      <div data-anime class="px-4 pt-4 pb-[5rem] md:pb-14 lg:px-6">

        <div class="">

          <AnimeContent
            v-if="Object.keys(animeContent).length > 0"
            :content="animeContent"
          />

          <SeasonsDeck
            v-if="animeSeasons.length > 0"
            :seasons="animeSeasons"
            class="my-6"
          />

        </div>

        <section class="xl:flex gap-10 mt-8 relative isolate z-40">

          <AnimeDeck
            :name="'Animes you may like'"
            :animes="recommendedAnimes"
            class="flex-[70%] 2xl:flex-[75%]"
          />

          <div class="flex-[35%] 2xl:flex-[25%]">

            <FeatAnimeDeck
              v-if="relatedAnimes.length > 0"
              :name="'Related Anime'"
              :animes="relatedAnimes"
              class="mt-10 md:mt-16"
              
            />
            
            <FeatAnimeDeck
              v-if="mostPopularAnimes.length > 0"
              :name="'Most Popular'"
              :animes="mostPopularAnimes"
              class="mt-8"
            />
            
          </div>

        </section>    

      </div>

    </template>


    <template #fallback>
      <p>... Loading </p>
    </template>

  </Suspense>

</template>


<script setup>
import { ref, provide } from 'vue';
import { useRoute } from 'vue-router';
import AnimeDeck from '@/components/AnimeDeck.vue';
import FeatAnimeDeck from '@/components/home/FeatAnimeDeck.vue';
import SeasonsDeck from '@/components/animeInfo/SeasonsDeck.vue';
import AnimeContent from '@/components/animeInfo/AnimeContent.vue';
import AnimeAPI from '@/services/animeAPI.js';

const route = useRoute();

const relatedAnimes = ref([]);
const mostPopularAnimes = ref([]);
const recommendedAnimes = ref([]);

const animeSeasons = ref([]);
const animeContent = ref({});
// const animeInfo = ref({});
// const animeMoreInfo = ref({});


const getData = async () => {
  try {
    const { data } = await AnimeAPI.getAnimeInfo(route.params.animeId);

    relatedAnimes.value = data.relatedAnimes;
    recommendedAnimes.value = data.recommendedAnimes;
    mostPopularAnimes.value = data.mostPopularAnimes;

    animeSeasons.value = data.seasons;
    animeContent.value = data.anime;



  } catch (err) {
    console.log(err);
  }
}

getData()
// provide('animeInfo', animeInfo)
// provide('animeMoreInfo', animeMoreInfo)


</script>


<style>

</style>

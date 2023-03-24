<template>

  <Suspense>

    <template #default>

      <div data-anime>

        <div>

          <AnimeContent/>

          <SeasonsDeck
            v-if="animeSeasons.length > 0"
            :seasons="animeSeasons"
          />

        </div>

        <section class="xl:flex gap-8 mt-8">

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

const route = useRoute();

const relatedAnimes = ref([]);
const mostPopularAnimes = ref([]);
const recommendedAnimes = ref([]);

const animeSeasons = ref([]);
const animeContent = ref({});

const getAnimeInfo = async () => {
  try {
    const resp = await fetch(`http://localhost:5000/api/v1/info?id=${route.params.animeId}`);
    const data = await resp.json();

    relatedAnimes.value = data.relatedAnimes;
    mostPopularAnimes.value = data.mostPopularAnimes;
    recommendedAnimes.value = data.recommendedAnimes;

    animeSeasons.value = data.seasons;
    animeContent.value = data.anime;
     
    // return animeContent;
    // console.log(animeContent.value);
    
  } catch (err) {
    console.log(err);
  }
}

provide('anime-content', animeContent);
getAnimeInfo()

</script>


<style>

</style>

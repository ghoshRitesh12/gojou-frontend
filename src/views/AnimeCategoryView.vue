<template>
  
  <Suspense>

    <template #default>
      <div class="xl:flex gap-10 mt-4 px-4 pt-4 pb-[5rem] md:pb-14 lg:px-6">

        <AnimeDeck
          :animes="categoryAnimes"
          :name="categoryName()"
          class="flex-[70%] 2xl:flex-[75%]"
        >

          <template #footer>
            <Pagination
              :current-page="page"
              :has-next-page="hasNextPage"
              :total-pages="totalPages"
              :param="`anime/${route.params.animeCategory}?`"
            />
          </template>

        </AnimeDeck>


        <div class="flex-[35%] 2xl:flex-[25%] pt-4">

          <MostViewedDeck
            :all-animes="mostViewedAnimes"
          />

          <GenreDeck
            :genres="genres"
            :length="genres.length"
            class="mt-8"
          />

        </div>

      </div>
    </template>

    <template #fallback>
      <p>Loading...</p>
    </template>

  </Suspense>

</template>


<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AnimeDeck from '@/components/AnimeDeck.vue';
import MostViewedDeck from '@/components/home/MostViewedDeck.vue';
import GenreDeck from '@/components/home/GenreDeck.vue';
import Pagination from '@/components/Pagination.vue';
import AnimeAPI from '@/services/animeAPI.js';

const route = useRoute();
const page = parseInt(route.query.page) || 1;


const categoryAnimes = ref([]);
const genres = ref([]);
const mostViewedAnimes = ref({});


const hasNextPage = ref(false);
const totalPages = ref(0);

const getData = async () => {
  try {
    const { data } = await AnimeAPI.getAnimeCategory(route.params.animeCategory, page);

    categoryAnimes.value = data.animes;
    genres.value = data.genres;
    mostViewedAnimes.value = data.mostViewedAnimes;

    hasNextPage.value = data.hasNextPage;
    totalPages.value = data.totalPages;


  } catch (err) {
    console.log(err);
  }
}

getData();

const categoryName = () => {
  const name = route.params.animeCategory
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (name === 'Tv') ? `${name.toUpperCase()} Series Anime` : `${name}`; 
}




</script>


<style></style>

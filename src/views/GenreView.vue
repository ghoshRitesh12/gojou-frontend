<template>

  <Suspense>

    <template #default>
      <section class="xl:flex gap-8 px-4 pt-4 pb-[5rem] md:pb-14 lg:px-6">
        <AnimeDeck
          :name="genreName"
          :animes="genreAnimes"
          class="flex-[70%] 2xl:flex-[75%]"
        >
          <template #footer>
            <Pagination
              :current-page="currentPage"
              :has-next-page="hasNextPage"
              :total-pages="totalPages"
              :param="`genre/${route.params.genreName}?`"
            />
          </template>
        </AnimeDeck>

        <div class="flex-[35%] 2xl:flex-[25%]">
          <GenreDeck
            :genres="allGenres"
            :length="allGenres.length"
            class="mt-16"
          />

          <FeatAnimeDeck
            :name="'Top Airing'"
            :animes="topAiringAnimes"
            :href="'top-airing'"
            class="mt-8"
          />
        </div>

      </section>
    </template>

    <template #fallback>
      ...Loading content
    </template>

  </Suspense>

</template>


<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import AnimeDeck from '@/components/AnimeDeck.vue';
import Pagination from '@/components/Pagination.vue';
import FeatAnimeDeck from '@/components/home/FeatAnimeDeck.vue';
import GenreDeck from '@/components/home/GenreDeck.vue';
import AnimeAPI from '@/services/animeAPI';

const route = useRoute();

const genreAnimes = ref([]);
const allGenres = ref([]);
const topAiringAnimes = ref([]);

const currentPage = parseInt(route.query.page) || 1;
const totalPages = ref(0);
const hasNextPage = ref(false);

const genreName = computed(() => {
  const name = route.params.genreName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return `${name} Anime`;
})


const getGenres = async () => {
  try {
    const { data } = await AnimeAPI.getGenreAnime(route.params.genreName);

    genreAnimes.value = data.animes;
    allGenres.value = data.genres;
    topAiringAnimes.value = data.topAiringAnimes;

    totalPages.value = data.totalPages;
    hasNextPage.value = data.hasNextPage;

  } catch (err) {
    console.log(err);
  }
}

getGenres();


</script>


<style>

</style>

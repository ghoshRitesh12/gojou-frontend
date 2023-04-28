<template>
  
  <Suspense>

    <template #default>

      <section class="xl:flex gap-8 px-4 pt-4 pb-[5rem] lg:px-6">

        <AnimeDeck
          :animes="results"
          :name="`Search results for: ${route.query.q}`"
          class="flex-[75%]"
        >
          <template #footer>
            <Pagination
              :current-page="currentPage"
              :has-next-page="hasNextPage"
              :total-pages="totalPages"
              :param="`search?q=${route.query.q}&`"
            />
          </template>
        </AnimeDeck>

        <div class="flex-[25%] mt-8 xl:mt-16">
          <FeatAnimeDeck
            :name="'Most Popular'"
            :animes="mostPopularAnimes"
            :href="'most-popular'"
            class="w-full"
          />
        </div>

      </section>

    </template>

    <template #fallback>
      <p>
        ...Loading
      </p>
    </template>

  </Suspense>

</template>


<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AnimeAPI from '@/services/animeAPI';

import AnimeDeck from '@/components/AnimeDeck.vue';
import Pagination from '@/components/Pagination.vue';
import FeatAnimeDeck from '@/components/home/FeatAnimeDeck.vue';

const route = useRoute();

const hasNextPage = ref(false);
const totalPages = ref(0);
const results = ref([]);
const currentPage = parseInt(route.query.page) || 1;
const mostPopularAnimes = ref([]);

const getSearchResults = async () => {
  try {
    const { data } = await AnimeAPI.getSearchResults(route.query.q, currentPage);

    results.value = data.animes;
    hasNextPage.value = data.hasNextPage;
    totalPages.value = data.totalPages;
    mostPopularAnimes.value = data.mostPopularAnimes;

  } catch (err) {
    console.log(err);
  }
}

getSearchResults();

</script>


<style>

</style>

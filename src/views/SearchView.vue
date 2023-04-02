<template>
  
  <Suspense>

    <template #default>

      <section class="xl:flex gap-8 pt-4 px-4 lg:px-6 py-4">

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
    const resp = await fetch(`http://localhost:5000/api/v1/search?q=${route.query.q}&page=${currentPage}`);
    const data = await resp.json();

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

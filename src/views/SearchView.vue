<template>
  
  <Suspense>

    <template #default>
      <section>

        <AnimeDeck
          :animes="results"
          :name="`Search results for: ${route.query.q}`"
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

const route = useRoute();

const hasNextPage = ref(false);
const totalPages = ref(0);
const results = ref([]);
const currentPage = parseInt(route.query.page) || 1;

const getSearchResults = async () => {
  try {
    const resp = await fetch(`http://localhost:5000/api/v1/search?q=${route.query.q}&page=${currentPage}`);
    const data = await resp.json();

    results.value = data.animes;
    hasNextPage.value = data.hasNextPage;
    totalPages.value = data.totalPages;

  } catch (err) {
    console.log(err);
  }
}

getSearchResults();

</script>


<style>

</style>

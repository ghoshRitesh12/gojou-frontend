<template>

  <Suspense>

    <template #default>

      <div class="p-4 lg:px-6">

        <p 
          class="text-accent-200 font-semibold mt-4 mb-8"
          style="font-size: clamp(1.3rem, 3vmin, 1.7rem);"
        >
          Cards to explore
        </p>

        <div>
          <ExploreDeck/>
        </div>        

        <AnimeDeck
          :name="'Explore'"
          :animes="[]"
          class="mt-6"
        />

      </div>

    </template>

    <template #fallback>
      <p>...loading explore page</p>
    </template>

  </Suspense>
  
</template>


<script setup>
import AnimeDeck from '@/components/AnimeDeck.vue';
import ExploreDeck from '@/components/explore/ExploreDeck.vue';
import AnimeAPI from '@/services/animeAPI';






</script>


<style>

</style>

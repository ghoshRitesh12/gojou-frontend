<template>

  <div 
    class="
    relative min-h-full
    bg-white/10 mt-8 w-full xl:w-fit
    rounded-xl overflow-hidden
    p-8
    "
  >

    <AnimeMoreInfo
      v-if="moreInfo.premiered"
      :keyname="'Premiered'"
      :value="moreInfo.premiered"
    />
    <AnimeMoreInfo
      v-if="moreInfo.status"
      :keyname="'Status'"
      :value="moreInfo.status"
    />
    <AnimeMoreInfo
      v-if="moreInfo.aired"
      :keyname="'Aired'"
      :value="moreInfo.aired"
    />

    <div 
      class="pt-2 my-4"
      style="border-block: 1px solid rgba(255, 255, 255, .2)"
    >

      <AnimeMoreInfo
        v-if="moreInfo.japanese"
        :keyname="'Japanese'"
        :value="moreInfo.japanese"
      />
      <AnimeMoreInfo
        v-if="moreInfo.synonyms"
        :keyname="'Synonyms'"
        :value="moreInfo.synonyms"
      />
      <AnimeMoreInfo
        v-if="moreInfo.malscore"
        :keyname="'MAL Score'"
        :value="moreInfo.malscore"
      />
      <AnimeMoreInfo
        v-if="moreInfo.duration"
        :keyname="'Duration'"
        :value="moreInfo.duration"
      />

    </div>

    <AnimeMoreInfo
      v-if="moreInfo.producers"
      :keyname="'Producers'"
      :value="moreInfo.producers"
    />
    <AnimeMoreInfo
      v-if="moreInfo.studios"
      :keyname="'Studios'"
      :value="moreInfo.studios"
    />
    <AnimeMoreInfo :keyname="'Genres'">
      <template #more-info>

        <div class="flex flex-wrap gap-1">
          <template v-for="genre in moreInfo.genres.split(',')">
            <RouterLink 
              :to="`/genre/${genre.trim().replace(' ', '-').toLowerCase()}`"
              class="
              border-[1px] border-zinc-300/50 
              rounded-lg px-2 hover:text-accent-200
              transition ease-in duration-200
              "
            >
              {{ genre }}
            </RouterLink>
          </template>
        </div>

      </template>
    </AnimeMoreInfo>

    <!-- <pre>
      {{ JSON.stringify(moreInfo, null, ' ') }}
    </pre> -->


  </div>
  
</template>


<script setup>
import { inject } from 'vue';
import AnimeMoreInfo from './AnimeMoreInfo.vue';

const { moreInfo } = inject('anime-content').value;

const props = defineProps({
  info: {
    type: Object,
  }
})

// premiered
// status
// aired
// -----------------
// japanese
// synonyms
// mal_score
// duration
// ------------------
// producers
// studios
// genres


</script>


<style>

</style>

<template>

  <div 
    class="
    relative min-h-full
    bg-white/10 mt-8 w-full xl:w-fit
    rounded-xl overflow-hidden
    p-4 sm:p-6
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
    <AnimeMoreInfo 
      :keyname="'Genres'"
    >
      <template #extra>

        <div class="flex flex-wrap gap-1">
          <template v-for="genre in genres">
            <RouterLink 
              :to="`/genre/${genre.replace(' ', '-').toLowerCase()}`"
              class="
              border-[1px] border-zinc-300/50 
              rounded-lg px-2 hover:text-accent-200
              transition ease-in duration-200 py-[.15rem]
              "
            >
              {{ genre }}
            </RouterLink>
          </template>
        </div>

      </template>
    </AnimeMoreInfo>

  </div>
  
</template>


<script setup>
import { inject, computed } from 'vue';
import AnimeMoreInfo from './AnimeMoreInfo.vue';


const moreInfo = inject('animeMoreInfo');

const genres = computed(() => moreInfo.value.genres)

// console.log('Genres: ', genres());
// console.log(props.info);

const props = defineProps({
  info: {
    type: Object,
  }
})


</script>


<style></style>

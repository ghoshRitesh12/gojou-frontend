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
      :keyname="'Premiered'"
      :value="props.info.premiered"
    />
    <AnimeMoreInfo
      :keyname="'Status'"
      :value="props.info.status"
    />
    <AnimeMoreInfo
      :keyname="'Aired'"
      :value="props.info.aired"
    />

    <div 
      class="pt-2 my-4"
      style="border-block: 1px solid rgba(255, 255, 255, .2)"
    >

      <AnimeMoreInfo
        :keyname="'Japanese'"
        :value="props.info.japanese"
      />
      <AnimeMoreInfo
        :keyname="'Synonyms'"
        :value="props.info.synonyms"
      />
      <AnimeMoreInfo
        :keyname="'MAL Score'"
        :value="props.info.malscore"
      />
      <AnimeMoreInfo
        :keyname="'Duration'"
        :value="props.info.duration"
      />

    </div>

    <AnimeMoreInfo
      :keyname="'Producers'"
      :value="props.info.producers"
    />
    <AnimeMoreInfo
      :keyname="'Studios'"
      :value="props.info.studios"
    />
    <AnimeMoreInfo :keyname="'Genres'">
      <template #more-info>

        <div class="flex flex-wrap gap-1">
          <template v-for="genre in props.info.genres.split(',')">
            <RouterLink 
              :to="`/genre/${genre.trim().replace(' ', '-').toLowerCase()}`"
              class="border-[1px] border-zinc-300/50 rounded-lg px-2"
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
import AnimeMoreInfo from './AnimeMoreInfo.vue';

const props = defineProps({
  info: {
    type: Object,
    required: true
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

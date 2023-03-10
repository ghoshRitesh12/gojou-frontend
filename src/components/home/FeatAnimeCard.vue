<template>

  <div data-feat-card
    class="
    flex items-center relative w-full 
    mx-auto px-4 py-2 rounded-md mb-2
    "
  >

    <div
      class="
      max-w-[3rem] rounded-lg overflow-hidden 
      cursor-pointer shadow-lg
      "
      :title="props.name"
      @click="goToAnime(props.id)"
    >
      <img 
        class="pointer-events-none"
        :src="props.poster" 
        :alt="props.name" 
      />
    </div>
    
    <div class="pl-4">
      <p 
        class="
        leading-[1.2] mb-1 overflow-hidden
        hover:text-accent-200 cursor-pointer
        transition ease-in duration-100
        "
        style="
          display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        "
        :title="props.jname"
        @click="goToAnime(props.id)"
      >
        {{ props.name }}  
      </p>

      <div
        class="flex items-center text-sm text-zinc-400"
      >

        <template v-for="info, index in props.otherInfo">
          <span class="whitespace-nowrap"> {{ info }} </span>
          <Icon
            v-if="index !== props.otherInfo.length - 1"
            :icon="'bi:dot'" 
            class="text-neutral-400 md:text-sm"
          />
        </template>

      </div>
    </div>

  </div>

</template>


<script setup>
import goToRoute from '@/composables/goToRoute';
import { Icon } from '@iconify/vue';

const { goToAnime } = goToRoute();

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  jname: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  otherInfo: {
    type: Array,
    required: true
  },
});

const sampleA = {
  "id": "attack-on-titan-the-final-season-part-3-18329",
  "name": "Attack on Titan: The Final Season Part 3",
  "jname": "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
  "poster": "https://img.zorores.com/_r/300x400/100/54/d3/54d3f59bcc7caf1539c701eb0a064ec9/54d3f59bcc7caf1539c701eb0a064ec9.png",
  "otherInfo": [
    "TV",
    "Ep 1",
    "61m"
  ]
}

</script>


<style></style>

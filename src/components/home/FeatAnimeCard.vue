<template>

  <div data-feat-card
    class="
    flex items-center relative w-full 
    mx-auto px-4 py-3 rounded-md font-semibold
    "
  >

    <RouterLink
      class="
      max-w-[3rem] rounded-lg overflow-hidden 
      cursor-pointer shadow-lg
      "
      :title="props.name"
      :to="`/anime/info/${props.id}`"
    >
      <img 
        class="pointer-events-none text-sm"
        :src="props.poster" 
        :alt="props.name" 
        decoding="async"
        loading="lazy"
      />
    </RouterLink>
    
    <div class="pl-4">
      <RouterLink 
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
        :to="`/anime/info/${props.id}`"
      >
        {{ props.name }}  
      </RouterLink>

      <div
        class="overflow-hidden font-semibold align-middle text-sm text-zinc-400 verti"
        style="
          display: -webkit-box; -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        "
      >

        <template v-for="info, index in props.otherInfo">
          <span class="whitespace-nowrap inline-block"> 
            {{ index === 0 ? `Eps: ${info}` : info }} 
          </span>
          <Icon
            v-if="index !== props.otherInfo.length - 1"
            :icon="'bi:dot'" 
            class="text-neutral-400 text-lg inline-block"
          />
        </template>

      </div>
    </div>

  </div>

</template>


<script setup>
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';


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

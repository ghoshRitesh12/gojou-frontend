<template>

  <div 
    class="
    flex p-4 group hover:bg-zinc-800
    rounded-xl relative overflow-hidden
    transition ease-in duration-100
    "
    :class="props.id ? 'cursor-pointer' : ''"
  >

    <div 
      class="
      rounded-lg overflow-hidden max-w-[3rem] max-h-[4.5rem]
      "
      v-if="props.poster"
    >
      <img 
        :src="props.poster" 
        :alt="props.name"
        class="h-full w-full" 
      />
    </div>

    <div class="pl-3">
      <p
        class="
        overflow-hidden text-base leading-[1.17]
        transition ease-in duration-100
        "
        :class="props.id ? 'group-hover:text-accent-200 mb-1' : ''"
        :style="`
          display: -webkit-box; 
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        `"
      >
        {{ props.name }}
      </p>

      <div class="flex items-center text-[.8rem]">
        <template v-for="info, index in props.moreInfo">

          <span 
            class="
            text-neutral-400 whitespace-nowrap font-semibold
            "
          > 
            {{ info }} 
          </span>

          <Icon
            v-if="index !== props.moreInfo.length - 1"
            :icon="'bi:dot'" 
            class="text-neutral-400 text-lg"
          />

        </template>
      </div>
    </div>

    <RouterLink
      v-if="props.id"
      :to="`/anime/info/${props.id}`"
      :title="props.name"
      class="absolute h-full w-full"
    >
    </RouterLink>

  </div>

</template>


<script setup>
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';


const props = defineProps({
  id: {
    type: String,
    default: null
  },
  name: {
    type: String,
  },
  poster: {
    type: String,
  },
  moreInfo: {
    type: Array,
  },

})

</script>


<style>

</style>

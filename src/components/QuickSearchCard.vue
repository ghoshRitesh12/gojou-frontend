<template>

  <!-- border-dotted border-accent-400 border-b-2 -->
  <div 
    class="
    flex p-4 group hover:bg-zinc-800
    cursor-pointer rounded-xl relative
    transition ease-in duration-100 overflow-hidden
    "
  >

    <div 
      class="
      rounded-lg overflow-hidden max-w-[3rem] max-h-[4.5rem]
      "
    >
      <img class="h-full w-full" :src="props.poster" :alt="props.name">
    </div>

    <div class="pl-3 pt-2">
      <p
        class="
        overflow-hidden text-base group-hover:text-accent-200
        transition ease-in duration-100 cursor-pointer leading-[1.1]
        "
        style="
          display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        "
        :title="props.name"
      >
        {{ props.name }}
      </p>

      <div class="flex items-center text-[.8rem] mt-1">
        <template v-for="info, index in props.moreInfo">

          <span 
            class="
            text-neutral-400 whitespace-nowrap
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
      :to="`/anime/info/${props.id}`"
      class="absolute h-full w-full"
    >
    </RouterLink>

  </div>

</template>


<script setup>
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
  poster: {
    type: String,
    required: true
  },
  moreInfo: {
    type: Array,
    required: true
  },

})

</script>


<style>

</style>

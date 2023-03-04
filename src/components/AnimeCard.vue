<template>
  
  <div
    class="
    rounded-xl w-full overflow-hidden
    bg-zinc-900 break-words max-w-[18rem] min-w-[14rem]
    "
  >

    <div :data-anime-id="info.id">

      <div data-poster
        class="
        relative isolate
        after:absolute after:content-[' ']
        after:h-[50%] after:bottom-0 after:top-auto
        after:w-full after:pointer-events-none
        after:bg-gradient-to-b from-transparent to-zinc-900
        "
      >
        <span v-if="info.rating"
          class="
          absolute left-[.7rem] top-[.7rem]
          px-2 py-[.15rem] shadow-md
          bg-accent-400 rounded-lg text-center text-[.9rem]
          "
        >
          {{ info.rating }}
        </span>
        <span v-if="info.episodes"
          class="
          absolute bottom-[1rem] right-[.7rem]
          bg-neutral-900 py-[.2rem] px-2
          rounded-lg text-sm shadow-md z-10
          "
        >
          Ep {{ info.episodes }}
        </span>

        <img 
          class="cursor-pointer w-full"
          :src="info.poster" 
          :alt="info.name"
          @click="goToAnime"
        />
      </div>

      <div data-info class="py-3 px-3 w-full">
        <p 
          class="
          text-[1.08rem] leading-5
          cursor-pointer hover:text-accent-200
          transition ease-in duration-100
          "
          @click="goToAnime"
        >
          {{ info.name }}
        </p>

        <div class="flex items-center mt-3">
          <span v-if="info.type" class="text-sm text-neutral-400">
            {{ info.type }}
          </span>
          <Icon :icon="'bi:dot'" class="text-neutral-400"/>
          <span v-if="info.duration" class="text-sm text-neutral-400">
            {{ info.duration }}
          </span>
        </div>
      </div>

    </div>

  </div>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
})

const goToAnime = () => router.push(`/anime/info/${props.info.id}`)

</script>


<style></style>

<!-- {
  "id": "fullmetal-alchemist-brotherhood-1",
  "name": "Fullmetal Alchemist: Brotherhood",
  "poster": "https://img.zorores.com/_r/300x400/100/0d/2d/0d2d0a1d4276e7e2595702dc4cebbda9/0d2d0a1d4276e7e2595702dc4cebbda9.jpeg",
  "duration": "24m",
  "type": "TV",
  "aboutPage": "https://zoro.to/fullmetal-alchemist-brotherhood-1",
  "rating": "18+",
  "episodes": "64/64"
} -->

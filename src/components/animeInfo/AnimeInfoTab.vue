<template>

  <div 
    class="flex items-start gap-6 flex-wrap flex-grow-0
    md:flex-nowrap justify-center sm:gap-12
    "
  >

    <div 
      class="
      flex-shrink-0 flex-grow-0 max-w-[9rem] sm:max-w-[12rem] 
      overflow-hidden shadow-xl rounded-xl relative h-fit
      "
    >
      <img 
        class="w-full rounded-xl" 
        :src="info.poster" 
        :alt="info.name"
        decoding="async"
        fetchpriority="high"
      >
    </div>


    <div data-info class="text-center md:text-left">

      <div class="font-semibold">

        <div
          class="
          text-white leading-[1.2] max-w-[30ch] 
          mx-auto md:ml-0
          "
          style="font-size: clamp(1.7rem, 4vmin, 2.2rem)"
        >
          {{ info.name }}
        </div>

        <div class="text-neutral-300 text-[.88rem] md:text-base mt-2">
          <template v-for="stat, index in info.stats">
            <span class="whitespace-nowrap inline-block"> {{ stat }} </span>
            <Icon
              v-if="index !== info.stats.length - 1"
              :icon="'bi:dot'" 
              class="text-lg inline-block"
            />
          </template>
        </div>

      </div>

      <div 
        class="
        flex items-center gap-x-4 my-8 w-fit 
        flex-col sm:flex-row gap-y-3
        mx-auto md:w-full font-semibold
        " 
        style="font-size: clamp(.85rem, 2.5vmin, 1rem)"
      >
        <button 
          v-if="isFav"
          class="
          flex items-center gap-1 text-primary-900
          py-[.6rem] px-4 rounded-2xl shadow-lg text-[.98rem]
          bg-zinc-100 hover:bg-zinc-300
          transition ease-in duration-100"
          type="button"
          @click="removeFromFavorite"
        >
          <Icon icon="material-symbols:delete-rounded" class="text-base"/>
          Remove from Favorites
        </button>

        <button 
          v-else
          class="
          flex items-center gap-1 text-primary-900
          py-[.6rem] px-4 rounded-2xl shadow-lg text-[.98rem]
          bg-zinc-100 hover:bg-zinc-300
          transition ease-in duration-100"
          type="button"
          @click="addToFavorite"
        >
          <Icon icon="ic:round-add" class="text-lg"/>
          Add to Favorites
        </button>

        <button 
          class="
          flex items-center justify-center gap-1 text-[.98rem]
          py-[.6rem] px-4 shadow-lg bg-accent-300 w-full sm:w-fit
          hover:bg-accent-200 rounded-2xl text-primary-900
          transition ease-in duration-100"
          type="button"
          @click="router.push('/room/6234181754377342')"
        >
          <Icon icon="material-symbols:play-arrow-rounded" class="text-lg" />
          Watch
        </button>

      </div>

      <div 
        class="
        text-[.95rem] text-left
        max-h-[7rem] sm:max-h-[9rem] xl:max-h-fit overflow-auto
        leading-[1.2] xl:leading-[1.4]
        max-w-[75ch] xl:overflow-hidden
        anime-description pr-2
        "
      >
        <span class="xl:inline hidden">{{ description }}</span>
        <span class="xl:hidden inline">{{ info.description }}</span>
        <span 
          class="
          hidden xl:inline ml-[.1rem] text-zinc-300/90
          font-semibold cursor-pointer select-none
          "
          @click="showMoreDescription"
          v-if="info.description?.length > minCharNum"
        >
          ...<span>{{ showDescText }}</span>
        </span>
      </div>

    </div>

  </div>

</template>


<script setup>
import { inject, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import UserAPI from '@/services/userAPI';
import { Icon } from '@iconify/vue';
import { openAuthModal } from '@/stores/auth';
import { useUserStore } from '@/stores/userStore';

const router = useRouter();
const userStore = useUserStore();

const animeInfo = inject('animeInfo');
const info = computed(() => animeInfo.value)

const minCharNum = 550;
const maxChar = ref(minCharNum);

const description = computed(() => info.value.description?.slice(0, maxChar.value));
const descriptionLength = computed(() => info.value.description?.length)

const showDescText = ref('Read more');

const showMoreDescription = () => {
  if(showDescText.value.includes('more')) {
    showDescText.value = 'Show less'
    maxChar.value = descriptionLength.value;
    return;
  }
  showDescText.value = 'Read more'
  maxChar.value = minCharNum;
}

const isFav = ref(false);

const addToFavorite = async () => {
  if(!userStore.isAuth)
    return openAuthModal();

  try {
    const animeInfo = {
      id: info.value?.id,
      name: info.value?.name,
      poster: info.value?.poster,
      type: info.value?.stats.at(-2),
      duration: info.value?.stats.at(-1),
      episodes: info.value?.stats?.at(-3) || null,
    };

    await UserAPI.addFavoriteAnime(animeInfo)
    isFav.value = true;

  } catch (error) {
    isFav.value = false;
    console.log(error);
  }
}

const removeFromFavorite = async () => {
  try {
    await UserAPI.removeFavoriteAnime(info.value.id);
    isFav.value = false;
  } catch (error) {
    isFav.value = true;
  }
}

const checkIfFavorite = async () => {
  try {
    await UserAPI.isFavoriteAnime(info.value.id);
    isFav.value = true;
  } catch (err) {
    isFav.value = false;
  }
}
checkIfFavorite();


</script>


<style scoped>

  .anime-description::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .anime-description::-webkit-scrollbar { 
    width: .8rem; 
  }
  .anime-description::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, .7);
    border-color: transparent;
  }

</style>

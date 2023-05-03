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
            <span class="whitespace-nowrap inline-block"> 
              {{  index !== 1 ? stat : `Ep ${stat}` }} 
            </span>
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
          class="
          text-primary-900
          py-[.6rem] px-4 rounded-2xl shadow-lg text-[.98rem]
          bg-zinc-100 hover:bg-zinc-300
          transition ease-in duration-100"
          type="button"
          @click="alterFavorite"
        >
          <div 
            v-if="isFav"
            class="flex items-center gap-1"
          >
            <Icon icon="material-symbols:delete-rounded" class="text-base"/>
            Remove from Favorites
          </div>

          <div 
            v-else
            class="flex items-center gap-1"
          >
            <Icon icon="ic:round-add" class="text-lg"/>
            Add to Favorites
          </div>

        </button>

        <button 
          class="
          flex items-center justify-center gap-1 text-[.98rem]
          py-[.6rem] px-4 shadow-lg bg-accent-300 w-full sm:w-fit
          hover:bg-accent-200 rounded-2xl text-primary-900
          transition ease-in duration-100"
          type="button"
          @click="toggleRoomModal"
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

    <RoomModal
      :avatar="info.poster"
      :anime-id="info.id"
    />

  </div>

</template>


<script setup>
import { inject, computed, ref } from 'vue';
import UserAPI from '@/services/userAPI';
import { openAuthModal } from '@/stores/auth';
import { openRoomModal } from '@/stores/roomStore';
import { useUserStore } from '@/stores/userStore';
import { setPopupMessage } from '@/stores/popup';
import { Icon } from '@iconify/vue';
import RoomModal from '../rooms/RoomModal.vue';


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


// watch logic goes below
const toggleRoomModal = () => {
  if(!userStore.isAuth) return openAuthModal();
  openRoomModal();
}



// favorite logic goes below
const isFav = ref(false);

const addToFavorite = async () => {
  try {
    const animeInfo = {
      id: info.value?.id,
      name: info.value?.name,
      poster: info.value?.poster,
      type: info.value?.stats?.at(-3),
      duration: info.value?.stats?.at(-1),
      episodes: info.value?.stats?.at(-2),
    };

    const { data } = await UserAPI.addFavoriteAnime(animeInfo)
    isFav.value = true;
    setPopupMessage(data.message)

  } catch (error) {
    isFav.value = false;
    console.log(error);
  }
}
const removeFromFavorite = async () => {
  try {
    const { data } = await UserAPI.removeFavoriteAnime(info.value.id);
    isFav.value = false;
    setPopupMessage(data.message)
  } catch (error) {
    isFav.value = true;
  }
}

const alterFavorite = async () => {
  if(!userStore.isAuth) 
    return openAuthModal();

  if(isFav.value) 
    return removeFromFavorite();

  addToFavorite()
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

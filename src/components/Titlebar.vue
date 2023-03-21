<template>

  <header id="titlebar"
    class="
    sticky top-0 z-[110]
    flex items-center gap-2
    isolate bg-primary-glass
    backdrop-blur-[5rem] py-4 px-6
    rounded-bl-lg rounded-br-lg
    "
  >

    <Search 
      class="relative ml-4 max-w-[20rem] w-[100%] min-w-[6rem]"
      @data-search="searchReq"
      @input-search="getSearchSuggestions"
      placeholder="anime..."
    >
      <template #results>
        <QuickSearchDeck 
          v-show="searchResults.length > 0"
          :results="searchResults"
          :href="searchKeyword"
          ref="quickSearchDeck"
          @open-results="searchResults.length = 0"
          class="absolute w-full"
        />
      </template>
    </Search>

    <Profile class="ml-auto mr-6">
      <template v-if="isAuth">

        <div 
          class="
          flex items-center gap-4
          rounded-xl cursor-pointer
          "  
          @click="router.push('/profile')"
        >
          <Dp class="max-w-[2.5rem] max-h-[2.5rem] pointer-events-none"/>
          <UserName class="pointer-events-none"/>
        </div>

      </template>
    </Profile>

  </header>

</template>


<script setup>
import { useRouter } from 'vue-router';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import Search from './Search.vue';
import Profile from './Profile.vue';
import Dp from './Dp.vue';
import UserName from './UserName.vue';
import QuickSearchDeck from './QuickSearchDeck.vue';

const router = useRouter();

const quickSearchDeck = ref(null);
const searchResults = ref([]);
const searchKeyword = ref(null);

onClickOutside(quickSearchDeck, () => searchResults.value.length = 0)

const searchReq = (data) => {
  if(data) {
    router.push(`/search?q=${data}`)
    searchResults.value.length = 0
  }
}

const getSearchSuggestions = async (inputData) => {
  try {
    searchKeyword.value = inputData;
    const resp = await fetch(`http://localhost:5000/api/v1/quick-search?q=${inputData}`);
    const data = await resp.json();

    searchResults.value = data.animes;
    if(searchResults.value[0].id === null)
      searchKeyword.value = null;

  } catch (err) {
    console.log(err);
  }
}

// const 

const isAuth = true;

</script>


<style>
/* * { color: #0d0d0d33 } */
</style>

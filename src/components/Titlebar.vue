<template>

  <header id="titlebar"
    class="
    relative lg:sticky top-0 z-[110]
    flex items-center gap-2
    isolate bg-primary-glass
    backdrop-blur-[5rem] py-3 px-2 md:px-6 md:py-2
    "
  >
    <AppLogo 
      class="px-2 mr-auto md:hidden"
    />

    <div class="md:min-w-[6rem] md:max-w-[20rem] md:w-full">

      <div 
        class="block md:hidden ml-auto cursor-pointer group"
        @click="toggleMobileSearch"  
      >
        <Icon 
          class="text-slate-400 text-2xl focus:text-accent-300" 
          icon="ri:search-line"
        />
      </div>

      <div 
        class="
        absolute bottom-[-4.5rem] w-full left-0
        px-6 bg-primary-900 py-3 border-[0px]
        md:block md:inset-auto md:relative md:p-0
        md:bg-transparent
        "
        :class="isSearchBarOpen ? 'block' : 'hidden'"
      >

        <Search 
          class="
          md:relative md:max-w-[20rem] w-full md:min-w-[6rem]
          "
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
        
      </div>

        
    </div>


    <Profile class="mr-2 ml-4 md:ml-auto lg:mr-6"/>

  </header>

</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onClickOutside } from '@vueuse/core';

import { Icon } from '@iconify/vue';
import AppLogo from './AppLogo.vue';
import Search from './Search.vue';
import Profile from './Profile.vue';
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

const isSearchBarOpen = ref(false);

const toggleMobileSearch = () => {
  isSearchBarOpen.value = !isSearchBarOpen.value
}



</script>


<style scoped>

  @media (min-width: 768px) {
    .search-bar {
      display: block;
    }
  }

</style>

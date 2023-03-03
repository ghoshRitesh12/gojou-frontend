<template>

  <header id="titlebar"
    class="
    flex items-center gap-2
    sticky top-0
    "
  >

    <Search 
      class="relative ml-4 max-w-[18rem] w-[100%] min-w-[10rem]"
      @data-search="searchReq"
      placeholder="anime..."
    />

    <Profile class="ml-auto mr-0">
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
import Search from './Search.vue';
import Profile from './Profile.vue';
import Dp from './Dp.vue';
import UserName from './UserName.vue';

const router = useRouter();


const searchReq = (data) => {
  if(data) console.log(data);
}

const isAuth = true;

</script>


<style></style>

<template>

  <div>

    <RouterLink 
      v-if="userStore.isAuth"
      class="
      flex items-center gap-4 rounded-xl cursor-pointer
      group pr-2 rounded-tl-3xl rounded-bl-3xl
      "  
      to="/profile"
      data-profile
    >

      <Dp 
        class="
        max-w-[2rem] min-h-[2rem] w-full
        md:max-w-[2rem] 
        pointer-events-none flex-shrink-0
        outline-1 outline-accent-300 outline-offset-1
        group-hover:outline
        transition ease-in duration-100
        "
      />

      <UserName 
        class="hidden sm:block pointer-events-none"
      />

    </RouterLink>

    <button
      v-else
      class="
      inline-block py-2 px-4 md:px-5 bg-accent-200 font-semibold
      text-primary-500 rounded-xl text-primary-900 select-none
      hover:bg-accent-300 transition ease-in duration-100
      "
      type="button"
      @click="openAuthModal"
    >
      Login
    </button>
    
  </div>

</template>


<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { openAuthModal } from '@/stores/auth';
import Dp from './Dp.vue';
import UserName from './UserName.vue';

const userStore = useUserStore();


const showLoginModal = () => {
  console.log('opened login modal')
}


</script>


<style></style>

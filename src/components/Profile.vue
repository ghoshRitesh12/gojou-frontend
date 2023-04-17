<template>

  <div>

    <RouterLink 
      v-if="userStore.isAuth"
      class="
      flex items-center gap-4 rounded-xl cursor-pointer
      border-[1px] border-transparent
      hover:border-zinc-700 pr-2
      rounded-tl-3xl rounded-bl-3xl
      transition ease-in duration-100
      "  
      to="/profile"
      data-profile
    >

      <Dp 
        class="
        max-w-[2rem] max-h-[2rem] 
        md:max-w-[2.3rem] md:max-h-[2.3rem] 
        pointer-events-none flex-shrink-0
        "
      />

      <UserName 
        class="hidden sm:block pointer-events-none"
      />

    </RouterLink>

    <button
      v-else
      class="
      inline-block py-2 px-5 bg-accent-200 font-semibold
      text-primary-500 rounded-xl text-primary-900 select-none
      hover:bg-accent-300 transition ease-in duration-100
      "
      type="button"
      @click="openModal"
    >
      Login
    </button>
    
  </div>

</template>


<script setup>
import { useUserStore } from '@/stores/userStore';
import { openModal } from '@/stores/auth';
import Dp from './Dp.vue';
import UserName from './UserName.vue';

const userStore = useUserStore();


const showLoginModal = () => {
  console.log('opened login modal')
}


</script>


<style></style>

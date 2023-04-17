<template>

  <div 
    class="
    px-5 pb-4 pt-10
    md:px-10 md:pb-6 md:pt-14
    "
  >

    <div 
      class="
      text-2xl mb-6 md:mb-10
      text-center w-full font-semibold
      "
    >
      Welcome back!
    </div>

    <form
      @submit.prevent=""
    >
  
      <label for="email" class="block">
        Email
        <input 
          type="email"
          id="email"
          class="
          block mt-2 py-[0.65rem] px-4 
          rounded-2xl w-full bg-zinc-800
          focus:outline-0 border-[1px] border-transparent
          focus:border-accent-200
          "
          placeholder="name@email.com"
        >
      </label>
  
      <label for="password" class="block mt-4">
        Password
        <input 
          type="password"
          id="password"
          class="
          block mt-2 py-[0.65rem] px-4 
          rounded-2xl w-full bg-zinc-800
          focus:outline-0 border-[1px] border-transparent
          focus:border-accent-200
          "
          placeholder="your password"
        >
      </label>
  
      <button
        type="submit"
        class="
        w-full rounded-2xl bg-accent-200 text-primary-900
        hover:bg-accent-300 py-[0.65rem] text-base font-semibold
        transition ease-in duration-100 mt-8 select-none
        "
      >
        Login 
      </button>
  
    </form>

    <div class="w-fit mx-auto my-2 text-sm text-zinc-400">
      OR
    </div>

    <a 
      href="http://localhost:5000/google-auth"
      class="
      inline-block w-full py-[0.65rem]
      border-[1px] border-zinc-600 rounded-2xl
      hover:bg-zinc-800
      "
      @click="setAuthRedirect(route.path)"
    >
      <div
        class="
        flex items-center gap-4
        w-fit mx-auto align-middle
        "
      >

        <Icon 
          icon="logos:google-icon"
          class="text-2xl align-middle"
        />

        <div
          class="text-[1rem]"
        >
          Sign in with Google
        </div>

      </div>
    </a>

    <div class="mt-8 text-[1.05rem] text-center mx-8">
      Don't have an account yet?
      <span 
        class="text-accent-200 cursor-pointer ml-1"
        @click="changeAuth"
      >
        Create one
      </span>
    </div>

  </div>


</template>


<script setup>
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';
import { setAuthRedirect } from '@/stores/auth';
import Signup from './Signup.vue';

const route = useRoute();

const emits = defineEmits(['active-auth-change']);

const changeAuth = () => {
  emits('active-auth-change', Signup);
}

</script>


<style scoped>

  input {
    word-spacing: .1rem;
  }

</style>

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
      Create an account
    </div>


    <form
      @submit.prevent=""
    >
  
      <label for="name" class="block">
        Name
        <input 
          type="text"
          id="name"
          class="
          block mt-2 py-[0.65rem] px-4 
          rounded-2xl w-full bg-zinc-800
          focus:outline-0 border-[1px] border-transparent
          focus:border-accent-200"
          placeholder="your fullname"
        >
      </label>

      <label for="email" class="block mt-4">
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
  
      <div
        class="flex items-center gap-4"
      >
        <label for="password" class="block mt-4">
          Password
          <input 
            :type="passwordVisible ? 'text' : 'password'"
            id="password"
            class="
            block mt-2 py-[0.65rem] px-4 
            rounded-2xl w-full bg-zinc-800
            focus:outline-0 border-[1px] border-transparent
            focus:border-accent-200
            "
            placeholder="password"
            ref="passwordField"
          >
        </label>

        <label for="confirm-password" class="block mt-4">
          Confirm password
          <input 
            :type="passwordVisible ? 'text' : 'password'"
            id="confirm-password"
            class="
            block mt-2 py-[0.65rem] px-4 
            rounded-2xl w-full bg-zinc-800
            focus:outline-0 border-[1px] border-transparent
            focus:border-accent-200
            "
            placeholder="confirm password"
            ref="confirmPasswordField"
          >
        </label>      
      </div>

      <div aria-label="change password visibility"
        class="mt-4 ml-1 flex items-center select-none"
      >
        <input 
          type="checkbox" 
          id="password-visibility"
          class="
          inline-block mr-3 h-[.95rem] w-[.95rem] aspect-square
          accent-accent-200 align-middle 
          "
          v-model="passwordVisible"
        >
        <label for="password-visibility">
          Show password
        </label>
      </div>


      <button
        type="submit"
        class="
        w-full rounded-2xl bg-accent-200 text-primary-900
        hover:bg-accent-300 py-[0.65rem] text-base font-semibold
        transition ease-in duration-100 mt-8 select-none
  
        "
      >
        Signup 
      </button>
  
    </form>


    <div class="w-fit mx-auto my-2 text-base text-zinc-400">
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
        w-fit mx-auto
        "
      >
  
        <Icon 
          icon="logos:google-icon"
          class="text-2xl"
        />
  
        <div
          class="text-[1rem]"
        >
          Sign up with Google
        </div>
  
      </div>
    </a>
  
    <div class="mt-8 text-[1.05rem] mx-auto w-fit">
      Already an user? 
      <span
        class="text-accent-200 cursor-pointer ml-1"
        @click="changeAuth"
      >
        Login
      </span>
    </div>


  </div>

</template>


<script setup>
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';
import { setAuthRedirect } from '@/stores/auth';
import Login from './Login.vue';
import { ref } from 'vue';

const route = useRoute();

const passwordVisible = ref(false);

const emits = defineEmits(['active-auth-change']);

const changeAuth = () => {
  emits('active-auth-change', Login);
}



</script>


<style scoped>

  input {
    word-spacing: .1rem;
  }

</style>

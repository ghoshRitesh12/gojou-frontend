<template>

  <div 
    class="
    px-5 pb-4 pt-10
    md:px-10 md:pb-6 md:pt-14
    "
  >

    <div 
      class="
      text-2xl mb-6 md:mb-8 mt-4
      text-center w-full font-semibold
      "
    >
      Welcome back!
    </div>

    <form
      @submit.prevent="submitLoginForm"
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
          v-model.lazy="loginData.email"
          required
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
          v-model.lazy="loginData.password"
          required
        >
      </label>
      
      <ErrorMessage  
        v-if="errorMsg"
        :message="errorMsg"
      />

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

    <button 
      class="
      inline-block w-full py-[0.65rem]
      border-[1px] border-zinc-600 rounded-2xl
      hover:bg-zinc-800
      "
      type="button"
      @click="googleLogin"
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
    </button>

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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { decryptState } from '@/composables/useCipherState';
import { setAuthRedirect, getAuthRedirect, closeAuthModal } from '@/stores/auth';
import { setPopupMessage } from '@/stores/popup';
import UserAPI from '@/services/userAPI';
import { Icon } from '@iconify/vue';
import Signup from './Signup.vue';
import ErrorMessage from './ErrorMessage.vue';

const router = useRouter();
const userStore = useUserStore();

const emits = defineEmits(['active-auth-change']);

const changeAuth = () => {
  emits('active-auth-change', Signup);
}


const googleLogin = () => {
  setAuthRedirect(null, router.currentRoute.value.href)
  location.href = `${import.meta.env.VITE_API_BASE_URL}/google-auth`;
}

const loginData = ref({
  email: '',
  password: ''
})

const errorMsg = ref(null);

const submitLoginForm = async () => {
  if(!loginData.value.email || !loginData.value.password) return;

  try {
    const { data } = await UserAPI.sendLoginInfo(
      loginData.value
    );
    const userInfo = await decryptState(
      data.userData, 
      import.meta.env.VITE_AUTH_DATA_SECRET
    );

    errorMsg.value = null;
    userStore.login(
      userInfo._id,
      userInfo.name, 
      userInfo.profilePicture,
      userInfo.email
    )
    userStore.setStateExpiry(userInfo.stateExpiry)
    userStore.setSessionExpiry(userInfo.sessionExpiry)

    closeAuthModal();
    setPopupMessage(data.message)
    
    const redirectPath = getAuthRedirect();
    if(redirectPath) router.push(redirectPath);

  } catch (err) {
    console.log(err);
    const { message, status } = err.response.data.error
    errorMsg.value = message;
  }
}


</script>


<style scoped>

  input {
    word-spacing: .1rem;
  }

</style>

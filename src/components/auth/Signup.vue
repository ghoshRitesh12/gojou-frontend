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
      Create an account
    </div>


    <form
      @submit.prevent="submitSignupForm"
    >
  
    
      <template v-if="activeStep === 1">    
      
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
            required
            v-model.lazy="signupData.name"
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
            required
            v-model.lazy="signupData.email"
          >
        </label>

        <button
          type="button"
          class="
          flex items-center justify-center gap-2
          w-full rounded-2xl bg-accent-200 text-primary-900
          hover:bg-accent-300 py-[0.65rem] text-base font-semibold
          transition ease-in duration-100 mt-8 select-none
          "
          @click="changeActiveStep"
        >
          <div>
            Continue
          </div>
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            class="text-sm text-black"
          />
        </button>

      </template>

      <template v-if="activeStep === 2">
        
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
            required
            v-model.lazy="signupData.password"
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
            required
            v-model.lazy="signupData.confirmPassword"
          >
        </label>      
  
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

        <ErrorMessage
          v-if="errorMsg" 
          :message="errorMsg"
        />

        <div 
          class="
          flex items-center gap-3 mt-8
          "
        >

          <button
            type="button"
            class="
            rounded-2xl bg-zinc-700 text-primary-900
            hover:bg-zinc-600 py-3 text-base font-semibold
            transition ease-in duration-100 select-none 
            flex-grow-0 pl-[1.1rem] px-3 flex-shrink-0
            "
            @click="changeActiveStep"
          >
            <Icon 
              icon="material-symbols:arrow-back-ios-rounded"
              class="text-xl text-white"
            />
          </button>

          <button
            type="submit"
            class="
            w-full rounded-2xl bg-accent-200 text-primary-900
            hover:bg-accent-300 py-[0.65rem] text-base font-semibold
            transition ease-in duration-100 select-none flex-[90%]
            "
          >
            Signup 
          </button>

        </div>

      </template>

    </form>


    <div class="w-fit mx-auto my-2 text-base text-zinc-400">
      OR
    </div>

    <button
      class="
      inline-block w-full py-[0.65rem]
      border-[1px] border-zinc-600 rounded-2xl
      hover:bg-zinc-800
      "
      type="button"
      @click="googleSignup"
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
    </button>
  
    <div class="mt-8 text-[1.05rem] md:mx-[5.4rem] whitespace-nowrap text-center">
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
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import { decryptState } from '@/composables/useCipherState';
import { setAuthRedirect, getAuthRedirect, closeAuthModal } from '@/stores/auth';
import { setPopupMessage } from '@/stores/popup';
import UserAPI from '@/services/userAPI';
import { Icon } from '@iconify/vue';
import Login from './Login.vue';
import ErrorMessage from './ErrorMessage.vue';

const router = useRouter();
const userStore = useUserStore();

const passwordVisible = ref(false);

const emits = defineEmits(['active-auth-change']);

const changeAuth = () => {
  emits('active-auth-change', Login);
}


const activeStep = ref(1);
const changeActiveStep = () => {
  if(activeStep.value === 2) {
    activeStep.value = 1;
    return;
  }
  activeStep.value = 2;
}

const googleSignup = () => {
  setAuthRedirect(null, router.currentRoute.value.href)
  location.href = `${process.env.VUE_APP_API_BASE_URL}/google-auth`;
}

const signupData = ref({
  name: '', email: '',
  password: '',
  confirmPassword: ''
})

const errorMsg = ref(null);

const submitSignupForm = async () => {

  try {
    const { data } = await UserAPI.sendSignupInfo(
      signupData.value
    )
    const userInfo = await decryptState(
      data.userData, process.env.VUE_APP_AUTH_DATA_SECRET
    )

    errorMsg.value = null;
    userStore.login(userInfo.name, userInfo.profilePicture)
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

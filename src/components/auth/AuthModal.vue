<template>


  <div 
    v-if="!userStore.isAuth"
    v-show="modalVisible"
    data-auth-model-wrapper
    class="fixed inset-0 z-[300] bg-primary-900/90"
    :style="`
      backdrop-filter: blur(.2rem);
      transition: .3s ease all;
    `"
  >

    <div data-auth-modal
      class="
      fixed isolate z-[250] block 
      top-[50%] left-[50%] rounded-2xl
      translate-y-[-50%] translate-x-[-50%]
      bg-primary-900 border-[1px] border-zinc-700
      min-w-[21rem]
      "
      ref="authModal"
      style="transition: .2s ease all;"
    >
  
      <div
        class="
        absolute right-[-.5rem] top-[-.5rem] w-fit p-[0.5rem]
        cursor-pointer bg-zinc-700 hover:bg-zinc-600 
        transition ease-in duration-100 rounded-[50%]
        "
        @click="closeModal"
      >
        <Icon 
          icon="ic:round-close"
          class="text-2xl pointer-events-none"
        />
      </div>
  
      <component 
        :is="activeAuth"
        @active-auth-change="handleActiveAuthChange"
      />
  
    </div>

  </div>


</template>


<script setup>
import { shallowRef, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { modalVisible, closeModal } from '@/stores/auth';
import { Icon } from '@iconify/vue';
import { onClickOutside } from '@vueuse/core';

import Login from './Login.vue';


const userStore = useUserStore();

const authModal = ref(null)
const activeAuth = shallowRef(Login);

onClickOutside(authModal, () => closeModal());

const handleActiveAuthChange = (authComponent) => {
  activeAuth.value = authComponent;
}



</script>


<style>

</style>

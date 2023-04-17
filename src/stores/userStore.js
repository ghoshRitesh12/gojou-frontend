import { ref, computed } from 'vue';
import { defineStore } from "pinia";
import UserAPI from '@/services/userAPI';
import CryptoJS from 'crypto-js';

function cryptoSerialize (data) {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data), 
    process.env.VUE_APP_STATE_CRYPTO_SECRET
  ).toString();
}

function cryptoDeserialize (encString) {
  const bytes = CryptoJS.AES.decrypt(
    encString, process.env.VUE_APP_STATE_CRYPTO_SECRET 
  ).toString(CryptoJS.enc.Utf8);
  return JSON.parse(bytes)
}


export const useUserStore = defineStore('user', () => {
  const profilePicture = ref(null);
  const userName = ref(null);
  const isAuth = ref(false);

  const authModalVisible = computed(() => (
    isAuth.value ? false : true
  ));

  const login = (name, dp) => {
    isAuth.value = true;
    userName.value = name;
    profilePicture.value = dp;
  }

  const logout = () => {
    isAuth.value = false;
    userName.value = null;
    profilePicture.value = null;
  }

  return {
    profilePicture, userName, isAuth, 
    authModalVisible,
    login, logout
  }

},
{ 
  persist: {
    serializer: {
      serialize: cryptoSerialize,
      deserialize: cryptoDeserialize
    }
  }
});

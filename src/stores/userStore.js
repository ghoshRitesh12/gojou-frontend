import { ref, computed, watch } from 'vue';
import { defineStore } from "pinia";
import UserAPI from '@/services/userAPI';
import CryptoJS from 'crypto-js';

function cryptoSerialize (data) {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data), 
    process.env.VUE_APP_STATE_SECRET
  ).toString();
}
function cryptoDeserialize (encString) {
  const bytes = CryptoJS.AES.decrypt(
    encString, process.env.VUE_APP_STATE_SECRET 
  ).toString(CryptoJS.enc.Utf8);
  return JSON.parse(bytes)
}

const storeName = '__logged_user';

export const useUserStore = defineStore(storeName, () => {
  const timeout = ref(null);
  const interval = ref(null);
  const stateExpiry = ref(0);
  const sessionExpiry = ref(0);


  
  const setStateExpiry = (stateExpireDate) => {
    if(stateExpireDate <= 0) return;
    clearTimeout(timeout.value);
    stateExpiry.value = stateExpireDate;
    
    timeout.value = setTimeout(async () => {
      try {
        await UserAPI.logout();
        clearInterval(interval.value)
        localStorage.removeItem(storeName);
        location.href = '/';

      } catch (err) {
        console.log(err);
      }
    }, stateExpiry.value)

  }

  const setSessionExpiry = (sessionExpireDate) => {
    if(sessionExpireDate <= 0) return;
    clearInterval(interval.value);
    sessionExpiry.value = sessionExpireDate;
    
    interval.value = setInterval(async () => {
      try {
        const { data } = await UserAPI.getNewTokens();
        if('sessionExpiry' in data) {
          setSessionExpiry(data.sessionExpiry);
        }

      } catch (err) {
        console.log(err)
      }
    }, sessionExpiry.value)
  }


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

    clearTimeout(timeout.value);
    clearInterval(interval.value);
    timeout.value = null;
    interval.value = null;
    stateExpiry.value = 0;
    sessionExpiry.value = 0;
  }

  return {
    profilePicture, userName, isAuth, authModalVisible, 
    setStateExpiry, setSessionExpiry, login, logout
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

import { ref } from "vue";
import { decryptState, encryptState } from "@/composables/useCipherState";

export const modalVisible = ref(false);

export const closeAuthModal = () => {
  modalVisible.value = false;
  document.body.removeAttribute('style');
}

export const openAuthModal = () => {
  modalVisible.value = true;
  document.body.style.overflow = 'hidden';
}



export const setAuthRedirect = async (path) => {
  const value = await encryptState(path, process.env.VUE_APP_AUTH_DATA_SECRET);
  sessionStorage.setItem('auth-redirect', value);
}

export const getAuthRedirect = async () => {
  const value = await decryptState(
    sessionStorage.getItem('auth-redirect'),
    process.env.VUE_APP_AUTH_DATA_SECRET
  )
  sessionStorage.removeItem('auth-redirect')
  return value;
}


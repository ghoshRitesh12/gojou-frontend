import { ref } from "vue";


export const modalVisible = ref(false);

export const closeModal = () => {
  modalVisible.value = false;
  document.body.removeAttribute('style');
}

export const openModal = () => {
  modalVisible.value = true;
  document.body.style.overflow = 'hidden';
}



export const setAuthRedirect = (path) => {
  sessionStorage.setItem('auth-redirect', JSON.stringify(path));
  console.log(path);
}

export const getAuthRedirect = () => {
  const value = JSON.parse(sessionStorage.getItem('auth-redirect'));
  sessionStorage.removeItem('auth-redirect')
  return value;
}


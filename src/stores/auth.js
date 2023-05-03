import { ref } from "vue";

export const modalVisible = ref(false);

export const closeAuthModal = () => {
  modalVisible.value = false;
  document.body.removeAttribute('style');
}

export const openAuthModal = () => {
  modalVisible.value = true;
  document.body.style.overflow = 'hidden';
}



export const setAuthRedirect = (path, gpath) => {
  if(path) {
    sessionStorage.setItem(
      'auth-redirect',
      JSON.stringify(path)
    );
  }

  if(!sessionStorage.getItem('auth-redirect') && gpath) {
    sessionStorage.setItem(
      'gauth-redirect',
      JSON.stringify(gpath)
    )
  }

  const t = setTimeout(() => {
    sessionStorage.removeItem('auth-redirect')
    sessionStorage.removeItem('gauth-redirect')
    clearInterval(t)
  }, 15000)

}

export const getAuthRedirect = () => {
  if(sessionStorage.getItem('auth-redirect')) {
    const value = JSON.parse(sessionStorage.getItem('auth-redirect'));
    sessionStorage.removeItem('auth-redirect')
    return value;
  }

  if(sessionStorage.getItem('gauth-redirect')) {
    const value = JSON.parse(sessionStorage.getItem('gauth-redirect'));
    sessionStorage.removeItem('gauth-redirect')
    return value;
  }

  return null;

}


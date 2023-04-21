import { ref } from "vue";


export const popupMessage = ref(null);
export const isPopupOpen = ref(false);

export function setPopupMessage(message) {
  popupMessage.value = message;
  isPopupOpen.value = true;
}


export function closePopup() {
  isPopupOpen.value = false;
  popupMessage.value = null;
}


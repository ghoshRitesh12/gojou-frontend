import { ref, watch } from "vue";

export const errorMessage = ref(null);

export const setErrorMessage = message => {
  errorMessage.value = message
}


export const pageErrorMessage = ref(null);
export const pageErrorStatus = ref(null);

export const setPageError = (message, status) => {
  if(message) pageErrorMessage.value = message;
  if(status) pageErrorStatus.value = status;
}

export const resetPageError = () => {
  pageErrorMessage.value = null;
  pageErrorStatus.value = null;
}


import { ref } from "vue";

export const errorMessage = ref(null);

export const setErrorMessage = message => {
  errorMessage.value = message
}

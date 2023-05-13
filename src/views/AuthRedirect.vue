<template>

  <div></div>

</template>


<script setup>
import { useUserStore } from '@/stores/userStore';
import { useRoute, useRouter } from 'vue-router';
import { getAuthRedirect } from '@/stores/auth';
import { decryptState } from '@/composables/useCipherState';

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();


(async () => {
  try {
    const { data, status } = route.query;

    if(parseInt(status) > 200 && !data)
      throw new Error('Authentication failed');

    const decryptedData = await decryptState(
      decodeURIComponent(data), 
      process.env.VUE_APP_AUTH_DATA_SECRET
    )

    userStore.login(
      decryptedData._id,
      decryptedData.name, 
      decryptedData.profilePicture,
      decryptedData.email,
    )
    userStore.setStateExpiry(decryptedData.stateExpiry)
    userStore.setSessionExpiry(decryptedData.sessionExpiry)
    
    const redirectPath = getAuthRedirect();
    if(redirectPath) router.push(redirectPath);

  } catch (err) {
    console.log(err); 
    router.replace('/401');
  }

})()


</script>


<style>

</style>

<template>

  <div></div>

</template>


<script setup>
import CryptoJS from 'crypto-js';
import UserAPI from '@/services/userAPI';
import { useUserStore } from '@/stores/userStore';
import { useRoute, useRouter } from 'vue-router';
import { getAuthRedirect } from '@/stores/auth';

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();


(() => {
  try {
    const encryptedString = route.query.data.replaceAll(' ', '+');


    const decrypt = CryptoJS.AES.decrypt(
      encryptedString, process.env.VUE_APP_AUTH_REDIRECT_SECRET
    ).toString(CryptoJS.enc.Utf8);
    const decryptedData = JSON.parse(decrypt);
  
    console.log(decryptedData);

    userStore.login(decryptedData.name, decryptedData.profilePicture)
    router.push(getAuthRedirect());

  } catch (error) {
    console.log(error);
  }

})()


</script>


<style>

</style>

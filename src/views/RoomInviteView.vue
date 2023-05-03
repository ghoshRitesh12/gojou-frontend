<template>

  <div></div>

</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
import UserAPI from '@/services/userAPI';
import { setPopupMessage } from '@/stores/popup';

const router = useRouter();


const processRoomInvite = async () => {
  const route = useRoute();
  console.log(route.params);

  try {
    const { data } = await UserAPI.roomInvite(route.params.roomToken);
    router.push(data.redirectTo);
    setPopupMessage(data.message)
    // router.

  } catch (err) {
    console.log(err);    
    router.push('/explore');
  }
}
processRoomInvite();

</script>



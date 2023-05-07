<template>

  <div></div>

</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
import UserAPI from '@/services/userAPI';
import { setPopupMessage } from '@/stores/popup';

const router = useRouter();


const processRoomInvite = async () => {
  try {
    const route = useRoute();
    if(!route.params.roomToken) 
      throw new Error('no room token present');

    const { data } = await UserAPI.roomInvite(route.params.roomToken);
    router.push(data.redirectTo);
    setPopupMessage(data.message)

  } catch (err) {
    router.push('/explore');
  }
}
processRoomInvite();

</script>



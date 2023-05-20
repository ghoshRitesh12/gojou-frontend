<template>
  
  <div 
    data-chat-frame
    class="
    bg-primary-900 overflow-hidden
    rounded-2xl mb-auto h-fit border-zinc-600
    border-x-0 border-y-[1px] lg:border-[1px]
    "
  >

    <div
      class="
      flex items-center
      text-[1rem] bg-zinc-900 align-middle
      px-6 2xl:px-7 py-2 rounded-none
      border-zinc-600 border-b-[1px]
      "
      :style="`
        border-bottom-width: ${!isChatOpen ? '0px' : ''};
      `"
    >
      <div 
        class="
        flex items-center gap-x-4 flex-wrap 
        pr-16 md:pr-10 room-text-wrap
        "
      >
        Room Chat

        <div class="text-[.9rem] text-green-300 leading-[1]">
          {{ roomChatStore.activeMembers }} active
        </div>

      </div>

      <div class="chat-visibility ml-auto select-none flex-shrink-0">

        <button
          @click="toggleChat"
          class="
          flex items-center font-normal text-[1rem]
          bg-zinc-700 py-2 px-4 rounded-xl cursor-pointer
          "
          type="button"
        >
          {{ chatVisibilityText }}
          <Icon 
            :icon="chatVisibilityIcon"
            class="text-xl ml-2"
          />
        </button>

      </div>

    </div>

    <div data-chat-space
      class="transition ease-in duration-100"
      :class="{ 'hidden': !isChatOpen }"
    >
      <div data-chats
        class="
        flex flex-col justify-end
        px-4 md:px-6 pt-6 pb-6
        min-h-[18rem] overflow-y-auto text-[1rem]
        max-h-[20rem] xl:max-h-[24rem] 2xl:max-h-[26rem]
        first:mt-auto
        "
        ref="chatsContainer"
      >

        <template
          v-if="roomChatStore.chats.length > 0"
          v-for="chat in roomChatStore.chats"
        >

          <template v-if="chat?.sender?._id === userStore.userId">
            <SelfChat
              :content="chat.text"
              :key="chat.timestamp"
            />
          </template>

          <template v-else>
            <OtherChat
              :name="chat.sender.name"
              :content="chat.text"
              :pfp="chat.sender.profilePicture"
              :key="chat.timestamp"
            />
          </template>

        </template>

        <div v-else>

          <div>
            Your conversations start here
          </div>

        </div>

        <!-- 
        <OtherChat
          :name="'Debopriyo'"
          :content="'bhai ki koris bol?'"
        />

        <SelfChat
          content="henlo 😅"
        /> -->


      </div>


      <form @submit.prevent="handleChatSubmit"
        class="relative w-full px-4 pt-4 pb-2 md:px-6"
      >
        <textarea
          class="
          max-w-full w-full resize-none
          rounded-2xl py-3 pl-4 pr-14 leading-[1.4]
          min-h-[2.7rem] bg-zinc-800
          focus:outline-0
          "
          spellcheck="false"
          :maxlength="maxChatChars"
          placeholder="Type something..."
          style="word-spacing: .08rem;"
          @input="updateChatLimit"
          v-model.lazy.trim="chatContent"
        ></textarea>

        <button 
          class="
          absolute top-[50%] right-[1.5rem]
          translate-y-[-80%] rounded-lg 
          text-2xl bg-zinc-800 p-2 
          pr-[.5rem] md:pr-[.7rem] text-accent-200
          "
          type="submit"
        >
          <Icon icon="bx:bxs-send"/>
        </button>

        <div 
          data-chat-chars
          class="
          text-zinc-400 text-[.95rem] 
          w-fit ml-auto mr-1 mt-1
          "
        >
          {{ enteredChars }}/{{ maxChatChars }}
        </div>
      </form>

    </div>

  </div>

</template>


<script setup>
import { ref, onBeforeMount } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRoomChatStore } from '@/stores/roomChatStore';
import { Icon } from '@iconify/vue';
import SelfChat from './SelfChat.vue';
import OtherChat from './OtherChat.vue';


const roomChatStore = useRoomChatStore();
const userStore = useUserStore();

const chatsContainer = ref(null);
// roomChatStore.setChatContainer(chatsContainer.value);


// v-model
const chatContent = ref('');

const isChatOpen = ref(false);

const chatVisibilityText = ref('');
const chatVisibilityIcon = ref('');

const toggleChat = (e) => {
  if(e) isChatOpen.value = !isChatOpen.value;

  if(!isChatOpen.value) {
    chatVisibilityText.value = 'Open';
    chatVisibilityIcon.value = 'material-symbols:keyboard-arrow-down-rounded';
    return;
  }

  chatVisibilityText.value = 'Close';
  chatVisibilityIcon.value = 'material-symbols:keyboard-arrow-up-rounded';
}
toggleChat()


const maxChatChars = ref(200);
const enteredChars = ref(0);
const chatCharsColor = ref('rgb(161, 161, 170)');

const updateChatLimit = e => {
  enteredChars.value = e.target.value.trim().length;

  if(enteredChars.value > maxChatChars.value - 50) {
    chatCharsColor.value = '#c79500';
    if(enteredChars.value === maxChatChars.value)
      chatCharsColor.value = '#ff4f52';
    return;
  }

  chatCharsColor.value = 'rgb(161, 161, 170)';
}


// onBeforeMount(() => {
  // roomChatStore.getChats();
  // roomChatStore.getChats();
// })


// send chat
const handleChatSubmit = async () => {
  try {
    if (chatContent.value === '') return;
    
    await roomChatStore.sendChat(chatContent.value);
  
    chatContent.value = '';
    enteredChars.value = 0;
    
  } catch (err) {
    console.log(err);    
  }
}


</script>


<style scoped>
  [data-chat-chars] {
    color: v-bind(chatCharsColor);
  }

  [data-chat-space] [data-chats] {
    scrollbar-width: none;
  }

  [data-chat-space] [data-chats]::-webkit-scrollbar {
    display: none;
  }

  [data-chat-space] [data-chats]::-webkit-scrollbar-thumb {
    @apply rounded-xl border-primary-900
  }
  [data-chat-space] [data-chats]::-webkit-scrollbar-track {
    @apply bg-transparent;
  }

  @media (min-width: 768px) {
    [data-chat-space] [data-chats] {
      scrollbar-width: thin;
    }

    [data-chat-space] [data-chats]::-webkit-scrollbar {
      display: block;
    }
  }

  [data-chat-space] textarea::-webkit-scrollbar {
    display: none;
  }
  [data-chat-space] textarea {
    scrollbar-width: none;
  }

</style>


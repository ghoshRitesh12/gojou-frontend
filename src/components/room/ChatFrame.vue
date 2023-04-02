<template>
  
  <div 
    data-chat-frame
    class="
    bg-primary-900 overflow-hidden
    rounded-2xl mb-auto h-fit
    border-0 lg:border-[1px] border-zinc-600
    "
  >

    <div
      class="
      flex items-center
      text-xl bg-zinc-900 font-semibold
      px-6 md:px-7 py-2 rounded-none align-middle
      border-zinc-800 border-b-[1px]
      "
    >
      <div>
        Room Chat
      </div>

      <div class="chat-visibility ml-auto select-none">

        <button
          v-if="!isChatOpen"
          @click="isChatOpen = !isChatOpen"
          class="
          flex items-center font-normal text-[1rem]
          bg-zinc-700 py-1 px-4 rounded-lg cursor-pointer
          "
          type="button"
        >
          Open
          <Icon 
            icon="material-symbols:keyboard-arrow-down-rounded"
            class="text-xl ml-2"
          />
        </button>

        <button
          v-if="isChatOpen"
          @click="isChatOpen = !isChatOpen"
          class="
          flex items-center font-normal text-[1rem]
          bg-zinc-700 py-1 px-4 rounded-lg cursor-pointer
          "
          type="button"
        >
          Close
          <Icon 
            icon="material-symbols:keyboard-arrow-up-rounded"
            class="text-xl ml-2"
          />
        </button>

      </div>

    </div>

    <div data-chat-space
      :class="{ 'hidden': !isChatOpen }"
    >
      <div data-chats
        class="
        px-4 md:px-6 pt-6 pb-6
        max-h-[20rem] xl:max-h-[25rem]
        min-h-[10rem] overflow-auto
        "
      >

        <OtherChat
          :name="'Debopriyo'"
          :content="'bhai ki koris bol?'"
        />

        <SelfChat
          content="henlo 😅"
        />

        <OtherChat
          :name="'Debopriyo'"
          :content="'cha khete jab cho'"
        />

        <SelfChat
          content="ha cho"
        />

        <SelfChat
          content="btw kothai"
        />

        <OtherChat
          :name="'Krish Dewan'"
          :content="'abar sei garia naki?'"
        />
        <OtherChat
          :name="'Debopriyo'"
          :content="'Haa'"
        />
        <OtherChat
          :name="'Krish Dewan'"
          :content="'Dhor'"
        />
        <SelfChat
          content="Yo bro this is insane love it truly"
        />

      </div>

      <div class="relative w-full px-4 py-4 md:px-6">
        <textarea
          class="
          max-w-full w-full resize-none
          rounded-xl p-2 h-[2.5rem]
          focus:outline-none bg-zinc-800
          "
          maxlength="200"
          placeholder="Chat here as Ritesh..."
        ></textarea>
      </div>

    </div>

  </div>

</template>


<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SelfChat from './SelfChat.vue';
import OtherChat from './OtherChat.vue';

const isChatOpen = ref(true);


const changeChatVisibility = () => {
  isChatOpen.value = !isChatOpen.value
}



</script>


<style scoped>
  /* .chat-visibility {
    @apply py-3 lg:py-2 px-4 mx-auto
    cursor-pointer border-zinc-800
    rounded-2xl hover:bg-zinc-800
    transition ease-in duration-150
  } */

  [data-chat-space] [data-chats] {
    scrollbar-width: none;
  }

  [data-chat-space] [data-chats]::-webkit-scrollbar {
    display: none;
  }

  [data-chat-space] [data-chats]::-webkit-scrollbar-thumb {
    @apply rounded-md bg-zinc-400 border-zinc-900
  }
  [data-chat-space] [data-chats]::-webkit-scrollbar-track {
    @apply bg-zinc-900 ;
  }

  @media (min-width: 768px) {
    [data-chat-space] [data-chats] {
      scrollbar-width: thin;
    }

    [data-chat-space] [data-chats]::-webkit-scrollbar {
      display: block;
    }
  }

  [data-chat-space] textarea[maxlength="200"]::placeholder {
    font-size: .98rem;
  }

</style>

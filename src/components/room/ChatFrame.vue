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
      text-xl bg-zinc-900 font-semibold
      px-6 md:px-7 py-2 rounded-none align-middle
      border-zinc-600 border-b-[1px]
      "
      :style="`
        border-bottom-width: ${!isChatOpen ? '0px' : ''};
      `"
    >
      <div>
        Room Chat
      </div>

      <div class="chat-visibility ml-auto select-none">

        <button
          @click="toggleChat"
          class="
          flex items-center font-normal text-[1rem]
          bg-zinc-700 py-1 px-4 rounded-xl cursor-pointer
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
        px-4 md:px-6 pt-6 pb-6 h-full
        min-h-[10rem] overflow-auto text-[1.05rem]
        max-h-[20rem] xl:max-h-[24rem] 2xl:max-h-[26rem]
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
          :content="'cha khete jabo cho'"
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
        <OtherChat
          :name="'Krish Dewan'"
          :content="'Bhai son na akta khub e joruri kotha chilo re. Bolchi je ki akta bolte jachilam, bhule gelam '"
        />

      </div>

      <form 
        class="relative w-full px-4 pt-4 pb-2 md:px-6"
        @submit.prevent="handleChatSubmit"
      >

        <textarea
          class="
          max-w-full w-full resize-none
          rounded-xl py-2 pl-3 pr-11 leading-[1.6]
          min-h-[2.7rem] max-h-[6rem]
          focus:outline-none bg-zinc-800
          "
          spellcheck="false"
          :maxlength="maxChatChars"
          placeholder="Type something..."
          style="word-spacing: .08rem;"
          @input="updateChatLimit"
          v-model.lazy="chatContent"
        ></textarea>

        <button 
          class="
          absolute top-[50%] right-[1.5rem]
          translate-y-[-80%] rounded-lg 
          text-2xl bg-zinc-800 p-2 
          pr-[.5rem] md:pr-[.7rem] text-zinc-300
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
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SelfChat from './SelfChat.vue';
import OtherChat from './OtherChat.vue';

const chatContent = ref('');

const isChatOpen = ref(true);

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
  enteredChars.value = e.target.value.length;

  if(enteredChars.value > maxChatChars.value - 50) {
    chatCharsColor.value = '#c79500';
    if(enteredChars.value === maxChatChars.value)
      chatCharsColor.value = '#ff4f52';
    return;
  }

  chatCharsColor.value = 'rgb(161, 161, 170)';
}


const handleChatSubmit = e => {
  console.log(chatContent.value);
  chatContent.value = '';
  enteredChars.value = 0;
}


</script>


<style scoped>
  [data-chat-chars] {
    color: v-bind('chatCharsColor');
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

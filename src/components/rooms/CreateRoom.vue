<template>

  <div>

    <div class="text-2xl text-center w-full mb-4">
      Create new room
    </div>

    <form>

      <label for="name" class="block">
        Room name
        <input 
          type="text"
          id="name"
          class="
          block mt-2 py-[0.65rem] px-4 
          rounded-2xl w-full bg-zinc-800
          focus:outline-0 border-[1px] border-transparent
          focus:border-accent-200
          "
          placeholder="rasengan, bankai"
          v-model.lazy="roomData.name"
          required
        >
      </label>
  
      <label 
        for="private" 
        class="
        flex items-center mt-6
        "
      >
        <input 
          type="checkbox" 
          id="private"
          class="
          inline-block mr-3 h-[.95rem] w-[.95rem] aspect-square
          accent-accent-200 align-middle 
          "
          v-model="roomData.private"
        />
        Room set to private
      </label>

      <p>
        
      </p>
      
      <ErrorMessage  
        v-if="errorMsg"
        :message="errorMsg"
      />

    </form>

  </div>

</template>


<script setup>
import { ref } from 'vue';
import ErrorMessage from '../auth/ErrorMessage.vue';

const roomData = ref({
  name: '',
  private: true,
});

const errorMsg = ref(null);

const emits = defineEmits('create-room');

</script>


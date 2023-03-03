<template>

  <div>
    <slot>
      <button 
        class="
        py-2 px-4 bg-accent-200
        text-primary-500
        rounded-2xl
        "
        type="button"
        @click="showLoginModal"
      >
        Login
      </button>
    </slot>

  </div>

</template>


<script setup>
const showLoginModal = () => {
  console.log('opened login modal')
}


</script>


<style></style>

<template>

  <p class="text-[1rem] px-8 pb-2 text-gray-500">Menu</p>
  
  <nav id="navbar" 
    class="flex flex-col gap-4"
  >
  
    <NavLink 
      v-for="route in routes" 
      :to="route.to"
      :name="route.name"
      :title="route.name"
    >
      <template v-slot>
        <span class="flex gap-3 items-center">
          <Icon v-if="route.icon" :icon="route.icon"/>
          {{ route.name }}
        </span>
      </template>

    </NavLink>

  </nav>
</template>


<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import NavLink from './NavLink.vue';

const routes = ref([
  { to: '/', name: 'Home', icon: 'majesticons:home-line' },  
  { to: '/rooms', name: 'Rooms', icon: 'material-symbols:gmail-rooms' },
  { to: '/favorites', name: 'Favorites', icon: 'ri:heart-2-line' },
])

</script>


<style></style>

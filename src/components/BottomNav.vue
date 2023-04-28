<template>

  <nav 
    class="
    flex items-center gap-1 fixed z-[110] bottom-0 
    w-full bg-primary-900 p-1 md:hidden
    border-t-[1px] border-zinc-900
    "
  >
  
    <NavLink 
      v-for="menuRoute in menuRoutes" 
      :key="menuRoute.to"
      :to="menuRoute.to"
      :name="menuRoute.name"
      :title="menuRoute.name"
      class="flex-grow rounded-none"
    >
      <template v-slot>
        <span 
          class="
          flex items-center text-[.9rem] flex-col
          pt-2 pb-1
          "
        >
          <Icon 
            v-if="menuRoute.icon" 
            :icon="menuRoute.icon"
            class="text-lg flex-shrink-0"
          />
          <div class="text-[.8rem] leading-[1.4]">
            {{ menuRoute.name }}
          </div>
        </span>
      </template>

    </NavLink>

  </nav>

</template>


<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import NavLink from './NavLink.vue';

const menuRoutes = ref([
  { to: '/', name: 'Home', icon: 'majesticons:home-line' },  
  { to: '/explore', name: 'Explore', icon: 'material-symbols:explore-outline' },
  { to: '/favorites', name: 'Favorites', icon: 'ri:heart-2-line' },
  { to: '/rooms', name: 'Rooms', icon: 'material-symbols:gmail-rooms' },
])


</script>


<style></style>

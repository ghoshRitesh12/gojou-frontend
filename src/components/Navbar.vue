<template>

  <!-- <p class="text-[1rem] px-8 pb-2 text-gray-500">Menu</p> -->
  
  <nav id="navbar" 
    class="flex flex-col gap-1"
  >
  
    <NavLink 
      v-for="menuRoute, index in menuRoutes" 
      :key="index"
      :to="menuRoute.to"
      :name="menuRoute.name"
      :title="menuRoute.name"
    >
      <template v-slot>
        <span class="flex gap-4 items-center text-[1.1rem]">
          <Icon 
            v-if="menuRoute.icon" 
            :icon="menuRoute.icon"
            class="text-lg"
          />
          {{ menuRoute.name }}
        </span>
      </template>

    </NavLink>


    <div class="border-t-[1px] border-zinc-800 mt-4 pt-6 flex flex-col gap-1">

      <NavLink 
        v-for="categoryRoute, index in categoryRoutes" 
        :key="index"
        :to="categoryRoute.to"
        :name="categoryRoute.name"
        :title="categoryRoute.name"
      >
        <template v-slot>
          <span class="flex gap-4 items-center text-[1.1rem]">
            <Icon 
              v-if="categoryRoute.icon" 
              :icon="categoryRoute.icon"
              class="text-lg"
            />
            {{ categoryRoute.name }}
          </span>
        </template>

      </NavLink>

    </div>

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

const categoryRoutes = ref([
  { to: '/anime/movie', name: 'Movies', icon: 'material-symbols:movie-outline' },
  { to: '/anime/tv', name: 'TV Series', icon: 'ic:outline-tv' },  
  { to: '/anime/most-popular', name: 'Most Popular', icon: 'ph:fire-simple-bold' },
  { to: '/anime/most-favorite', name: 'Most Favorite', icon: 'mdi:heart-multiple-outline' },
  { to: '/anime/top-upcoming', name: 'Top Upcoming', icon: 'gridicons:line-graph' },
]);

</script>


<style></style>

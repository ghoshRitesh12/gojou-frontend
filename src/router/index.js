import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import FavoritesView from '../views/FavoritesView.vue';
import RoomsView from '../views/RoomsView.vue';
import AnimeCategoryView from '../views/AnimeCategoryView.vue';
import GenreView from '../views/GenreView.vue';
import SearchView from '../views/SearchView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView
  },
  {
    path: '/anime/:animeCategory',
    name: 'anime-category',
    component: AnimeCategoryView
  },
  {
    path: '/genre/:genreName',
    name: 'genre',
    component: GenreView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: RoomsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

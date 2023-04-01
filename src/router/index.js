import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import FavoritesView from '../views/FavoritesView.vue';
import RoomsView from '../views/RoomsView.vue';
import RoomView from '../views/RoomView.vue';
import AnimeCategoryView from '../views/AnimeCategoryView.vue';
import GenreView from '../views/GenreView.vue';
import SearchView from '../views/SearchView.vue';
import AnimeInfoView from '../views/AnimeInfoView.vue';
import ExploreView from '../views/ExploreView.vue';

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
    path: '/anime/info/:animeId',
    name: 'anime-info',
    component: AnimeInfoView
  },
  {
    path: '/anime/:animeCategory',
    name: 'anime-category',
    component: AnimeCategoryView
  },
  {
    // path: '/explore/:exploreCategory',
    path: '/explore',
    name: 'explore',
    component: ExploreView
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
  {
    path: '/room/:roomId',
    name: 'room',
    component: RoomView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

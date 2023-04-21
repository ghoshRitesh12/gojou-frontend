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

import { useUserStore } from '@/stores/userStore';
import { openAuthModal } from '@/stores/auth';

function checkAuth(to, from) {
  const userStore = useUserStore();
  if(!userStore.isAuth) {
    openAuthModal();
    return false;
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView,
    // beforeEnter: checkAuth
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
    component: RoomView,
    beforeEnter: checkAuth
  },
  {
    path: '/auth-redirect',
    name: 'auth-redirect',
    component: () => import('@/views/AuthRedirect.vue'),
    beforeEnter: (to, from) => {
      if(!sessionStorage.getItem('auth-redirect')) {
        window.history.back();
        return false;
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { openAuthModal, setAuthRedirect } from '@/stores/auth';
import { resetPageError } from '@/stores/error';

function checkAuth(to, from) {
  const userStore = useUserStore();

  if(!userStore.isAuth) {
    console.log(to.href);
    setAuthRedirect(to.href)
    openAuthModal();
    return false;
  }
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/FavoritesView.vue'),
    beforeEnter: checkAuth
  },
  {
    path: '/anime/info/:animeId',
    name: 'anime-info',
    component: () => import('../views/AnimeInfoView.vue')
  },
  {
    path: '/anime/:animeCategory',
    name: 'anime-category',
    component: () => import('../views/AnimeCategoryView.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../views/ExploreView.vue')
  },
  {
    path: '/genre/:genreName',
    name: 'genre',
    component: () => import('../views/GenreView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: () => import('../views/RoomsView.vue')
  },
  { path: '/room/invite', redirectTo: '/explore' },
  {
    path: '/room/invite/:roomToken',
    name: 'room-invite',
    component: () => import('../views/RoomInviteView.vue'),
    beforeEnter: checkAuth
  },
  { path: '/room', redirectTo: '/explore' },
  {
    path: '/room/:roomId',
    name: 'room',
    component: () => import('../views/RoomView.vue'),
    beforeEnter: checkAuth
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    beforeEnter: checkAuth
  },
  {
    path: '/auth-redirect',
    name: 'auth-redirect',
    component: () => import('../views/AuthRedirect.vue'),
    beforeEnter: (to, from) => {
      if(!sessionStorage.getItem('auth-redirect') && !sessionStorage.getItem('gauth-redirect')) {
        window.history.back();
        return false;
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  resetPageError();
  next();
})


export default router

import API from './API.js';

export default {
  sendSignupInfo(signupData) {
    return API().post('/signup', signupData)
  },
  sendLoginInfo(loginData) {
    return API().post('/login', loginData)
  },
  logout() {
    return API().get('/logout')
  },
  getNewTokens() {
    return API().get('/refresh')
  },


  getAllFavoriteAnimes() {
    return API().get('/favorites')
  },
  isFavoriteAnime(animeId) {
    return API().get(`/favorites/${animeId}`)
  },
  addFavoriteAnime(animeInfo) {
    return API().post('/favorites', animeInfo)
  },
  removeFavoriteAnime(animeId) {
    return API().delete(`/favorites/${animeId}`)
  },
  
}

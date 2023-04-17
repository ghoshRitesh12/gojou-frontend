import API from './API.js';

export default {
  sendAuthCallback(code, scope, authuser, prompt) {
    return API().get(
      `/google-auth/callback?code=${code}&scope=${scope}&authuser=${authuser}&prompt=${prompt}`
    )
  },


  getFavoriteAnimes() {
    return API().get(`/favorites`)
  },
  
}

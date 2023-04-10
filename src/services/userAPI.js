import API from './API.js';

export default {
  getFavoriteAnimes() {
    return API().get(`/favorites`)
  },
  
}

import API from './API.js';

export default {
  sendSignupInfo(signupData) {
    return API().post('/signup', signupData)
  },
  sendLoginInfo(loginData) {
    return API().post('/login', loginData)
  },
  getNewTokens() {
    return API().get('/refresh')
  },


  getFavoriteAnimes() {
    return API().get(`/favorites`)
  },
  
}

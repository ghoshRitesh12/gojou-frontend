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


  createRoom(roomData) {
    return API().post('/rooms', roomData)
  },
  getRoomInfo(roomId) {
    return API().get(`/room/${roomId}`)
  },
  updateRoomAnime(roomId, roomData) {
    return API().put(`/room/${roomId}/anime`, roomData)
  },
  updateRoomConfig(roomId, queryParam, roomData = {}) {
    return API().put(`/room/${roomId}/config${queryParam}`, roomData)
  },
  joinRoom(roomId) {
    return API().get(`/room/${roomId}/join`)
  },
  leaveRoom(roomId) {
    return API().put(`/room/${roomId}`)
  },
  deleteRoom(roomId) {
    return API().delete(`/room/${roomId}`)
  },
  getUserRooms() {
    return API().get('/rooms')
  },
  browseRooms() {
    return API().get('/rooms/browse')
  },
  roomInvite(roomToken) {
    return API().get(`/room/invite/${roomToken}`)
  },
  getRoomInviteToken(roomId) {
    return API().get(`/room/${roomId}/invite-token`)
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

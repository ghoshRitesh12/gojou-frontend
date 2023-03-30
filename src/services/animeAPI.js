import API from './API.js';

export default {
  getHome() {
    return API().get(`/api/v1/home`)
  },
  getAnimeInfo(animeId) {
    return API().get(`/api/v1/info?id=${animeId}`)
  },
  getAnimeCategory(animeCategory, page) {
    return API().get(`/api/v1/${animeCategory}?page=${page}`)
  },
  getGenreAnime(genreName) {
    return API().get(`/api/v1/genre?name=${genreName}`)
  },
}

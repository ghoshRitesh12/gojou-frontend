import API from './API.js';

export default {
  getHome() {
    return API().get(`/api/v1/home`)
  },
  getAnimeInfo(animeId) {
    return API().get(`/api/v1/info?id=${animeId}`)
  },
  getAnimeCategory(animeCategory, page) {
    return API().get(`/api/v1/${animeCategory}?page=${page}`, {
      withCredentials: true
    })
  },
  getAnimeExploreCategory(animeCategory) {
    return API().get(`/api/v1/explore/${animeCategory}`)
  },
  getGenreAnime(genreName) {
    return API().get(`/api/v1/genre?name=${genreName}`)
  },

  
  getRoomAnimeInfo(animeId) {
    return API().get(`/api/v1/info-room?id=${animeId}`)
  },
  getAnimeEpisodes(animeId) {
    return API().get(`/api/v1/episodes?id=${animeId}`)
  },
  getEpisodeServers(episodeId) {
    return API().get(`/api/v1/servers?episodeId=${episodeId}`)
  },
  getEpisodeSource(epId, server, subOrDub) {
    return API().get(`/api/v1/watch-episode?episodeId=${epId}&server=${server}&subOrDub=${subOrDub}`)
  },
}

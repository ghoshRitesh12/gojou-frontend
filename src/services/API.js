import axios from 'axios';

const baseUrl = process.env.VUE_APP_DEV_BASE_URL;
// const baseUrl = 'http://192.168.0.106:5000' 


export default (url = baseUrl) => {
  const instance = axios.create({
    baseURL: url,
    withCredentials: true,
  })

  instance.interceptors.response.use(undefined, err => {
    return Promise.reject(err);

  })

  return instance;
}

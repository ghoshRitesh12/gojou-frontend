import axios from 'axios';

const baseUrl = 'http://localhost:5000' 
// const baseUrl = 'http://192.168.0.106:5000' 

export default (url=baseUrl) => {
  return axios.create({
    baseURL: url
  })
}

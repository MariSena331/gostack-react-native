import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.0.143:3334',
});

export default api;

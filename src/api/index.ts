import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jjalbot.com/api/',
});

export default api;

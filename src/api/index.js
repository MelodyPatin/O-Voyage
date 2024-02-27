/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import axios from 'axios';

// Creating an instance of axios with a base URL for the API
const api = axios.create({
  baseURL: 'http://localhost:8001/api/',
});
// Request interceptor for modifying requests before they are sent
api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;

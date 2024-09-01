import axios from 'axios';

const API_URL = 'https://connections-api.goit.global';

const instance = axios.create({
  baseURL: API_URL,
});

export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
};

export default instance;
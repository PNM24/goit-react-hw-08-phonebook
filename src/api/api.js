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

export const registerUser = async (username, email, password) => {
  const response = await instance.post('/users/signup', { username, email, password });
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await instance.post('/users/login', { email, password });
  return response.data;
};

export const logoutUser = async () => {
  await instance.post('/users/logout');
};
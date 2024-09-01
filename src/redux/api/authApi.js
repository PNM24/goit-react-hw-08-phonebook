import axiosInstance, { setAuthToken } from './axiosInstance';
import { loginSuccess, loginFailure, logout } from '../slices/authSlice';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/users/login', { email, password });
    const { user, token } = response.data;

    setAuthToken(token);
    dispatch(loginSuccess({ user, token }));
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
  }
};

export const register = (username, email, password) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/users/signup', { username, email, password });
    const { user, token } = response.data;

    setAuthToken(token);
    dispatch(loginSuccess({ user, token }));
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || 'Registration failed'));
  }
};

export const logoutUser = () => (dispatch) => {
  setAuthToken(null);
  dispatch(logout());
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

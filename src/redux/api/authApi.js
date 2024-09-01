import axiosInstance, { setAuthToken } from './axiosInstance';
import { loginSuccess, loginFailure, logout } from '../slices/authSlice';

export const register = (name, email, password) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/users/signup', { name, email, password });
    const { user, token } = response.data;

    setAuthToken(token);
    dispatch(loginSuccess({ user, token }));
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    let errorMessage = 'Registration failed';
    if (error.response && error.response.data.code === 11000) {
      errorMessage = 'Email already exists. Please use a different email.';
    }
    dispatch(loginFailure(errorMessage));
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/users/login', { email, password });
    const { user, token } = response.data;

    setAuthToken(token);
    dispatch(loginSuccess({ user, token }));
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Login failed';
    dispatch(loginFailure(errorMessage));
  }
};

export const logoutUser = () => (dispatch) => {
  setAuthToken(null);
  dispatch(logout());
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
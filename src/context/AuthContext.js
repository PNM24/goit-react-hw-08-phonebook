import React, { createContext, useState, useEffect } from 'react';
import { registerUser, loginUser, logoutUser, setAuthToken } from '../api/api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
      setUser({ email: "user@example.com" });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('authToken', data.token);
      setAuthToken(data.token);
      setUser({ email: data.user.email });
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem('authToken');
      setAuthToken(null);
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const register = async (email, password) => {
    try {
      const data = await registerUser(email, password);
      localStorage.setItem('authToken', data.token);
      setAuthToken(data.token);
      setUser({ email: data.user.email });
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
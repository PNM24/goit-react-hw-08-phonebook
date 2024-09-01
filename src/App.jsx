import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation/Navigation';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Contacts from './Pages/Contacts/Contacts';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer'; 
import theme from './theme/theme';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from './redux/store';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { loginSuccess } from './redux/slices/authSlice';
import { setAuthToken } from './redux/api/axiosInstance';

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      setAuthToken(token); 
      dispatch(loginSuccess({ user, token })); 
    }
  }, [dispatch, token]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <ErrorBoundary>
            <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Navigation />
              <main style={{ flex: '1 0 auto' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route 
                    path="/contacts" 
                    element={
                      <PrivateRoute>
                        <Contacts />
                      </PrivateRoute>
                    } 
                  />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
              <Footer /> {/* Footer-ul este poziționat mereu jos */}
            </div>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
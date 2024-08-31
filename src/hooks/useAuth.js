import { useSelector, useDispatch } from 'react-redux';
import { login, logout, register } from '../redux/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const authError = useSelector((state) => state.auth.error);

  const handleLogin = (email, password) => {
    return dispatch(login({ email, password }));
  };

  const handleLogout = () => {
    return dispatch(logout());
  };

  const handleRegister = (email, password) => {
    return dispatch(register({ email, password }));
  };

  return {
    user,
    authError,
    handleLogin,
    handleLogout,
    handleRegister,
  };
};
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return <div>You have been logged out.</div>;
};

export default Logout;
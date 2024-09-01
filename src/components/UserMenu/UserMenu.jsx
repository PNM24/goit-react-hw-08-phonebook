import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { logoutUser } from '../../redux/api/authApi';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body1" sx={{ mr: 2 }}>
        Welcome, {user.name}
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
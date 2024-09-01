import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Phonebook
          </Link>
        </Typography>
        <Box display="flex" alignItems="center">
          {user && (
            <Link to="/contacts" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>
              Contacts
            </Link>
          )}
          {user ? (
            <UserMenu />
          ) : (
            <>
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>
                Login
              </Link>
              <Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>
                Register
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
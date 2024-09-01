import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <AppBar position="static" sx={{ bgcolor: '#3f51b5', mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Phonebook
          </Link>
        </Typography>
        <Box display="flex" alignItems="center">
          {user && (
            <Button color="inherit" component={Link} to="/contacts">
              Contacts
            </Button>
          )}
          {user ? (
            <UserMenu />
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
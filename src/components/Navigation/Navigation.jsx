import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
            Phonebook
          </Link>
        </Typography>
        <Box display="flex" alignItems="center">
          {user && (
            <Button color="inherit" component={Link} to="/contacts" startIcon={<ContactPageIcon />}>
              Contacts
            </Button>
          )}
          {user ? (
            <UserMenu />
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login" startIcon={<LoginIcon />}>
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register" startIcon={<AppRegistrationIcon />}>
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

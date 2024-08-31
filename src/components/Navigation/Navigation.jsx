import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <AppBar position="sticky">
      <Toolbar className={styles.navbar}>
        <Button component={NavLink} to="/" color="inherit" className={styles.link}>
          Home
        </Button>
        <Button component={NavLink} to="/register" color="inherit" className={styles.link}>
          Register
        </Button>
        <Button component={NavLink} to="/login" color="inherit" className={styles.link}>
          Login
        </Button>
        <Button component={NavLink} to="/contacts" color="inherit" className={styles.link}>
          Contacts
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
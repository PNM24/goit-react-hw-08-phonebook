import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Flex, Text, Button } from '@chakra-ui/react';
import { logout } from '../../redux/slices/authSlice';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Flex justify="space-between" align="center" className={styles.userMenu}>
      <Text>{user?.email}</Text>
      <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
    </Flex>
  );
};

UserMenu.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};

export default UserMenu;
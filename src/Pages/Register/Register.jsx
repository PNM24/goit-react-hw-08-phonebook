import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/api/authApi';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

const Register = () => {
  const [username, setUsername] = useState(''); // Asigură-te că acest câmp este completat
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert('Name is required');
      return;
    }

    dispatch(register(username, email, password)); // Trimite username-ul la backend
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={3}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      {authError && <Alert severity="error">{authError}</Alert>}
      <Box component="form" onSubmit={handleSubmit} width="100%" maxWidth="400px" mt={2}>
        <TextField
          label="Name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/api/authApi';
import { Box, Button, TextField, Typography, Alert, Card, CardContent, CardActions, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Name is required');
      return;
    }

    if (!email.trim()) {
      alert('Email is required');
      return;
    }

    if (!password.trim()) {
      alert('Password is required');
      return;
    }

    dispatch(register(name, email, password));
  };

  // Redirecționează utilizatorul către pagina dorită după ce autentificarea are succes
  useEffect(() => {
    if (user) {
      navigate('/contacts');
    }
  }, [user, navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f0f2f5"
      p={3}
    >
      <Card sx={{ maxWidth: 400, width: '100%', borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" component="h1">
              Register
            </Typography>
          </Box>
          {authError && <Alert severity="error" sx={{ mb: 2 }}>{authError}</Alert>}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              margin="normal"
              variant="outlined"
            />
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, py: 1.5 }}
              >
                Register
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
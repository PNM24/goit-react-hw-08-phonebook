import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/api/authApi'; 
import { Box, Button, TextField, Typography, Alert, Card, CardContent, CardActions, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert('Email is required');
      return;
    }

    if (!password.trim()) {
      alert('Password is required');
      return;
    }

    dispatch(login(email, password));
  };

  
  React.useEffect(() => {
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
              Login
            </Typography>
          </Box>
          {authError && <Alert severity="error" sx={{ mb: 2 }}>{authError}</Alert>}
          <Box component="form" onSubmit={handleSubmit}>
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
                Login
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
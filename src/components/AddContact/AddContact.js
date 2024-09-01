import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField } from '@mui/material';
import { createContact } from '../../redux/api/contactsApi';

const AddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3, width: '100%', maxWidth: 600 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Add Contact
      </Button>
    </Box>
  );
};

export default AddContact;
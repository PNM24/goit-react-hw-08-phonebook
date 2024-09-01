import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';

const ContactsItem = ({ contact }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${contact.name}?`);
    if (!confirmDelete) return;

    try {
      // Simulăm o operațiune asincronă
      console.log('Deleting contact:', contact.id);
      // Aici poți adăuga codul pentru ștergerea contactului din baza de date sau API-ul
      // await api.deleteContact(contact.id);
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Failed to delete the contact. Please try again.');
    }
  };

  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      p={2} 
      my={1} 
      bgcolor="background.paper" 
      boxShadow={1} 
      borderRadius={1}
    >
      <Box>
        <Typography variant="h6">{contact.name}</Typography>
        <Typography variant="body2" color="textSecondary">{contact.number}</Typography>
      </Box>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsItem;
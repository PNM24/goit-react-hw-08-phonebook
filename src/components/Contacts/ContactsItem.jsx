import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';

const ContactsItem = ({ contact }) => {
  const handleDelete = () => {
    console.log('Deleting contact:', contact.id);
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
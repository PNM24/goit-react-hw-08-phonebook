import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ContactsItem from '../../components/Contacts/ContactsItem';

const Contacts = () => {
  const contacts = [
    { id: 1, name: 'John Doe', number: '123-456-7890' },
    { id: 2, name: 'Jane Smith', number: '987-654-3210' },
  ];

  return (
    <div className="container">
      <Box>
        <Typography variant="h4" gutterBottom>Your Contacts</Typography>
        {contacts.map((contact) => (
          <ContactsItem key={contact.id} contact={contact} />
        ))}
      </Box>
    </div>
  );
};

export default Contacts;
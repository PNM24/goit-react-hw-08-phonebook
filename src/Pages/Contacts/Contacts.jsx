import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import ContactsItem from '../../components/Contacts/ContactsItem';

const Contacts = () => {
  // Exemplu de utilizare a `useSelector` pentru a accesa starea din Redux
  const contacts = useSelector((state) => state.contacts.items); // presupunând că contactele sunt stocate în `state.contacts.items`

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
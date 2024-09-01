import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, List, ListItem, ListItemText, IconButton, CircularProgress, Card, CardContent } from '@mui/material';
import { fetchContacts, removeContact } from '../../redux/api/contactsApi';
import AddContact from '../../components/AddContact/AddContact';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeContact(id));
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
      <Card sx={{ width: '100%', maxWidth: 600, mb: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Your Contacts
          </Typography>
          <AddContact />
        </CardContent>
      </Card>
      {loading ? (
        <CircularProgress />
      ) : contacts.length === 0 ? (
        <Typography variant="body1">No contacts available.</Typography>
      ) : (
        <List sx={{ width: '100%', maxWidth: 600 }}>
          {contacts.map((contact) => (
            <ListItem key={contact.id} sx={{ mb: 2, boxShadow: 1 }}>
              <ListItemText
                primary={contact.name}
                secondary={`Phone: ${contact.number}`}
              />
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(contact.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Contacts;
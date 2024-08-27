import React, { useEffect } from 'react';
import { PhonebookForm } from './components/PhonebookForm/PhonebookForm';
import { FilterContacts } from './components/FilterContacts/FilterContacts';
import { Contacts } from './components/Contacts/Contacts';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter, fetchContacts, selectContacts, selectFilter, selectIsLoading, selectError } from './redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Fetch contacts from the server when the component mounts
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const handleFormSubmit = (name, number) => {
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <PhonebookForm handleFormSubmit={handleFormSubmit} />

      <h2 className="title">Contacts</h2>
      <FilterContacts filter={filter} onFilterChange={handleFilterChange} />
      
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      <Contacts
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
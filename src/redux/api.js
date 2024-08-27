import axios from 'axios';

const API_URL = 'https://66ce1b818ca9aa6c8ccce132.mockapi.io/contacts';

export const fetchContactsApi = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addContactApi = async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
};

export const deleteContactApi = async (contactId) => {
  await axios.delete(`${API_URL}/${contactId}`);
  return contactId;
};

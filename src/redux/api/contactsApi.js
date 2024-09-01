import axiosInstance from './axiosInstance';
import { setContacts, setError, addContact, deleteContact, setLoading } from '../slices/contactsSlice';

export const fetchContacts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosInstance.get('/contacts');
    dispatch(setContacts(response.data));
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Failed to fetch contacts'));
  } finally {
    dispatch(setLoading(false));
  }
};

export const createContact = (name, number) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/contacts', { name, number });
    dispatch(addContact(response.data));
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Failed to add contact'));
  }
};

export const removeContact = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Failed to delete contact'));
  }
};
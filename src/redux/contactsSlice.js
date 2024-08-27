import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsApi, addContactApi, deleteContactApi } from './api';

// Operațiuni asincrone
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    return await fetchContactsApi();
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    return await addContactApi(contact);
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    return await deleteContactApi(contactId);
  }
);

// Slice-ul contacts
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

// Exportarea acțiunilor și a selectorilor
export const { setFilter } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.contacts.filter;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export default contactsSlice.reducer;
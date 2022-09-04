import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'Helpers/fetchContacts';

const BASE_URL = 'https://6310f14019eb631f9d69dd5e.mockapi.io';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (payload, { dispatch, getState, rejectWithValue }) => {
    const isInclude = getState().contacts.items.find(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase()
    );
    if (isInclude) {
      alert(`${payload.name} is already in contacts.`);
      return rejectWithValue(`${payload.name} is already in contacts.`);
    }
    await fetch(`${BASE_URL}/contacts`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    dispatch(fetchContacts());
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { dispatch }) => {
    await fetch(`${BASE_URL}/contacts/${id}`, {
      method: 'delete',
    });

    dispatch(fetchContacts());
  }
);

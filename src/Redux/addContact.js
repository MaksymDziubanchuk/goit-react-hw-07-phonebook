import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'Helpers/fetchContacts';

const BASE_URL = 'https://6310f14019eb631f9d69dd5e.mockapi.io';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (payload, { dispatch }) => {
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

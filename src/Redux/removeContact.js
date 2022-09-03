import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'Helpers/fetchContacts';

const BASE_URL = 'https://6310f14019eb631f9d69dd5e.mockapi.io';

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { dispatch }) => {
    await fetch(`${BASE_URL}/contacts/${id}`, {
      method: 'delete',
    });

    dispatch(fetchContacts());
  }
);

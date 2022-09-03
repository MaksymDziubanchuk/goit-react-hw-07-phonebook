import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://6310f14019eb631f9d69dd5e.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetch(`${BASE_URL}/contacts`);
    const data = await response.json();
    return data;
  }
);

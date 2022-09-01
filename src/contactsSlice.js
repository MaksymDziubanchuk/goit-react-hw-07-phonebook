import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://6310f14019eb631f9d69dd5e.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetch(`${BASE_URL}/contacts`);
    const data = await response.json();
    return data;
  }
);

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

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { dispatch }) => {
    await fetch(`${BASE_URL}/contacts/${id}`, {
      method: 'delete',
    });

    dispatch(fetchContacts());
  }
);

const initialState = {
  items: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload.map(({ createdAt, ...item }) => item);
    },
  },
});

export const { updateFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

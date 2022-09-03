import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'Helpers/fetchContacts';

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

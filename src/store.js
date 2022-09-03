import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

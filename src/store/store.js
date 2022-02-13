import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from 'store/todoSlice';
import { themeSlice } from 'store/themeSlice';

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    themeMode: themeSlice.reducer,
  },
});

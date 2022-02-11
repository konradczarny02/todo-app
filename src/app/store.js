import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from 'app/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

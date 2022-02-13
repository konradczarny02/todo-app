import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from 'store/todoSlice';
import { themeSlice } from 'store/themeSlice';

const todosMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith('todos/')) {
    const todosState = store.getState().todos;
    localStorage.setItem('todos', JSON.stringify(todosState));
  }
  return result;
};

const themeMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith('themeMode/')) {
    const themeState = store.getState().themeMode;
    localStorage.setItem('themeMode', themeState);
  }
  return result;
};

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    themeMode: themeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosMiddleware, themeMiddleware),
});

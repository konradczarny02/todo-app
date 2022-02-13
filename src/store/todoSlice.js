import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getStateFromLocalStorage } from 'store/helpers';

const createTodo = (title) => ({
  id: nanoid(),
  title,
  completed: false,
});

const initialState = getStateFromLocalStorage('todos');

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      const todo = createTodo(action.payload);
      state.push(todo);
    },
    delete: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    complete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    clearCompleted: (state, action) => {
      return state.filter((todo) => todo.completed === false);
    },
  },
});

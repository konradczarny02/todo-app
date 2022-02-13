import { createSlice, nanoid } from '@reduxjs/toolkit';

const createTodo = (title) => ({
  id: nanoid(),
  title,
  completed: false,
});

const initialState = [createTodo('Learn Redux'), createTodo('Learn TypeScript')];

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

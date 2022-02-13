import { createSlice } from '@reduxjs/toolkit';
import { getThemeFromLocalStorage } from 'store/helpers';

const initialState = getThemeFromLocalStorage('themeMode');

export const themeSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    change: (state) => {
      if (state === 'light') {
        return 'dark';
      } else {
        return 'light';
      }
    },
  },
});

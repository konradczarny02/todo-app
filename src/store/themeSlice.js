import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'themeMode',
  initialState: 'light',
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

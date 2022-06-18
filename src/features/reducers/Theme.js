import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDark: (state) => {
      if (state.value) {
        state.value = false;
      } else {
        state.value = true;
      }
    }
  }
});

export const { setDark } = themeSlice.actions;

export default themeSlice.reducer;

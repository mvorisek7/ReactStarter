import { createSlice } from 'redux-starter-kit';
// import produce from 'immer';

const themeSlice = createSlice({
  slice: 'theme',
  initialState: 'light',
  reducers: {
    toggleTheme:(state) => {
      return state = (state === 'light' ? 'dark' : 'light');
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
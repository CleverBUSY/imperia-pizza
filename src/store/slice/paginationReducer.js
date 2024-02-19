// src/store/slice/paginationReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  productsPerPage: 6, // Вы можете установить любое начальное значение
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;

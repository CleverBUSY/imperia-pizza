import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../api/products";

export const fetchProducts = createAsyncThunk(
  "/food/fetchProducts",
  async () => {
    const data = await productsApi.getProducts();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsData: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsData = action.payload;
    });
  },
});
export const productsReducer = productsSlice.reducer;

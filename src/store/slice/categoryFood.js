import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoryFood from "../../api/categories";

export const fetchCategoryFood = createAsyncThunk("/category/fetchCotegoryFood", async () => {
    const data = await CategoryFood.getCategoryFood();
    return data;
});

const catalogFoodSlice = createSlice({
    name: "catalog",
    initialState: {
        categories: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryFood.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategoryFood.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.categories = action.payload;
            })
            .addCase(fetchCategoryFood.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const catalogReducer = catalogFoodSlice.reducer;

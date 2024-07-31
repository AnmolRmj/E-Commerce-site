import {createSlice} from "@reduxjs/toolkit";

import {fetchSortingData } from "../../services/AllProduct";
const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  

const sortingData=createSlice({
    name: "SearchProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSortingData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSortingData.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(fetchSortingData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
        
       
});
export default sortingData.reducer;
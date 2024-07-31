import {createSlice} from "@reduxjs/toolkit";

import { fetchUserData } from "../../services/AllProduct";

const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  

const allProductData=createSlice({
    name: "allproduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
        
       
});
export default allProductData.reducer;
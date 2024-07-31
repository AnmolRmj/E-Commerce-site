import {createSlice} from "@reduxjs/toolkit";

import {  fetchDynamicProduct} from "../../services/AllProduct";
const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  

const SearchDynamicProduct=createSlice({
    name: "fetchDynamicProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchDynamicProduct.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchDynamicProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(fetchDynamicProduct.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
        
       
});
export default SearchDynamicProduct.reducer;
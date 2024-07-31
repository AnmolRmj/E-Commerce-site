import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk("api/userdata",

  async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  
  return response;
 
});

export const fetchCarousal = createAsyncThunk("api/fetchcarousal", 
  async () => {
  const response = await axios.get("https://fakestoreapi.com/products?limit=5");
   
  return response;
 
});
export const fetchUser = createAsyncThunk("api/fetchuser", 
  async () => {
    const response = await axios.get("https://fakestoreapi.com/users");
  return response;
 
});
export const fetchSearchProduct = createAsyncThunk("api/SearchProduct", 
  async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);

   
  return response;
 
});
export const fetchDynamicProduct = createAsyncThunk("api/searchdynamicproduct", 
  async () => {
  const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
   
  return response;
 
});
export const fetchSortingData = createAsyncThunk("api/sortingdata", async (sort) => {
  const response = await axios.get(`https://fakestoreapi.com/products?sort=${sort}`);
  return response.data;
});


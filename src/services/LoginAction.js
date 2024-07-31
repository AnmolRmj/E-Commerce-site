

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `https://fakestoreapi.com/auth/login`,
        {
          username ,
          password ,
        },
        config
      );
      notification.success({
        message: "Success",
        description: "Welcome",
      });

      return data;
    } catch (error) {
      console.log("err", error);
      notification.open({
        message: "Error",
        description: error.response.data,
      });
    }
  }
);
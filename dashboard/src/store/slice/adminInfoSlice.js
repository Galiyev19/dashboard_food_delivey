import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formToJSON } from "axios";
import instance from "../../axios/axios";

export const AuthMe = createAsyncThunk("/login/authMe", async () => {
  try {
    const response = await instance.get("/identity/me");

    if (response.status === 200) {
      return response.data.responseData;
    }

    if (response.status == 401) {
      return null
    }
  } catch (error) {
    // console.error(error);
    // throw error;
  }
});

const initialState = {
  adminInfo: null,
  isLoading: true,
  error: "",
};

const adminInfo = createSlice({
  name: "admin",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(AuthMe.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(AuthMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adminInfo = action.payload;
      })
      .addCase(AuthMe.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// export const selectIsAuth = (state) => Boolean(state.adminInfo.adminInfo);

export default adminInfo.reducer;
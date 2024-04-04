import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/axios";

export const loginFetch = createAsyncThunk("/login/fetchAdmin",async(data) => {
    try{
        const response = await instance.post("/sign-in",data)
        return response.data
    }catch(e) {
        console.log(e)
    }
})


const initialState = {
    data: null,
    isLoding: true,
    error:""
}

const loginSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(loginFetch.pending, (state, action) => {
            state.isLoading = true;
          })
          .addCase(loginFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
          })
          .addCase(loginFetch.rejected, (state, action) => {
            state.error = action.error.message;
          })
    },
})

export const selectIsAuth = (state) => Boolean(state.login.data);

export default loginSlice.reducer;



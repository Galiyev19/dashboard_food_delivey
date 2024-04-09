import { configureStore } from "@reduxjs/toolkit";
import adminInfoSlice from "./slice/adminInfoSlice";
import loginSlice from "./slice/loginSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        adminInfo: adminInfoSlice
    }
})
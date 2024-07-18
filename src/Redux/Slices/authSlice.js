import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "Config/axiosConfig";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    token: localStorage.getItem("token") || '',
    username: localStorage.getItem("username") || ''
};

export const signup = createAsyncThunk("auth/signup", async (data) => {
    try {
        const response = axiosConfig.post("/signup", data);
        toast.promise(response, {
            success: "Successfully signedUp!!",
            loading: "Signing...",
            error: "Something went wrong!!"
        });
        return await response;
    } catch (error) {
        console.log(error);
    }
});

export const signin = createAsyncThunk("auth/signin", async (data) => {
    try {
        const response = axiosConfig.post("/signin", data);
        toast.promise(response, {
            success: "Successfully signedIn!!",
            loading: "Signing...",
            error: "Something went wrong!!"
        });
        return await response;
    } catch (error) {
        console.log(error);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = '';
            state.username = '';
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signin.fulfilled, (state, action) => {
            const data = action?.payload?.data;
            if(!data) return;
            state.isLoggedIn = data?.success;
            state.token = data?.data?.token;
            state.username = data?.data?.username;
            localStorage.setItem("isLoggedIn", data?.success);
            localStorage.setItem("username", data?.data?.username);
            localStorage.setItem("token", data?.data?.token);
        });
    }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
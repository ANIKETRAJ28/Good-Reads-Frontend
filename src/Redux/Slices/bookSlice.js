import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "Config/axiosConfig";
import toast from "react-hot-toast";

const initialState = {
    bookList: []
};

export const downloadBooks = createAsyncThunk("/books/create", async () => {
    try {
        const response = axiosConfig.get("books");
        toast.promise(response, {
            success: "Successfully Loaded Books!!",
            loading: "Loading Books...",
            error: "Something went wrong, can't load books!!"
        });
        return await response;
    } catch (error) {
        console.log(error);
    }
});

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(downloadBooks.fulfilled, (state, action) => {
            if(action?.payload?.data?.data) {
                state.bookList = action?.payload?.data?.data;
                state.bookList.sort((a, b) => 0.5 - Math.random());
            }
        });
    }
});

export default bookSlice.reducer;
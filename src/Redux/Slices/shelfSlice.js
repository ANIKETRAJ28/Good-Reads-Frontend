import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "Config/axiosConfig";
import toast from "react-hot-toast";

const initialState = {
    shelves: []
};

export const  downloadShelves = createAsyncThunk("/shelf/get", async () => {
    try {
        const response = axiosConfig.get("bookshelves", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        });
        toast.promise(response, {
            success: "Successfully loaded the shelves!!",
            loading: "Loading shelves...",
            error: "Failed to load the shelves!!"
        });
        return await response;
    } catch (error) {
        console.log(error);
    }
});

const shelfSlice = createSlice({
    name: "shelf",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(downloadShelves.fulfilled, (state, action) => {
            if(action?.payload?.data?.data) {
                state.shelves = action?.payload?.data?.data;
            }
        });
    }
});

export default shelfSlice.reducer;
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

export const addBookToShelf = createAsyncThunk("/shelf/add/book", async ({shelf, book}) => {
    try {
        const response = axiosConfig.patch(`bookshelves/${shelf}/add/${book}`, {},{
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        });
        toast.promise(response, {
            success: `Successfully added book to ${shelf} shelf!!`,
            loading: `Adding book to ${shelf} shelf...`,
            error: `Failed to add book to ${shelf} shelf, try again later!!`
        });
        return await response;
    } catch (error) {
        console.log(error);
    }
});

export const addShelf = createAsyncThunk("shelf.create", async ({name}) => {
    try {
        const response = axiosConfig.post("bookshelves", {name}, {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        });
        toast.promise(response, {
            success: `Successfully created ${name} shelf!!`,
            loading: `Creating ${name} shelf...`,
            error: `Failed to create ${name} shelf, try again later!!`
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
        })
        .addCase(addShelf.fulfilled, (state, action) => {
            if(action?.payload?.data?.data) {
                const response = action?.payload?.data?.data;
                state.shelves = [...state.shelves, response];
            }
        });
    }
});

export default shelfSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "Redux/Slices/authSlice";
import bookSliceReducer from "Redux/Slices/bookSlice";
import shelfSliceReducer from "Redux/Slices/shelfSlice";

export default configureStore({
    reducer: {
        auth: authSliceReducer,
        book: bookSliceReducer,
        shelf: shelfSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});
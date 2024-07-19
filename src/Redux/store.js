import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "Redux/Slices/authSlice";
import bookSlcieReducer from "Redux/Slices/bookSlice";

export default configureStore({
    reducer: {
        auth: authSliceReducer,
        book: bookSlcieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});
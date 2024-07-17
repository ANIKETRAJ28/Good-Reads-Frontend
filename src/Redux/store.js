import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "Redux/Slices/authSlice";

export default configureStore({
    reducer: {
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});
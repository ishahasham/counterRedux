// Store/Store.jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";

const store = configureStore({
    reducer: {
        counterReducer, // Use a more descriptive key
    },
});

export default store;

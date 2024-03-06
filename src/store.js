import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authentication/AuthSlice";
import RequestReducer from "./features/requests/RequestSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        request: RequestReducer,
    },
});

export default store;
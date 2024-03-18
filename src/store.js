import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authentication/AuthSlice";
import RequestReducer from "./features/requests/RequestSlice";
import AdminReducer from "./features/admin/AdminSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        request: RequestReducer,
        admin: AdminReducer,
    },
});

export default store;
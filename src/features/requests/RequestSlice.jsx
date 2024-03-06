import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: 'request',
    initialState: {
        userRequests: [],
    },
    reducers: {
        setUserRequest: (state, action) => {
            state.userRequests = action.payload;
        },
    },
});

export const { setUserRequest } = requestSlice.actions;

export default requestSlice.reducer;
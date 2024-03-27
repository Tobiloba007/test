import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        user: '',
        broadcastData: '',
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setBroadcast: (state, action) => {
            state.broadcastData = action.payload;
        },
    },
});


export const { setUser, setBroadcast } = adminSlice.actions;

export default adminSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        user: '',
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});


export const { setUser } = adminSlice.actions;

export default adminSlice.reducer;
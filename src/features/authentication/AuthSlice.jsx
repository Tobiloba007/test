import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loginToken: null,
        loading: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoginToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setUser, setLoginToken, setLoading } = authSlice.actions;

export default authSlice.reducer;
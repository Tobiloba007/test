import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isLoggedIn: false,
        splashToken: null,
        regToken: null,
        loading: false,
        error: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            // state.loading = false;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setRegToken: (state, action) => {
            state.regToken = action.payload;
        },
        setSplashToken: (state, action) => {
            state.splashToken = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setUser, setToken, setLoading, setError, setRegToken, setIsLoggedIn, setSplashToken } = authSlice.actions;

export default authSlice.reducer;
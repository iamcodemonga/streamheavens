import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    loading: false,
    error: ""
}

export const fetchUser = createAsyncThunk('auth/user', async() => {

    try {
        const { data } = await axios.get('http://localhost:5005/', { withCredentials: true });
        return data;
    } catch (error) {
        console.log(error.message)
    }
    
});

export const registerUser = createAsyncThunk('auth/register', async(userInfo) => {
    return userInfo;
});

export const loginUser = createAsyncThunk('auth/login', async(userInfo) => {
    // const { data } = await axios.post('http://localhost:5005/', userInfo, { withCredentials: true });
    return userInfo;
});

export const logoutUser = createAsyncThunk('auth/logout', async() => {
    const { data } = await axios.get('http://localhost:5005/auth/logout', { withCredentials: true });
    return data.auth;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = false;
            })
            .addCase(fetchUser.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = false;
            })
            .addCase(registerUser.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = false;
            })
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = false;
            })
            .addCase(logoutUser.pending, (state, action) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export default authSlice.reducer;
import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: {},
    authLoading: false,
    authError: false,
    errorMessage: ''
}

const fetchUser = createAsyncThunk('auth/user', async() => {
    const { data } = await axios.get('http://localhost:5005/', { withCredentials: true });
    return data;
});

const registerUser = createAsyncThunk('auth/user', async(userInfo) => {

    try {
        const { data } = await axios.post('http://localhost:5005/auth/register', userInfo, { withCredentials: true });
        // if (data.auth.status === 'failed') {
        //     console.log(data.auth.message);
        //     setLoading(false);
        //     setErrorMessage(data.auth.message);
        //     return;
        // } else {
        //     setLoading(false);
        //     setErrorMessage('');
        //     setSuccessMessage(data.auth.message);
        // }
    } catch (error) {
        console.log(error.message)
    }

});

const loginUser = createAsyncThunk('auth/user', async(userInfo) => {
    const { data } = await axios.post('http://localhost:5005/', userInfo, { withCredentials: true });
    return data;
});

const handleLogout = createAsyncThunk('auth/user', async() => {
    const { data } = await axios.get('http://localhost:5005/', { withCredentials: true });
    return data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.authLoading = false;
                state.authError = false;
            })
            .addCase(fetchUser.pending, (state, action) => {
                state.authLoading = true;
                state.authError = false;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.user = action.payload;
                state.authLoading = false;
                state.authError = true;
            })
    }
})

export default authSlice.reducer;
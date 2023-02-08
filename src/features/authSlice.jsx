import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const AppRoot = process.env.REACT_APP_API_ROOT;

const initialState = {
    user: null,
    loading: true,
    error: "",
}

export const fetchUser = createAsyncThunk('auth/user', async() => {

    try {
        const { data } = await axios.get(`${AppRoot}/`, { withCredentials: true });
        return data;
    } catch (error) {
        console.log(error.message)
    }
    
});

export const registerUser = createAsyncThunk('auth/register', async(userInfo) => {
    return userInfo;
});

export const loginUser = createAsyncThunk('auth/login', async(userInfo) => {
    return userInfo;
});

export const logoutUser = createAsyncThunk('auth/logout', async() => {
    const { data } = await axios.get(`${AppRoot}/auth/logout`, { withCredentials: true });
    return data.auth;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addToList(state, action) {
            state.user.favourites = [ ...state.user.favourites, action.payload];
        },
        removeFromListed(state, action) {
            state.user.favourites = state.user.favourites.filter((favourite, index) => favourite !== action.payload)
        }
    },
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

export const { listedPosters, addToList, removeFromListed } = authSlice.actions;
export default authSlice.reducer;
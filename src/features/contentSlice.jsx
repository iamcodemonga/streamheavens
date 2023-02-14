import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const key = process.env.REACT_APP_MOVIE_API;
const baseURL = process.env.REACT_APP_MOVIE_BASEURL;
const AppRoot = process.env.REACT_APP_API_ROOT;
const userid = JSON.parse(localStorage.getItem('user'));

const initialState = {
    billBoard: [],
    ratedMovies: [],
    latestMovies: [],
    trendingMovies: [],
    tvSeries: [],
    movies: [],
    favourites: [],
    billBoardLoading: false,
    billBoardError: false,
    billBoardSuccess: false,
    ratedMoviesLoading: false,
    ratedMoviesError: false,
    ratedMoviesSuccess: false,
    latestMoviesLoading: false,
    latestMoviesError: false,
    latestMoviesSuccess: false,
    trendingMoviesLoading: false,
    trendingMoviesError: false,
    trendingMoviesSuccess: false,
    tvSeriesLoading: false,
    tvSeriesError: false,
    tvSeriesSuccess: false,
    moviesLoading: false,
    moviesError: false,
    moviesSuccess: false,
    favouritesLoading: false,
    favouritesError: false,
    favouritesSuccess: false
}

export const fetchBillBoard = createAsyncThunk("content/billboard", async() => {
    const { data } = await axios.get(`${baseURL}/trending/all/day?api_key=eddc53e2373dc83fa1affadf2d9a1efb`);
    const index =Math.floor(Math.random()*data.results.length);
    return data.results[index];
});

export const fetchRatedMovies = createAsyncThunk("content/ratedMovies", async() => {
    const { data } = await axios.get(`${baseURL}/movie/top_rated?api_key=${key}&language=en-US&page=2`);
    return data.results;
});

export const fetchLatestMovies = createAsyncThunk("content/latestMovies", async() => {
    const { data } =  await axios(`${baseURL}/movie/upcoming?api_key=${key}&language=en-US&page=1`);
    return data.results;
});

export const fetchTrendingMovies = createAsyncThunk("content/trendingMovies", async() => {
    const { data } = await axios.get(`${baseURL}/trending/movie/week?api_key=${key}`);
    return data.results;
});

export const fetchTvSeries = createAsyncThunk("content/tvSeries", async(query) => {
    if (query) {
        const { data } = await axios.get(`${baseURL}/search/tv?api_key=${key}&language=en-US&page=1&query=${query}&include_adult=false`);
        return data.results;
    } else {
        const { data } = await axios.get(`${baseURL}/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
        return data.results;
    }
});

export const fetchMovies = createAsyncThunk("content/movies", async(query) => {
    if (query) {
        const { data } = await axios.get(`${baseURL}/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`);
        return data.results;
    } else {
        const { data } = await axios.get(`${baseURL}/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
        return data.results;
    }
});

export const fetchFavourites = createAsyncThunk('content/favourites', async() => {
    try {
        const { data } = await axios.get(`${AppRoot}/favourites/${userid}`)
        return data.favourites;
    } catch (error) {
        console.log(error.message)
    }
});

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers:  {
        removeFavourites(state, action) {
            let newFavourites = state.favourites.filter((favourite, index) => favourite.poster !== action.payload)
            state.favourites = newFavourites;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBillBoard.fulfilled, (state, action) => {
                state.billBoard = action.payload;
                state.billBoardLoading = false;
                state.billBoardError = false;
                state.billBoardSuccess = true;
            })
            .addCase(fetchBillBoard.pending, (state, action) => {
                state.billBoardLoading = true;
                state.billBoardError = false;
                state.billBoardSuccess = false;
            })
            .addCase(fetchBillBoard.rejected, (state, action) => {
                state.billBoardLoading = false;
                state.billBoardError = true;
                state.billBoardSuccess = false;
            })
            .addCase(fetchRatedMovies.fulfilled, (state, action) => {
                state.ratedMovies = action.payload;
                state.ratedMoviesLoading = false;
                state.ratedMoviesError = false;
                state.ratedMoviesSuccess = true;
            })
            .addCase(fetchRatedMovies.pending, (state, action) => {
                state.ratedMoviesLoading = true;
                state.ratedMoviesError = false;
                state.ratedMoviesSuccess = false;
            })
            .addCase(fetchRatedMovies.rejected, (state, action) => {
                state.ratedMoviesLoading = false;
                state.ratedMoviesError = true;
                state.ratedMoviesSuccess = false;
            })
            .addCase(fetchLatestMovies.fulfilled, (state, action) => {
                state.latestMovies = action.payload;
                state.latestMoviesLoading = false;
                state.latestMoviesError = false;
                state.latestMoviesSuccess = true;
            })
            .addCase(fetchLatestMovies.pending, (state, action) => {
                state.latestMoviesLoading = true;
                state.latestMoviesError = false;
                state.latestMoviesSuccess = false;
            })
            .addCase(fetchLatestMovies.rejected, (state, action) => {
                state.latestMoviesLoading = false;
                state.latestMoviesError = true;
                state.latestMoviesSuccess = false;
            })
            .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
                state.trendingMovies = action.payload;
                state.trendingMoviesLoading = false;
                state.trendingMoviesError = false;
                state.trendingMoviesSuccess = true;
            })
            .addCase(fetchTrendingMovies.pending, (state, action) => {
                state.trendingMoviesLoading = true;
                state.trendingMoviesError = false;
                state.trendingMoviesSuccess = false;
            })
            .addCase(fetchTrendingMovies.rejected, (state, action) => {
                state.trendingMoviesLoading = false;
                state.trendingMoviesError = true;
                state.trendingMoviesSuccess = false;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.moviesLoading = false;
                state.moviesError = false;
                state.moviesSuccess = true;
            })
            .addCase(fetchMovies.pending, (state, action) => {
                state.moviesLoading = true;
                state.moviesError = false;
                state.moviesSuccess = false;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.moviesLoading = false;
                state.moviesError = true;
                state.moviesSuccess = false;
            })
            .addCase(fetchTvSeries.fulfilled, (state, action) => {
                state.tvSeries = action.payload;
                state.tvSeriesLoading = false;
                state.tvSeriesError = false;
                state.tvSeriesSuccess = true;
            })
            .addCase(fetchTvSeries.pending, (state, action) => {
                state.tvSeriesLoading = true;
                state.tvSeriesError = false;
                state.tvSeriesSuccess = false;
            })
            .addCase(fetchTvSeries.rejected, (state, action) => {
                state.tvSeriesLoading = false;
                state.tvSeriesError = true;
                state.tvSeriesSuccess = false;
            })
            .addCase(fetchFavourites.fulfilled, (state, action) => {
                state.favourites = action.payload;
                state.favouritesLoading = false;
                state.favouritesError = false;
                state.favouritesSuccess = true;
            })
            .addCase(fetchFavourites.pending, (state, action) => {
                state.favouritesLoading = true;
                state.favouritesError = false;
                state.favouritesSuccess = false;
            })
            .addCase(fetchFavourites.rejected, (state, action) => {
                state.favouritesLoading = false;
                state.favouritesError = true;
                state.favouritesSuccess = false;
            })
    }
})

export const { removeFavourites } = contentSlice.actions;
export default contentSlice.reducer;
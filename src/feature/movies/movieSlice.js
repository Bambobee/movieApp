import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../Services/API/movieApi';
import { APIKey } from '../../Services/API/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
    return response.data;
  }
);
//hugyfgyyuh
export const fetchAsyncMoviesDetail = createAsyncThunk(
  'movies/fetchAsyncMoviesDetail',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {
    Response: 'False',
    Search: [],
    Error: '',
  },
  selectMovie: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectMovie = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log('pending');
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log('fetched Successfully');
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log('Rejected!');
      })
      .addCase(fetchAsyncMoviesDetail.fulfilled, (state, { payload }) => {
        console.log('fetched Successfully');
        state.selectMovie = payload;
      });
  },
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectMovie;
export default movieSlice.reducer;
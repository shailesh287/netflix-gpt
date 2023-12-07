import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Movie  = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  type Trailer = {
    key : string
  }
type MoviesState = {
  nowPlayingMovies: Movie[] | null;
  popularMovies: Movie[] | null;
  trailerVideo: Trailer[] | null ;
};

const initialState: MoviesState = {
  nowPlayingMovies: null,
  popularMovies: null,
  trailerVideo: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
      console.log(state.nowPlayingMovies, "-");
      
    },
    addPopularMovies: (state, action: PayloadAction<Movie[]>) => {
      state.popularMovies = action.payload;

    },
    addTrailerVideo: (state, action: PayloadAction<Trailer[]>) => {
      state.trailerVideo = action.payload;
   
    },

  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies
} = moviesSlice.actions;

export default moviesSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type  Movie = {

}
type GptState = {
  showGptSearch: boolean;
  movieResults: null | Movie[]; // Assuming movieResults is an array of strings, adjust as needed
  movieNames: null | Movie[];   // Assuming movieNames is an array of strings, adjust as needed
}

const initialState: GptState = {
  showGptSearch: false,
  movieResults: null,
  movieNames: null,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action: PayloadAction<{ movieNames: Movie[]; movieResults: Movie[] }>) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;

import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useAppDispatch();

  const nowPlayingMovies = useAppSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;

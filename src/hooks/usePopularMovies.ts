import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useAppDispatch();
  
  const popularMovies = useAppSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies.length && getPopularMovies();
  }, []);
};

export default usePopularMovies;
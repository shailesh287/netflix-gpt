import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useAppDispatch();

  const upcomingMovies = useAppSelector((store) => store.movies.upcomingMovies);
  
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
        
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies.length && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
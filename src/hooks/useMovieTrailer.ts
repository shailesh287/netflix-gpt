import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId: number) => {
  const dispatch = useAppDispatch();

  const trailerVideo = useAppSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video: { type: string; }) => video.type === "Trailer");
   
    
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    dispatch(addTrailerVideo([trailer]));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
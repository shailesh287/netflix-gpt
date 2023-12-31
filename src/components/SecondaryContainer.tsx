import MovieList from "./MovieList";
import { useAppSelector } from "../utils/hooks";

const SecondaryContainer = () => {
  const movies = useAppSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0  pl-4  relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top movies"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;

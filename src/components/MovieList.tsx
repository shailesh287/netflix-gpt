import { Key } from "react";
import MovieCard from "./MovieCard";
type Movie = {
  poster_path: string;
  id: Key | null | undefined;
};

type movieList = {
  title: string;
  movies: Movie[];
};
const MovieList = (props: movieList) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{props.title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {props?.movies.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;

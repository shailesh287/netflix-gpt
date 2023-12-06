import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useAppSelector } from "../utils/hooks";

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  title: string;
}
const MainContainer = () => {
  const movies = useAppSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <div></div>;
  }

  const firstmovie = movies[0];

  if (!firstmovie) {
    return <div></div>;
  }

  const { original_title, overview, id } = firstmovie as Movie;
  console.log({ original_title, overview, id });

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;

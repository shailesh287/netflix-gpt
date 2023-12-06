import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";
import { useAppSelector } from "../utils/hooks";
import useMovieTrailer from "../hooks/useMovieTrailer";

type MovieIdProp = {
  movieId: number;
};
const VideoBackground = (props: MovieIdProp) => {
  const trailerVideo = useAppSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(props.movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.[0]?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;

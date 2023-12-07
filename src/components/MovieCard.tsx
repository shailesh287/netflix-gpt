import { IMG_CDN_URL } from "../utils/constant";

type movieCard = {
  posterPath: string;
};
const MovieCard = (props: movieCard) => {
  if (!props.posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + props.posterPath} />
    </div>
  );
};
export default MovieCard;

import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

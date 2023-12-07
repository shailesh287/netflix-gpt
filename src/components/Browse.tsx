import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const showGptSearch = useAppSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

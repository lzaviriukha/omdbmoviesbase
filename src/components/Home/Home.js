import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/MovieApiKey';
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";


const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => { // get alll movies that we find
      const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Err :", err);
      });
      dispatch(addMovies(response.data)); // movies from response to moviesSlice state
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

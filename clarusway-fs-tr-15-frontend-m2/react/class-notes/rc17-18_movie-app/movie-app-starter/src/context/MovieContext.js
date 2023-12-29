import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const MovieContext = createContext();
export const useMovieContext = () => {
  return useContext(MovieContext);
};
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const getMovies = () => {
  //     setLoading(true);
  //     axios
  //       .get(FEATURED_API)
  //       .then((res) => setMovies(res.data.results))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //     console.log(movies);
  //   };
  //   useEffect(() => {
  //     getMovies();
  //   }, []);

  const getMovies = async (url) => {
    setLoading(true);
    try {
      const {data} = await axios(url);
      console.log(data.results);
      setMovies(data.results)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <MovieContext.Provider value={{ loading, movies, getMovies }}>
      {" "}
      {children}{" "}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;

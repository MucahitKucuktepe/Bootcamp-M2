import React, { useRef, useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { useAuthContext } from "../context/AuthContext";

const Main = () => {
  const { movies, loading, getMovies } = useMovieContext();
  const { curretUser } = useAuthContext();
  // const [search, setSearch] = useState();
  const inputRef = useRef();
  console.log(movies);
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  // const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (search && curretUser) {
    //   getMovies(SEARCH_API);
    // } else if (!curretUser) {
    //   toastWarnNotify("Please Log in to Search");
    // } else {
    //   toastWarnNotify("Please Enter Movie Name");
    // }

    if (inputRef.current.value && curretUser) {
      getMovies(SEARCH_API + inputRef.current.value );
    } else if (!curretUser) {
      toastWarnNotify("Please Log in to Search");
    } else {
      toastWarnNotify("Please Enter Movie Name");
    }
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          // onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visualy-hidden">Loading</span>{" "}
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const { movies, loading } = useMovieContext();
  console.log(movies);
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52" role="status">
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

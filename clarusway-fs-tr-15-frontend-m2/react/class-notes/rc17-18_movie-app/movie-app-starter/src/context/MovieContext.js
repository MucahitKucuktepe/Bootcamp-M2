import React, { createContext, useContext } from "react";

export const MovieContext = createContext();
export const useMovieContext = () => {
  return useContext(MovieContext);
};

const MovieContextProvider = ({ children }) => {
  return (
    <div>
      <MovieContext.Provider value={value}> {children} </MovieContext.Provider>
    </div>
  );
};

export default MovieContextProvider;

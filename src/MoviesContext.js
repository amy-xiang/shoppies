import React, { createContext, useState } from "react";

export const MoviesContext = createContext();

// referenced Chris B. (Oct 19, 2019), stackoverflow: https://stackoverflow.com/questions/58459756/how-do-i-update-an-array-using-the-usecontext-hook

const MoviesContextProvider = (props) => {
  const [results, updateResults] = useState([]);
  const [nominations, updateNominations] = useState({});

  const movies = {
    searchResults: results,
    movieNominations: nominations,
    updateSearchResults: (resultsFromAPI) => {
      updateResults([...resultsFromAPI]);
    },
    updateMovieNominations: (movieNominations) => {
      updateNominations(movieNominations);
    },
  };

  return (
    <MoviesContext.Provider value={{ ...movies }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

import React, { createContext, useState } from "react";

export const MoviesContext = createContext();

// referenced Chris B. (Oct 19, 2019), stackoverflow: https://stackoverflow.com/questions/58459756/how-do-i-update-an-array-using-the-usecontext-hook

const MoviesContextProvider = (props) => {
  const [results, updateResults] = useState([]);
  const [nominations, updateNominations] = useState(new Map());
  const [modal, setModal] = useState(false);

  const movies = {
    searchResults: results,
    movieNominations: nominations,
    updateSearchResults: (resultsFromAPI) => {
      if (resultsFromAPI.length === 0) {
        updateResults([...resultsFromAPI]);
      } else {
        resultsFromAPI.forEach((movie) => {
          if (nominations.has(movie.imdbID)) {
            movie["Nominated"] = 1;
          } else if (!nominations.has(movie.imdbID)) {
            movie["Nominated"] = 0;
          }
        });

        updateResults([...resultsFromAPI]);
      }
    },
    updateMovieNominations: (movieNominations) => {
      updateNominations(movieNominations);
    },
    modal: modal,
    setModal: (value) => {
      setModal(value);
    },
  };

  return (
    <MoviesContext.Provider value={{ ...movies }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

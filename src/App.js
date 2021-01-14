import React, { useState, useContext } from "react";
import AnimateHeight from "react-animate-height";
import "./App.css";
import { MoviesContext } from "./MoviesContext";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const App = () => {
  const [height, setHeight] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const context = useContext(MoviesContext);

  const fetchData = async (term) => {
    if (term) {
      setHeight(0);
      return await fetch(
        `http://www.omdbapi.com/?s=${term}&type=movie&apikey=22c53a9c`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            context.updateSearchResults(data.Search);
            setHeight("auto");
            setErrorMessage(null);
            console.log(data.Search);
          } else {
            context.updateSearchResults([]);
            setHeight("auto");
            setErrorMessage(data.Error);
          }
        });
    }
  };

  return (
    <div id="App">
      <h1 id="shoppies" className="Title">
        The Shoppies
      </h1>
      <SearchBar onSubmit={fetchData} />
      <div id="CardsContainer" className="FlexGrid">
        <div id="MovieResults" className="Col">
          <div className="Card">
            <AnimateHeight
              id="MovieResultsAnimation"
              duration={1000}
              height={height}
              easing={"ease"}
              animateOpacity={true}
            >
              {errorMessage ? (
                <p className="ErrorMessage">{errorMessage}</p>
              ) : (
                <MovieList movies={context.searchResults} />
              )}
            </AnimateHeight>
          </div>
        </div>
        <div id="Nominations" className="Col">
          <div className="Card">placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default App;

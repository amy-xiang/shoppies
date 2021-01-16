import React, { useState, useContext } from "react";
import AnimateHeight from "react-animate-height";
import { ReactComponent as Nominate } from "./assets/trophy.svg";
import "./App.css";
import { MoviesContext } from "./MoviesContext";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Modal from "./components/Modal";

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
      <Modal
        show={context.openModal}
        message={context.modalMessage}
        onClose={() => {
          context.setOpenModal(false);
        }}
      />
      <h1 id="shoppies" className="Title">
        The Shoppies
      </h1>
      <p className="Description">
        Nominate a movie by pressing the &nbsp;
        <Nominate className="StaticNominateIcon" />
      </p>
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
          <div className="Card">
            <MovieList movies={[...context.movieNominations.values()]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

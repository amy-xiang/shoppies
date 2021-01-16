import React, { useState, useContext } from "react";
import "./MovieDetails.css";
import { ReactComponent as Nominate } from "../assets/trophy.svg";
import { MoviesContext } from "../MoviesContext";

const MovieDetails = ({ imdbID, title, year, nominated }) => {
  const context = useContext(MoviesContext);

  const handleClick = () => {
    if (nominated === 0 && context.movieNominations.size >= 5) {
      context.setModal(true);
    } else if (nominated === 1 && context.movieNominations.has(imdbID)) {
      context.movieNominations.delete(imdbID);
      context.updateSearchResults(context.searchResults);
    } else if (nominated === 0 && !context.movieNominations.has(imdbID)) {
      context.movieNominations.set(imdbID, {
        Title: title,
        Year: year,
        imdbID: imdbID,
        Nominated: 1,
      });
      context.updateSearchResults(context.searchResults);
    }
  };

  return (
    <div className="MoviesContainer">
      <button
        id={"Nominate_" + imdbID}
        className="NominateButton"
        onClick={handleClick}
      >
        <Nominate
          className="NominateIcon"
          fill={nominated === 1 ? "goldenrod" : "black"}
        />
      </button>
      <div id={title} className="MovieDetails">
        <p>
          {title} ({year})
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;

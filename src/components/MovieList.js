import React from "react";
import MovieDetails from "./MovieDetails";

const MovieList = (props) => {
  const movies = props.movies.map(({ Title, Year, imdbID }) => {
    return <MovieDetails key={imdbID} title={Title} year={Year} />;
  });

  return <div>{movies}</div>;
};

export default MovieList;

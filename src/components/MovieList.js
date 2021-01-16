import React from "react";
import MovieDetails from "./MovieDetails";

const MovieList = (props) => {
  const movies = props.movies.map(({ Title, Year, imdbID, Nominated }) => {
    return (
      <MovieDetails
        key={imdbID}
        imdbID={imdbID}
        title={Title}
        year={Year}
        nominated={Nominated}
      />
    );
  });

  return <div>{movies}</div>;
};

export default MovieList;

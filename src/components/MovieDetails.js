import React from "react";
import "./MovieDetails.css";
import { ReactComponent as Nominate } from "../assets/trophy.svg";

const MovieDetails = ({ title, year }) => {
  return (
    <div className="MoviesContainer">
      <button id={"Nominate " + title} className="NominateButton">
        <Nominate className="NominateIcon" fill="black" />
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

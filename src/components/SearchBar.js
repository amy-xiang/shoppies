import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../assets/search.svg";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(term.trim());
  };

  return (
    <div id="SearchBarContainer">
      <img src={SearchIcon} alt="SearchIcon" id="SearchIcon" />
      <form onSubmit={handleSubmit} id="SearchForm">
        <input
          id="SearchInput"
          type="text"
          key="search"
          placeholder="Movie Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;

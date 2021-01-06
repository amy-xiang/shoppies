import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentDidMount() {
    console.log("component mounted");
  }

  fetchData = async term => {
    return await fetch(
      `http://www.omdbapi.com/?s=${term}&type=movie&apikey=22c53a9c`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.Search });
        console.log(data.Search);
      });
  };

  render() {
    return (
      <div id="App">
        <h1 id="shoppies" className="title">
          Shoppies
        </h1>
        <SearchBar onSubmit={this.fetchData} />
      </div>
    );
  }
}

export default App;

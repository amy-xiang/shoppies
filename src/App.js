import React, { Component } from "react";
import AnimateHeight from "react-animate-height";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [], height: 0, errorMessage: null };
  }

  componentDidMount() {
    console.log("component mounted");
  }

  fetchData = async (term) => {
    if (term) {
      this.setState({ height: 0 });
      return await fetch(
        `http://www.omdbapi.com/?s=${term}&type=movie&apikey=22c53a9c`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            this.setState({
              results: data.Search,
              height: "auto",
              errorMessage: null,
            });
            console.log(data.Search);
          } else {
            this.setState({
              results: [],
              height: "auto",
              errorMessage: data.Error,
            });
          }
        });
    }
  };

  render() {
    return (
      <div id="App">
        <h1 id="shoppies" className="Title">
          The Shoppies
        </h1>
        <SearchBar onSubmit={this.fetchData} />
        <div id="CardsContainer" className="FlexGrid">
          <div id="MovieResults" className="Col">
            <div className="Card">
              <AnimateHeight
                id="MovieResultsAnimation"
                duration={1000}
                height={this.state.height}
                easing={"ease"}
                animateOpacity={true}
              >
                {this.state.errorMessage ? (
                  <p className="ErrorMessage">{this.state.errorMessage}</p>
                ) : (
                  <MovieList movies={this.state.results} />
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
  }
}

export default App;

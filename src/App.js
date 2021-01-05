import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentDidMount() {
    console.log("component mounted");
  }

  render() {
    return <div id="App">hello world</div>;
  }
}

export default App;

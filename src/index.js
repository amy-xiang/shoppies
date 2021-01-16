import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MoviesContextProvider from "./MoviesContext";

ReactDOM.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

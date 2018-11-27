import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components.
import { Routes } from "./Routes";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

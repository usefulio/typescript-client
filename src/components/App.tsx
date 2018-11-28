import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components.
import { Header } from "./Header";
import { Routes } from "./Routes";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Routes />
        </React.Fragment>
      </Router>
    );
  }
}

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components.
import Projects from "../pages/Projects";
import Project from "../pages/Project";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Projects} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:id" component={Project} />
        </div>
      </Router>
    );
  }
}

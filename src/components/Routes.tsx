import * as React from "react";
import { Route } from "react-router-dom";

// Components.
import { Projects } from "../pages/Projects";
import { Project } from "../pages/Project";

export class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Projects} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/:id" component={Project} />
      </React.Fragment>
    );
  }
}

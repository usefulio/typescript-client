import * as React from "react";

// Components.
import { SignIn } from "../pages/SignIn";
import { PrivateRoute } from "./PrivateRoute";
import { Projects } from "../pages/Projects";
import { Project } from "../pages/Project";
import { SignInRoute } from "./SignInRoute";

export class Routes extends React.Component {
  render() {
    const signInPath = "/signin";
    return (
      <React.Fragment>
        <PrivateRoute
          path="/"
          exact
          component={Projects}
          redirectTo={signInPath}
        />
        <SignInRoute
          path={signInPath}
          exact
          component={SignIn}
          redirectTo="/"
        />
        <PrivateRoute
          path="/projects"
          exact
          component={Projects}
          redirectTo={signInPath}
        />
        <PrivateRoute
          path="/projects/:id"
          component={Project}
          redirectTo={signInPath}
        />
      </React.Fragment>
    );
  }
}

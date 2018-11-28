import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export interface SignInRouteProps extends RouteProps {
  redirectTo: string;
}

export class SignInRoute extends React.Component<SignInRouteProps> {
  render() {
    const { component: Component, redirectTo, ...rest } = this.props;

    const token = localStorage.getItem("token");

    return (
      <Route
        {...rest}
        render={props => {
          return token ? (
            <Redirect
              to={{ pathname: redirectTo, state: { from: props.location } }}
            />
          ) : (
            <Component {...props} />
          );
        }}
      />
    );
  }
}

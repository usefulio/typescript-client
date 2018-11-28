import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export interface PrivateRouteProps extends RouteProps {
  redirectTo: string;
}

export class PrivateRoute extends React.Component<PrivateRouteProps> {
  render() {
    const { component: Component, redirectTo, ...rest } = this.props;

    const token = localStorage.getItem("token");

    return (
      <Route
        {...rest}
        render={props => {
          return token ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: redirectTo, state: { from: props.location } }}
            />
          );
        }}
      />
    );
  }
}

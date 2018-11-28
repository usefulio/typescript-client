import * as React from "react";
import { ApolloError } from "apollo-client";

export interface ErrorProps {
  error: ApolloError;
}

export class Error extends React.Component<ErrorProps> {
  render() {
    return <div>{this.props.error.message}</div>;
  }
}

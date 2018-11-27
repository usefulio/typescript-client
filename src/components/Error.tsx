import * as React from "react";
import { ApolloError } from "apollo-client";

interface Props {
  error: ApolloError;
}

export class Error extends React.Component<Props> {
  render() {
    return <div>{this.props.error.message}</div>;
  }
}

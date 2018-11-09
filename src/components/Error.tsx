import React, { Component } from "react";
import PropTypes from "prop-types";
import { ApolloError } from "apollo-client";

export interface ErrorProps {
  error: ApolloError;
}

export class Error extends Component<ErrorProps> {
  static propTypes = {
    error: PropTypes.instanceOf(ApolloError),
  };

  render() {
    const { error } = this.props;
    return <div>{JSON.stringify(error)}</div>;
  }
}

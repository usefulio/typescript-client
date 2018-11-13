import React, { Component } from "react";
import PropTypes from "prop-types";
import { ApolloError } from "apollo-client";

export interface ErrorProps {
  error: ApolloError;
}

export class Error extends Component<ErrorProps> {
  static propTypes = {
    error: PropTypes.instanceOf(ApolloError).isRequired,
  };

  render() {
    return <div>{this.props.error.message}</div>;
  }
}

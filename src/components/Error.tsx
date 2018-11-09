import React, { Component } from "react";
import PropTypes from "prop-types";

declare interface ErrorProps {
  error: object;
}

export default class Error extends Component {
  static propTypes = {
    error: PropTypes.object,
  };

  render() {
    const { error } = this.props as ErrorProps;
    return <div>{JSON.stringify(error)}</div>;
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

export declare interface IProject {
  id: number;
  name: string;
  createdAt: string;
}

export default class Project extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { id, name, createdAt } = this.props as IProject;

    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{new Date(createdAt).toLocaleString()}</td>
      </tr>
    );
  }
}

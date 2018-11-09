import React, { Component } from "react";
import PropTypes from "prop-types";

export interface ProjectProps {
  id: number;
  name: string;
  createdAt: string;
}

export class Project extends Component<ProjectProps> {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  };

  render() {
    const { id, name, createdAt } = this.props;

    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{new Date(createdAt).toLocaleString()}</td>
      </tr>
    );
  }
}

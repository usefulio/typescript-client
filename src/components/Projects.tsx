import React, { Component } from "react";
import PropTypes from "prop-types";

import Project, { IProject } from "./Project";

declare interface ProjectProps {
  projects: IProject[];
}

export default class Projects extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { projects } = this.props as ProjectProps;

    return (
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Created At</td>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <Project {...project} />
          ))}
        </tbody>
      </table>
    );
  }
}

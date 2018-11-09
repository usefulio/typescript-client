import React, { Component } from "react";
import PropTypes from "prop-types";

import { Project, ProjectProps } from "./Project";

export interface ProjectsProps {
  projects: ProjectProps[];
}

export class Projects extends Component<ProjectsProps> {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { projects } = this.props;

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

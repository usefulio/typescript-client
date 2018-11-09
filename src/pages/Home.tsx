import React, { Component } from "react";

// Components.
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { Projects } from "../components/Projects";
import { ProjectsQuery } from "../components/ProjectsQuery";

// GraphQL queries.
import projectsQuery from "../graphql/queries/projects.gql";

export default class Home extends Component {
  render() {
    return (
      <ProjectsQuery query={projectsQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          } else if (error) {
            return <Error error={error} />;
          }
          return <Projects projects={data.projects} />;
        }}
      </ProjectsQuery>
    );
  }
}

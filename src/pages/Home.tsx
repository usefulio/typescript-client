import React, { Component } from "react";
import { Query } from "react-apollo";

// Components.
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";

// Components.
import { Projects } from "../components/Projects";

// GraphQL queries.
import projectsQuery from "../graphql/queries/projects.gql";

export default class Home extends Component {
  render() {
    return (
      <Query query={projectsQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          } else if (error) {
            return <Error error={error} />;
          }
          return <Projects projects={data.projects} />;
        }}
      </Query>
    );
  }
}

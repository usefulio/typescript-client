import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components.
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { ProjectsQuery } from "../components/ProjectsQuery";

// GraphQL queries.
import projectsQuery from "../graphql/queries/projects.gql";

const styles = (theme: Theme) => ({
  root: {
    minWidth: 700,
  },
});

interface Props extends WithStyles<typeof styles> {}

class Projects extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <ProjectsQuery query={projectsQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          } else if (error) {
            return <Error error={error} />;
          }
          return (
            <Table className={classes.root}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Creation Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.projects.map(project => {
                  const url = `/projects/${project.id}`;
                  const createdAt = new Date(
                    project.createdAt,
                  ).toLocaleString();
                  return (
                    <TableRow key={project.id}>
                      <TableCell>{project.id}</TableCell>
                      <TableCell>
                        <Link to={url}>{project.name}</Link>
                      </TableCell>
                      <TableCell>{createdAt}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          );
        }}
      </ProjectsQuery>
    );
  }
}

export default withStyles(styles)(Projects);

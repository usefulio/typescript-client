import gql from "graphql-tag";
import * as React from "react";
import { compose } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router-dom";

// Components.
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { ProjectQuery } from "../components/ProjectQuery";

export const PROJECT_QUERY = gql`
  query project($id: Int!) {
    project(id: $id) {
      id
      name
      createdAt
      user {
        id
        fullName
      }
    }
  }
`;

const styles = (theme: Theme) => ({
  root: {
    minWidth: 700,
  },
});

type RouteParams = {
  id: string;
};

interface Props
  extends WithStyles<typeof styles>,
    RouteComponentProps<RouteParams> {}

class Project extends React.Component<Props> {
  render() {
    const { classes, match } = this.props;
    return (
      <ProjectQuery
        query={PROJECT_QUERY}
        variables={{ id: parseInt(match.params.id, 10) }}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          } else if (error) {
            return <Error error={error} />;
          }
          const createdAt = new Date(data.project.createdAt).toLocaleString();
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
                <TableRow>
                  <TableCell>{data.project.id}</TableCell>
                  <TableCell>{data.project.name}</TableCell>
                  <TableCell>{createdAt}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          );
        }}
      </ProjectQuery>
    );
  }
}

const WrappedProject = compose(
  withRouter,
  withStyles(styles),
)(Project);

export { WrappedProject as Project };

import { Query } from "react-apollo";

import { ProjectProps } from "./Project";

interface Data {
  projects: ProjectProps[];
}

interface Variables {}

export class ProjectsQuery extends Query<Data, Variables> {}

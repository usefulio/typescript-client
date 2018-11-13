import { Query } from "react-apollo";

import { Project } from "../types/Project";

interface Data {
  projects: Project[];
}

interface Variables {}

export class ProjectsQuery extends Query<Data, Variables> {}

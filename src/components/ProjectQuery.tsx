import { Query } from "react-apollo";

import { Project } from "../types/Project";

interface Data {
  project: Project;
}

interface Variables {
  id: number;
}

export class ProjectQuery extends Query<Data, Variables> {}

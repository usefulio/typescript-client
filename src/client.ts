import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";

import cache from "./client/cache";
import clientStateLink from "./client/links/clientStateLink";
import errorLink from "./client/links/errorLink";
import httpLink from "./client/links/httpLink";
import requestLink from "./client/links/requestLink";

export default new ApolloClient({
  link: ApolloLink.from([errorLink, requestLink, clientStateLink, httpLink]),
  cache,
  connectToDevTools: true,
});

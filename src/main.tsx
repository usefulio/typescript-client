import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";

import client from "./client";

// Components.
import App from "./components/App";

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);

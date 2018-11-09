import { onError } from "apollo-link-error";

export default onError(({ response, graphQLErrors, networkError }) => {
  if (response) {
    response.errors = null;
  }
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

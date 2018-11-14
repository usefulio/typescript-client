# TypeScript React Client

This Startup Kit is written in TypeScript and uses [Apollo Client](https://www.apollographql.com/docs/react/) + [React](https://github.com/facebook/react) + [Material-UI](https://material-ui.com/) + [Parcel](https://parceljs.org/).

## Directories structure

All the source files are located in the `src` folder which is divided into following directories:

- `client` - all the files needed to setup Apollo Client
- `components` - components used in the app (also reusable ones)
- `graphql`
  - `queries` - all the GraphQL queries used in the app
  - `mutations` - all the GraphQL mutations used in the app
- `pages` - components used as pages in routing
- `types` - some TypeScript types defined to be used as component property types

The test files are located in the `tests` directory.

## How to run locally

To run project locally in development mode, first you have to create `.env` file in the root directory of the project. You shouldn't commit this file. File content should look like:

```sh
GRAPHQL_URL=http://localhost:4000
```

Next you can run project by executing command:

```sh
npm run dev
```

## How to run on production

In your CI tool you have to define environment variables. Here is a list of variables:

```sh
GRAPHQL_URL=http://localhost:4000
```

Next you have to build project by running command:

```sh
npm run build
```

## How to test

To test project, you have to run command:

```sh
npm run test
```

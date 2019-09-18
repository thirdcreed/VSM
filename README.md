<h1 align="center"><strong>VSM BOILERPLATE</strong></h1>

<br />

## Features

- **GraphQL server:** The server uses [`graphql-yoga`](https://github.com/prisma/graphql-yoga) which is based on Apollo Server & Express
- **Apollo Client:** The project comes with a preconfigured setup for Apollo Client
- **GraphQL database:** Includes GraphQL database binding to [Prisma](https://www.prismagraphql.com) (running on MySQL)
- **GraphQL Playground**: [GraphQL Playground](https://github.com/prisma/graphql-playground) & [query performance tracing](https://github.com/apollographql/apollo-tracing)

**React & Apollo tutorial**, visit [How to GraphQL](https://www.howtographql.com/react-apollo/0-introduction/). You can more learn about the idea behind GraphQL boilerplates [here](https://blog.graph.cool/graphql-boilerplates-graphql-create-how-to-setup-a-graphql-project-6428be2f3a5).

## Documentation

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground
* `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
* `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

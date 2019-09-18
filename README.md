<h1 align="center"><strong>VSM</strong></h1>

<br />

## What is it
Many of the user features are just not known right now.  I don't know what people want in a VSM and I need to spend time with product, but it will be a tool for both designing and learning about VSMs, and a multi-user platform for both storing and nesting vsms.

##Developers

### Tools

- **GraphQL server:** The server uses [`graphql-yoga`](https://github.com/prisma/graphql-yoga) which is based on Apollo Server & Express
- **Apollo Client:**
- **GraphQL database:** Can include graphql database with prisma, but right now I've just have a simple lowDB back end to test simple data structure, and delay the db decisions.
- **GraphQL Playground**: [GraphQL Playground](https://github.com/prisma/graphql-playground) & [query performance tracing](https://github.com/apollographql/apollo-tracing)

**React & Apollo tutorial**, visit [How to GraphQL](https://www.howtographql.com/react-apollo/0-introduction/). You can more learn about the idea behind GraphQL boilerplates [here](https://blog.graph.cool/graphql-boilerplates-graphql-create-how-to-setup-a-graphql-project-6428be2f3a5).

## Documentation

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground
* `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
* `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

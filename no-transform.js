const { ApolloServer, ForbiddenError, makeExecutableSchema } = require('apollo-server');

const typeDefs = `
  type Query {
    film: Film
  }

  type Film {
    title: String
    director: String
}
`

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      film: () => ({ title: 'A New Hope'})
    },
    Film: {
      director: () => {
        throw new ForbiddenError('oh no')
      }
    }
  },
})

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
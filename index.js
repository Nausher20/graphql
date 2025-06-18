const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/book');
const resolvers = require('./src/bookResolver');
const resolvers = require('./src/bookschema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

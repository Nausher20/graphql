const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./typedefs/typedefs');
const resolvers = require('./resolvers/resolvers');

const MONGODB = 'mongodb://localhost:27017/';

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connection successful");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
